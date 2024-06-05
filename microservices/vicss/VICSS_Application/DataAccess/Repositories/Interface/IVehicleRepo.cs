using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Entities.Vehicle;

namespace VICSS.Infrastructure.DataAccess.Repositories.Interface
{
    public interface IVehicleRepo : IGenericRepository<VehicleDBContext , Vehicle>
    {
        public Task<List<VehicleClass>> GetVehicleClassesAndSubclasses(Expression<Func<VehicleClass, bool>> selector);

    }
}
