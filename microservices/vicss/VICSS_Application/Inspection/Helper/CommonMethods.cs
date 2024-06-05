namespace VICSS.Service.Inspection.Helper
{
    using System.Collections.Generic;
    using System.Net;
    using VICSS.Service.Inspection.Domain;

    public static class CommonMethods
    {
        public static List<OhmMeasuringMethodDto> OhmMeasuringMethodMockData()
        {
            return new List<OhmMeasuringMethodDto>
            {
                new OhmMeasuringMethodDto() { Id=1,OhmMethod="Manual",Status=1},
                new OhmMeasuringMethodDto() { Id=2,OhmMethod="Automatic",Status=1}
            };
        }

        public class IpDetailsProvider
        {
            private readonly Dictionary<string, (string LaneId, string StationId, string DeviceType)> _ipDetails;

            public IpDetailsProvider(IConfiguration configuration)
            {
                _ipDetails = configuration.GetSection("IpDetails")
                    .GetChildren()
                    .ToDictionary(
                        x => x.Key,
                        x => (x.GetSection("LaneId").Value, x.GetSection("StationId").Value, x.GetSection("DeviceType").Value)
                    );
            }

            public (string LaneId, string StationId, string DeviceType, HttpStatusCode StatusCode) GetDetailsByIp(string ipAddress)
            {
                if (_ipDetails.TryGetValue(ipAddress, out var details))
                {
                    return (details.LaneId, details.StationId, details.DeviceType, HttpStatusCode.OK);
                }

                return (null, null, null, HttpStatusCode.NotFound);
            }
        }

        public static class UserValidator
        {
            private static Dictionary<string, string> _users;

            public static void Initialize(IConfiguration configuration)
            {
                _users = configuration.GetSection("Users").Get<Dictionary<string, string>>();
            }

            public static bool ValidateUser(string userId, string password)
            {
                return _users.TryGetValue(userId, out var validPassword) && validPassword == password;
            }
        }

        public static class TabletIpAddressMapper
        {
            private static Dictionary<string, (string, string, string, string)> _ipDetails;

            public static void Initialize(IConfiguration configuration)
            {
                _ipDetails = configuration.GetSection("IpDetails")
                    .GetChildren()
                    .ToDictionary(
                        x => x.Key,
                        x => (x.GetSection("LaneId").Value, x.GetSection("StationId").Value, x.GetSection("UserName").Value, x.GetSection("DeviceType").Value)
                    );
            }

            public static (string LaneId, string StationId, string UserName, string DeviceType) MapIpAddressToUserDetails(string ipAddress)
            {
                try
                {
                    if (_ipDetails.ContainsKey(ipAddress))
                    {
                        return _ipDetails[ipAddress];
                    }
                }
                catch (Exception)
                {

                    //
                }

                return (null!, null!, null!, null!);
            }
        }

        public static class IpAddressMapper
        {
            private static Dictionary<string, (string, string, string)> _ipDetails;

            public static void Initialize(IConfiguration configuration)
            {
                _ipDetails = configuration.GetSection("IpDetails")
                    .GetChildren()
                    .ToDictionary(
                        x => x.Key,
                        x => (x.GetSection("LaneId").Value, x.GetSection("StationId").Value, x.GetSection("UserName").Value)
                    );
            }

            public static (string LaneId, string StationId, string UserName) MapIpAddressToUserDetails(string ipAddress)
            {
                if (_ipDetails.ContainsKey(ipAddress))
                {
                    return _ipDetails[ipAddress];
                }

                return (null, null, null);
            }

        }
        public static bool AreAllStringPropertiesNullOrEmpty(object obj)
        {
            var properties = obj.GetType().GetProperties();
            foreach (var property in properties)
            {
                if (property.PropertyType == typeof(string))
                {
                    var value = (string)property.GetValue(obj);
                    if (!string.IsNullOrEmpty(value))
                    {
                        return false;
                    }
                }
            }
            return true;
        }
    }
}