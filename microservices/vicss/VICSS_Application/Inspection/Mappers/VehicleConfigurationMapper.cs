namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using VICSS.Shared.Models.Artu;
    using VICSS.Shared.Models.Vehicle;

    public class VehicleConfigurationMapper : Profile
    {
        public VehicleConfigurationMapper()
        {
            CreateMap<GetVehicleAndAppointmentDetails, ArtuInspectionConfiguration>()
                .ForMember(dest => dest.ExamCode, opt => opt.MapFrom(src => src.ExamCode))
                .ForMember(dest => dest.VehicleRegMark, opt => opt.MapFrom(src => src.VehicleRegMarkNumber))
                .ForMember(dest => dest.VehicleClass, opt => opt.MapFrom(src => src.VehicleClassCode))
                .ForMember(dest => dest.Make, opt => opt.MapFrom(src => src.VehicleMakeName))
                .ForMember(dest => dest.Model, opt => opt.MapFrom(src => src.VehicleModelCode))
                .ForMember(dest => dest.YearOfManufacture, opt => opt.MapFrom(src => Convert.ToString(src.VehicleMfcYear)))
                .ForMember(dest => dest.TypeApprovalNo, opt => opt.MapFrom(src => src.VehicleTypeApprovalNumber))
                .ForMember(dest => dest.ChassisNo, opt => opt.MapFrom(src => src.VehicleChasisNumber))
                .ForMember(dest => dest.WAxle1, opt => opt.MapFrom(src => Convert.ToString(src.VehicleAxle1Weight)))
                .ForMember(dest => dest.WAxle2, opt => opt.MapFrom(src => Convert.ToString(src.VehicleAxle2Weight)))
                .ForMember(dest => dest.WAxle3, opt => opt.MapFrom(src => Convert.ToString(src.VehicleAxle3Weight)))
                .ForMember(dest => dest.WAxle4, opt => opt.MapFrom(src => Convert.ToString(src.VehicleAxle4Weight)))
                .ForMember(dest => dest.WAxle5, opt => opt.MapFrom(src => Convert.ToString(src.VehicleAxle5Weight)))
                .ForMember(dest => dest.WAxle6, opt => opt.MapFrom(src => Convert.ToString(src.VehicleAxle6Weight)))
                .ForMember(dest => dest.WAxle7, opt => opt.MapFrom(src => Convert.ToString(src.VehicleAxle7Weight)))
                .ForMember(dest => dest.WAxle8, opt => opt.MapFrom(src => Convert.ToString(src.VehicleAxle8Weight)))
                .ForMember(dest => dest.Propulsion, opt => opt.MapFrom(src => src.VehiclePropulsion))
                .ForMember(dest => dest.RatedPower, opt => opt.MapFrom(src => Convert.ToInt32(src.VehicleRatePower)))
                .ForMember(dest => dest.RatedSpeed, opt => opt.MapFrom(src => Convert.ToInt32(src.VehicleRateRPM)))
                .ForMember(dest => dest.WheelSpan, opt => opt.MapFrom(src => Convert.ToString(src.VehicleWheelSpan)))
                .ForMember(dest => dest.BodyType, opt => opt.MapFrom(src => src.VehicleBodyTypeCode))
                .ForMember(dest => dest.EngineSize, opt => opt.MapFrom(src => Convert.ToString(src.VehicleEngineSizeQty)))
                .ForMember(dest => dest.EngineNo, opt => opt.MapFrom(src => src.VehicleEngineNumber))
                .ForMember(dest => dest.CountryPlaceOfOrigin, opt => opt.MapFrom(src => src.CountryCode))
                .ForMember(dest => dest.VhclFrstRegDate, opt => opt.MapFrom(src => src.VehicleFrstRegDate.ToString()))
                .ForMember(dest => dest.LantauVhclInd, opt => opt.MapFrom(src => src.LantanVehicleIndicator))
                .ForMember(dest => dest.VinLocation, opt => opt.MapFrom(src => src.VinLocation))
                .ForMember(dest => dest.VhclLwrSeatCapQty, opt => opt.MapFrom(src => Convert.ToString(src.VehicleLowerSeatCapQuantity)))
                .ForMember(dest => dest.VhclUprSeatCapQty, opt => opt.MapFrom(src => Convert.ToString(src.VehicleUpperSeatCapQuantity)))
                .ForMember(dest => dest.VhclStndCapQty, opt => opt.MapFrom(src => Convert.ToString(src.VehiclStandardCapQuantity)));
        }

    }
}
