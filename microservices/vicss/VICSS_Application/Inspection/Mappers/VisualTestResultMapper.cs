﻿namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using Inspection.Domain;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    public class VisualTestResultMapper : Profile
    {
        public VisualTestResultMapper()
        {
            CreateMap<SaveVisualTestResultDto, TestResultVisual>();
        }
    }
}
