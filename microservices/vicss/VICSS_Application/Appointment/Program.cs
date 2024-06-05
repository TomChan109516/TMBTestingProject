using ICSS.Infrastructure.InternalAPICall.Helper;
using Microsoft.EntityFrameworkCore;
using NLog;
using NLog.Web;
using System.Reflection;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;
using VICSS.Infrastructure.InternalAPICall.Interface;
using VICSS.Infrastructure.KafkaWrapper.Implementation;
using VICSS.Infrastructure.KafkaWrapper.Interface;
using VICSS.Service.Appointment.HostedService;

//Init Nlog
var logger = NLog.LogManager.Setup().LoadConfigurationFromAppSettings().GetCurrentClassLogger();
logger.Debug("Appointment service : init nlog");

var builder = WebApplication.CreateBuilder(args);

var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
builder.Configuration
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddJsonFile($"appsettings.{env}.json", true, true);


builder.Services.AddHttpClient("InternalServiceAPICall", client =>
{
    client.BaseAddress = new Uri(builder.Configuration.GetValue<string>("Gateway_Service_Url"));
});

//Add DBcontext
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppointmentDBContext>(options => options.UseSqlServer(connectionString,
    config => config.EnableRetryOnFailure(Convert.ToInt16(builder.Configuration?.GetValue<string>("SQlConnectionRetry")?.ToString()))
    ));

// NLog: Setup NLog for Dependency injection
builder.Logging.ClearProviders();
builder.Logging.SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Trace);
builder.Host.UseNLog();

// Add services to the container.
builder.Services.AddTransient(typeof(IUnitOfWork<>), typeof(UnitOfWork<>));
builder.Services.AddScoped(typeof(IGenericRepository<,>), typeof(GenericRepository<,>));

builder.Services.AddTransient<IKafkaProducer, KafkaProducer>();
builder.Services.AddTransient<IKafkaConsumer, KafkaConsumer>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());


builder.Services.AddCors(opt =>
{
    opt.AddDefaultPolicy(builder => builder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
});

builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));
builder.Services.AddHostedService<HostedServiceGetVehicleDataFromAppointment>();
//ADDING COMMUNICATION PATH
builder.Services.AddSingleton<IInternalServiceAPICall, InternalServiceAPICall>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors();

app.Run();
