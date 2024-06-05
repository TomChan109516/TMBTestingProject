using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VICSS.Infrastructure.DataAccess.Entities;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;

namespace VICSS.Infrastructure.DataAccess.Repositories.Interface
{
    public interface IAppointmentRepo : IGenericRepository<DbContext, SampleEntityModel>
    {
    }
}
