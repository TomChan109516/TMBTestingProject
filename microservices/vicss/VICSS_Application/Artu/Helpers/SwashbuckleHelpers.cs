using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Diagnostics.CodeAnalysis;

namespace Artu.Helpers
{
    [ExcludeFromCodeCoverage]
    public class RawXmlRequestAttribute : Attribute
    {
        public RawXmlRequestAttribute()
        {
            MediaType = "application/xml";
        }

        public string MediaType { get; set; }
    }

    [ExcludeFromCodeCoverage]
    public class RawXmlRequestOperationFilter : IOperationFilter
    {
        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {
            RawXmlRequestAttribute rawXmlRequestAttribute = context.MethodInfo.GetCustomAttributes(true)
               .SingleOrDefault((attribute) => attribute is RawXmlRequestAttribute) as RawXmlRequestAttribute;
            if (rawXmlRequestAttribute != null)
            {
                operation.RequestBody = new OpenApiRequestBody();
                operation.RequestBody.Content.Add(rawXmlRequestAttribute.MediaType, new OpenApiMediaType()
                {
                    Schema = new OpenApiSchema()
                    {
                        Type = "string"
                    }
                });
            }
        }
    }
}
