using Inspection.HostedService;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.EntityFrameworkCore;
using NLog;
using NLog.Web;
using System.Net;
using System.Reflection;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;
using VICSS.Infrastructure.KafkaWrapper.Implementation;
using VICSS.Infrastructure.KafkaWrapper.Interface;
using VICSS.Service.Inspection.HostedService;
using VICSS.Service.Inspection.Implementation;
using VICSS.Service.Inspection.Interface;
using static VICSS.Service.Inspection.Helper.CommonMethods;

var logger = NLog.LogManager.Setup().LoadConfigurationFromAppSettings().GetCurrentClassLogger();
logger.Debug("Inspection service : init nlog");

var builder = WebApplication.CreateBuilder(args);

var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
builder.Configuration
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddJsonFile($"appsettings.{env}.json", true, true);

//Add DBcontext
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<InspectionDBContext>(options => options.UseSqlServer(connectionString,
    config => config.EnableRetryOnFailure(Convert.ToInt16(builder.Configuration?.GetValue<string>("SQlConnectionRetry")?.ToString()))
    ));

// NLog: Setup NLog for Dependency injection
builder.Logging.ClearProviders();
builder.Logging.SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Trace);
builder.Host.UseNLog();

// Add services to the container.
builder.Services.AddTransient(typeof(IUnitOfWork<>), typeof(UnitOfWork<>));
builder.Services.AddScoped(typeof(IGenericRepository<,>), typeof(GenericRepository<,>));
builder.Services.AddSingleton<IpDetailsProvider>();
builder.Services.AddScoped<ICommonMethods, CommonMethods>();

UserValidator.Initialize(builder.Configuration);
IpAddressMapper.Initialize(builder.Configuration);
TabletIpAddressMapper.Initialize(builder.Configuration);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Add HttpContextAccessor
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

//read the known proxy
var knownProxies = builder.Configuration.GetSection("KnownProxies").Value;
builder.Services.Configure<ForwardedHeadersOptions>(options =>
{
    options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
    options.ForwardLimit = null;
    options.KnownProxies.Clear();
    foreach (var ip in knownProxies.Split(new char[] { ',' }))
    {
        options.KnownProxies.Add(IPAddress.Parse(ip));
    }
});


builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));
builder.Services.AddTransient<IKafkaProducer, KafkaProducer>();
builder.Services.AddTransient<IKafkaConsumer, KafkaConsumer>();
builder.Services.AddCors(opt =>
{
    opt.AddDefaultPolicy(builder => builder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
});

builder.Services.AddHostedService<GetInspectionDetailsByIdHostedServiceImplementation>();
builder.Services.AddHostedService<GetExamCodeHostedServiceImplementation>();
builder.Services.AddHostedService<GetInspectionCreationStatusHostedServiceImplementation>();
builder.Services.AddHostedService<GetStartInspectionHostedService>();
builder.Services.AddHostedService<GetStartTestHostedService>();
builder.Services.AddHttpContextAccessor();

//ADDING COMMUNICATION PATH
/*builder.Services.AddHttpClient();
builder.Services.AddSingleton<IInternalServiceAPICall>();*/

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();

app.UseAuthorization();

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

app.MapControllers();
app.UseCors();
app.Run();
