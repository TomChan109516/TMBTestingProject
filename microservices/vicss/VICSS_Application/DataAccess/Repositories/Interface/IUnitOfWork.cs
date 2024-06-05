using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VICSS.Infrastructure.DataAccess.Repositories.Interface
{
    public interface IUnitOfWork<TContext> where TContext : DbContext 
    {
        public Task<bool> SaveChanges();
    }
}
