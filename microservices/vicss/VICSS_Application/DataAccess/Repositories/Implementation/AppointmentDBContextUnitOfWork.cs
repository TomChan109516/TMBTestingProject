using Microsoft.EntityFrameworkCore;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;

namespace VICSS.Infrastructure.DataAccess.Repositories.Implementation
{
    //public class AppointmentDBContextUnitOfWork : IUnitOfWork<TContext> where TContext : DbContext
    //{
    //    //private readonly AppointmentDBContext _appointmentDBContext;

    //    //public AppointmentDBContextUnitOfWork(AppointmentDBContext dbContext/*, IUserRepository userRepository*/)
    //    //{
    //    //    _appointmentDBContext = dbContext;
    //    //    //UserRepository = userRepository;
    //    //}

    //    //public async Task<bool> SaveChanges()
    //    //{
    //    //    int returnVal = await _appointmentDBContext.SaveChangesAsync();

    //    //    return returnVal > 0 ? true : false;
    //    //}
    //}
}
