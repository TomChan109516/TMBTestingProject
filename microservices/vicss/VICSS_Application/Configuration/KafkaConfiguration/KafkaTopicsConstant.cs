namespace VICSS.Infrastructure.Configuration.KafkaConfiguration
{
    public static class KafkaTopicsConstant
    {
        public const string GetCenterProducerTopic = "vicss.appointment.request.centremanagement.getcentres.v1";
        public const string GetCenterConsumerTopic = "vicss.appointment.response.centremanagement.getcentres.v1";
        public const string GetInspectionByIdProducerTopic = "vicss.appointment.request.inspection.inspectiondetailsbyid.v1";
        public const string GetInspectionByIdConsumerTopic = "vicss.appointment.response.inspection.inspectiondetailsbyid.v1";
        public const string GetExamByLaneidProducerTopic = "vicss.centre.response.laneconfiguration.getexamsidbylaneid.v1";
        public const string GetExamByLaneidConsumerTopic = "vicss.centre.request.laneconfiguration.getexamsidbylaneid.v1";
        public const string GetExamCodesProducerTopic = "vicss.centre.request.inspection.getexamcode.v1";
        public const string GetExamCodesConsumerTopic = "vicss.centre.response.inspection.getexamcode.v1";
        public const string GetVehicleInfoByIdProducerTopic = "vicss.appointment.request.vehicle.getvehicleid.v1";
        public const string GetVehicleInfoByIdConsumerTopic = "vicss.appointment.response.vehicle.getvehicleid.v1";
        public const string GetInspectionCreationStatusProducerTopic = "vicss.appointment.request.inspection.inspectioncreationstatus.v1";
        public const string GetInspectionCreationStatusConsumerTopic = "vicss.appointment.response.inspection.inspectioncreationstatus.v1";

        public const string GetArtuStatusProducerTopic = "vicss.artu.request.inspection.getartustatus.v1";
        public const string GetArtuStatusConsumerTopic = "vicss.artu.response.inspection.getartustatus.v1";
        public const string GetArtuTestResultProducerTopic = "vicss.artu.request.inspection.getartutestresult.v1";
        public const string GetArtuTestResultConsumerTopic = "vicss.artu.responses.inspection.getartutestresult.v1";
        public const string GetVehicleDataProducerTopic = "vicss.inspection.request.appointment.getvehicledata.v1";
        public const string GetVehicleDataConsumerTopic = "vicss.inspection.response.appointment.getvehicledata.v1";


        public const string GetCentresByIdProducerTopic = "vicss.inspection.request.centre.getcentresdetailbycentreid.v1";
        public const string GetCentresByIdConsumerTopic = "vicss.inspection.response.centre.getcentresdetailbycentreid.v1";

        public const string GetLaneDetailsByCentreProducerTopic = "vicss.inspection.request.lane.getlanedetailsbycentre.v1";
        public const string GetLaneDetailsByCentreConsumerTopic = "vicss.inspection.response.lane.getlanedetailsbycentre.v1";
    }
}
