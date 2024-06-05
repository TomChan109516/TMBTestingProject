using Microsoft.EntityFrameworkCore;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Entities;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;

namespace VICSS.Infrastructure.DataAccess.Repositories.Implementation
{
    public class AppointmentRepo : GenericRepository<DbContext, SampleEntityModel>, IAppointmentRepo
    {
        private readonly AppointmentDBContext _AppDbContext;
        public AppointmentRepo(AppointmentDBContext AppDbContext) : base(AppDbContext)
        {
            _AppDbContext = AppDbContext;
        }
    }
}
