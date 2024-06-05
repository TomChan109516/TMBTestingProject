using Artu.Helpers;
using Microsoft.EntityFrameworkCore;
using NLog;
using NLog.Web;
using System.Reflection;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;
using VICSS.Infrastructure.KafkaWrapper.Implementation;
using VICSS.Infrastructure.KafkaWrapper.Interface;
using VICSS.Service.Artu.Helper;
using VICSS.Service.Artu.HostedService;
using VICSS.Service.Artu.Implementation;
using VICSS.Service.Artu.Interface;
using VICSS.Service.Inspection.HostedService;
using VICSS.Services.Artu.Helper;


var logger = NLog.LogManager.Setup().LoadConfigurationFromAppSettings().GetCurrentClassLogger();
logger.Debug("Artu service : init nlog");

var builder = WebApplication.CreateBuilder(args);
var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
builder.Configuration
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddJsonFile($"appsettings.{env}.json", true, true);

//Add DBcontext
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ArtuDbContext>(options => options.UseSqlServer(connectionString,
    config => config.EnableRetryOnFailure(Convert.ToInt16(builder.Configuration?.GetValue<string>("SQlConnectionRetry")?.ToString()))
    ));

// NLog: Setup NLog for Dependency injection
builder.Logging.ClearProviders();
builder.Logging.SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Trace);
builder.Host.UseNLog();

// Add services to the container.
builder.Services.AddTransient(typeof(IUnitOfWork<>), typeof(UnitOfWork<>));
builder.Services.AddScoped(typeof(IGenericRepository<,>), typeof(GenericRepository<,>));
builder.Services.AddTransient<UtilityHelper>();

builder.Services.AddControllers().AddXmlDataContractSerializerFormatters();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.OperationFilter<RawXmlRequestOperationFilter>();
});
builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());

builder.Services.AddCors(opt =>
{
    opt.AddDefaultPolicy(builder => builder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
});

builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));
builder.Services.AddTransient<IKafkaProducer, KafkaProducer>();
builder.Services.AddTransient<IKafkaConsumer, KafkaConsumer>();
builder.Services.AddTransient<ISendMessageToInspection, SendMessageToInspection>();
builder.Services.AddTransient<IArtuTcpClient, ArtuTcpClient>();
builder.Services.AddHostedService<GetVehicleInfoHostedService>();
builder.Services.AddHostedService<GetTestAcknowledgementHostedService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();