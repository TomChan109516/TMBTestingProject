using System.Reflection;
using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;
using Microsoft.EntityFrameworkCore;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Service.CentreManagement.HostedService;
using VICSS.Infrastructure.KafkaWrapper.Implementation;
using VICSS.Infrastructure.KafkaWrapper.Interface;
using NLog.Web;
using NLog;

//Init Nlog
var logger = NLog.LogManager.Setup().LoadConfigurationFromAppSettings().GetCurrentClassLogger();
logger.Debug("Centre service : init nlog");

var builder = WebApplication.CreateBuilder(args);

var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
builder.Configuration
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddJsonFile($"appsettings.{env}.json", true, true);


//Add DBcontext
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<CentreDBContext>(options => options.UseSqlServer(connectionString,    
    config => config.EnableRetryOnFailure(Convert.ToInt16(builder.Configuration?.GetValue<string>("SQlConnectionRetry")?.ToString()))
    ));

// NLog: Setup NLog for Dependency injection
builder.Logging.ClearProviders();
builder.Logging.SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Trace);
builder.Host.UseNLog();

// Add services to the container.
builder.Services.AddTransient(typeof(IUnitOfWork<>), typeof(UnitOfWork<>));
builder.Services.AddScoped(typeof(IGenericRepository<,>), typeof(GenericRepository<,>));

builder.Services.AddControllers().ConfigureApiBehaviorOptions(options =>
{
    options.SuppressMapClientErrors = true;
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));

builder.Services.AddCors(opt =>
{
    opt.AddDefaultPolicy(builder => builder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
});

builder.Services.AddTransient<IKafkaProducer, KafkaProducer>();
builder.Services.AddTransient<IKafkaConsumer, KafkaConsumer>();
builder.Services.AddHostedService<GetCentreHostedServiceImplementation>();
builder.Services.AddHostedService<GetCentreDetailsByCentreIdHostedServiceImplementation>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors();

app.Run();
