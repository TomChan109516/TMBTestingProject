namespace VICSS.Service.Artu.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using NLog;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Artu.Domain;
    using VICSS.Service.Artu.Helper;
    using VICSS.Shared.Models.Common;

    public class UpdateToggleStatusHandler 
    {
        #region Private Variable
        private readonly IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository;

        private readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region Constructor
        public UpdateToggleStatusHandler(IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository)
        {
            this.genericRepository = genericRepository;
            
        }
        #endregion

        #region
       
        public virtual async Task<List<string>> Handle(CancellationToken cancellationToken)
        {
            List<string> statuses = new List<string>();

            foreach (var item in GlobalDictionary.MessageJsonDictionary)
            {
                statuses.Add(item.Value);
            }
            logger.Info($"Handle method returned statuses: {string.Join(", ", statuses)}");
            return statuses;
        }

        #endregion
    }
}