using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;

namespace DataAccess.Repositories.Implementation
{
    public class VehicleRepo : GenericRepository<DbContext, Vehicle>, IVehicleRepo
    {
        private readonly VehicleDBContext _VehicleDbContext;

        public VehicleRepo(VehicleDBContext VehicledbContext) : base(VehicledbContext)
        {
            _VehicleDbContext = VehicledbContext;
        }

        public async Task<List<VehicleClass>> GetVehicleClassesAndSubclasses(Expression<Func<VehicleClass, bool>> selector)
        {
            List<VehicleClass> vehicleClasses = new List<VehicleClass>();

            try
            {
                vehicleClasses = _VehicleDbContext.VehicleClasses.AsNoTracking().Where(selector).ToList();
            }
            catch(Exception ex)
            {
                //To Do
            }

            return vehicleClasses;
        }
    }
}
