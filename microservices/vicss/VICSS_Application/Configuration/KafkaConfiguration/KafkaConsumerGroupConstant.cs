using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VICSS.Infrastructure.Configuration.KafkaConfiguration
{
    public static class KafkaConsumerGroupConstant
    {
        public const string GetCentreConsumerGroupForRequest = "get.centre.request.consumer.group";
        public const string GetCentreConsumerGroupForResponse = "get.centre.response.consumer.group";
        public const string GetInspectionByidConsumerGroupForRequest = "get.inspectionById.request.consumer.group";
        public const string GetInspectionByidConsumerGroupForResponse = "get.inspectionById.response.consumer.group";
        public const string GetVehicleByidConsumerGroupForRequest = "get.vehicleById.request.consumer.group";
        public const string GetVehicleByidConsumerGroupForResponse = "get.vehicleById.response.consumer.group";
        public const string GetExamByLaneIdConsumerGroupForRequest = "get.examByLaneId.request.consumer.group";
        public const string GetExamByLaneIdConsumerGroupForResponse = "get.examByLaneId.response.consumer.group";
        public const string GetExamCodeConsumerGroupForRequest = "get.examCode.request.consumer.group";
        public const string GetExamCodeConsumerGroupForResponse = "get.examCode.response.consumer.group";
        public const string GetCentresByIdConsumerGroupForRequest = "get.centresById.request.consumer.group";
        public const string GeCentresByIdConsumerGroupForResponse = "get.centresById.response.consumer.group";

        public const string GetArtuStatusConsumerGroupForRequest = "get.artuStatus.request.consumer.group";
        public const string GetArtuStatusConsumerGroupForResponse = "get.artuStatus.response.consumer.group";
        public const string GetArtuTestResultConsumerGroupForRequest = "get.artuTestResult.request.consumer.group";
        public const string GetArtuTestResultConsumerGroupForResponse = "get.artuTestResult.response.consumer.group";
        public const string GetVehicleByAppointmentConsumerGroupForRequest = "get.getvehicleinfobyappointment.request.consumer.group";
        public const string GetVehicleByAppointmentConsumerGroupForResponse = "get.getvehicleinfobyappointment.response.consumer.group";


        public const string GetLaneDetailsByCentreConsumerGroupForRequest = "get.LaneDetailsByCentre.request.consumer.group";
        public const string GeLaneDetailsByCentreConsumerGroupForResponse = "get.LaneDetailsByCentre.response.consumer.group";
        public const string GetInspectionCreationStatusConsumerGroupForRequest = "get.inspectionCreationStatus.request.consumer.group";
        public const string GetInspectionCreationStatusConsumerGroupForResponse = "get.inspectionCreationStatus.response.consumer.group";
    }
}
