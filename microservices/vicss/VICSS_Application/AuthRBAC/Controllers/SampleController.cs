using Microsoft.AspNetCore.Mvc;

namespace AuthRBAC.Controllers
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
