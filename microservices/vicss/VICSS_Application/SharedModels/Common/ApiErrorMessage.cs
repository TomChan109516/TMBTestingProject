using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace VICSS.Shared.Models.Common
{
    public class ApiErrorMessage
    {
        public ApiErrorMessage() { }

        public HttpStatusCode HttpStatusCode { get; set; }

        public string? ErrorMessage {  get; set; }
    }
}
