using System.ComponentModel;
using System.Net;
using VICSS.Service.Inspection.Domain;
using VICSS.Shared.Models.Common;
using VICSS.Shared.Models.Inspection;

namespace VICSS.Service.Inspection.Helper
{
    public static class HelperFunctions
    {
        #region All the Work related to Machine-IP

        public static string GetClientIP()
        {
            string ipAddress = string.Empty;

            try
            {
                foreach (IPAddress item in Dns.GetHostEntry(Dns.GetHostName()).AddressList)
                {
                    if (item.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork)
                    {
                        ipAddress = item.ToString();
                    }

                    if (!string.IsNullOrEmpty(ipAddress) && !IsValidIP(ipAddress))
                    {
                        ipAddress = string.Empty;
                    }
                }
            }
            catch (Exception)
            {
                ipAddress = string.Empty;
            }

            return ipAddress;
        }

        private static bool IsValidIP(string ipAddressString)
        {
            IPAddress iPAddress;
            return IPAddress.TryParse(ipAddressString, out iPAddress);
        }

        public static string GetClientIpAddress(HttpContext context)
        {
            string ipAddress = context.Request.Headers["X-Real-IP"].FirstOrDefault();

            if (string.IsNullOrEmpty(ipAddress))
            {
                ipAddress = context.Request.Headers["X-Forwarded-For"].FirstOrDefault();
            }

            if (string.IsNullOrEmpty(ipAddress))
            {
                ipAddress = context.Connection.RemoteIpAddress.ToString();
            }

            if (IPAddress.TryParse(ipAddress, out var parsedIpAddress) &&
                parsedIpAddress.AddressFamily == System.Net.Sockets.AddressFamily.InterNetworkV6 &&
                ipAddress.StartsWith("::ffff:"))
            {
                ipAddress = parsedIpAddress.MapToIPv4().ToString();
            }

            return ipAddress;
        }

        #endregion

        #region Work with Enums
        public static string GetEnumDescription(this Enum enumValue)
        {
            var fieldInfo = enumValue.GetType().GetField(enumValue.ToString());

            var descriptionAttributes = (DescriptionAttribute[])fieldInfo.GetCustomAttributes(typeof(DescriptionAttribute), false);

            return descriptionAttributes.Length > 0 ? descriptionAttributes[0].Description : enumValue.ToString();
        }

        public static T GetNextEnumValue<T>(T currentValue) where T : struct, IConvertible
        {
            if (typeof(T).IsEnum)
            {
                int nextvalue = ((int)(object)currentValue + 1) % Enum.GetValues(typeof(T)).Length;
                return (T)(object)nextvalue;
            }
            else
                throw new ArgumentException("T is not Enum");
        }

        public static T GetPrevEnumValue<T>(T currentValue) where T : struct, IConvertible
        {
            if (typeof(T).IsEnum)
            {
                int nextvalue = ((int)(object)currentValue - 1) % Enum.GetValues(typeof(T)).Length;
                return (T)(object)nextvalue;
            }
            else
                throw new ArgumentException("T is not Enum");
        }
        #endregion
    }
    public class LaneStationAppointmentManager
    {
        private ValuePariForActiveStation valuePariForActive;
        public LaneStationAppointmentManager() => this.valuePariForActive = new ValuePariForActiveStation();

        public void SaveAppointment(string lane, string station, string AppointmentId, TestType testType)
        {
            Enum.TryParse(station, out StationNames stationNames);
            var key = (lane, stationNames.ToString());
            if (!string.IsNullOrEmpty(AppointmentId))
            {
                this.valuePariForActive.AppointmentNumber = AppointmentId;
                this.valuePariForActive.TestTypes.Add(testType);

                if (GlobalDataSaver.SaveActiveStationValue == null)
                    GlobalDataSaver.SaveActiveStationValue = [];


                if (!GlobalDataSaver.SaveActiveStationValue.ContainsKey(key))
                {
                    GlobalDataSaver.SaveActiveStationValue.Add(key, this.valuePariForActive);
                }
                else
                {
                    /*Change the old value first && Also check if it's fresh test or Re-test*/
                    var prevValue = GlobalDataSaver.SaveActiveStationValue[key];
                    if (prevValue != null && !prevValue.TestTypes.Any(x => x == testType))
                    {
                        prevValue.TestTypes.Add(testType);
                        prevValue.TotalTestCount++;

                        /*Update the value*/
                        GlobalDataSaver.SaveActiveStationValue[key] = prevValue;
                    }
                }
            }
        }

        public ValuePariForActiveStation GetAppointment(string lane, StationNames station)
        {
            ValuePariForActiveStation valuePariForActive = new ValuePariForActiveStation();
            var key = (lane, station.ToString());
            valuePariForActive = GlobalDataSaver.SaveActiveStationValue != null && GlobalDataSaver.SaveActiveStationValue.ContainsKey(key) ? GlobalDataSaver.SaveActiveStationValue[key] : null;

            if (valuePariForActive != null)
            {
                GlobalDataSaver.SaveActiveStationValue.Remove(key);
            }

            return valuePariForActive;
        }
    }


    public class SingletoneVehicleInfo
    {
        private static SingletoneVehicleInfo instance;
        private static readonly object lockObject = new object();

        public ArtuInspectionConfigurationDto artuInspectionConfiguration { get; set; }

        private SingletoneVehicleInfo()
        {

        }

        public static SingletoneVehicleInfo Instance
        {
            get
            {
                if (instance == null)
                {
                    lock (lockObject)
                    {
                        if (instance == null)
                        {
                            instance = new SingletoneVehicleInfo();
                        }
                    }
                }
                return instance;
            }
        }
    }
}
