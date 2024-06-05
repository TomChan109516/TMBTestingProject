using Microsoft.AspNetCore.Mvc;

namespace LoggingService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SampleController : ControllerBase
    {

        public SampleController(ILogger<SampleController> logger)
        {
            
        }

        
    }
}
