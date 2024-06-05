using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Services;
using SCS_Backend_API.Data;
using SCS_Backend_API.Models1;
using SCS_API_Unit_Tests.Helper;

namespace SCS_API_Unit_Tests.Services
{
    public class LoginServiceUnitTest
    {
        private Mock<ILogger<LoginService>> mockLogger;
        public LoginServiceUnitTest()
        {
            mockLogger = new Mock<ILogger<LoginService>>();
        }

        [Fact]
        public async Task ValidateCredentials_ValidUser_ReturnsLoginSuccessful()

        {
            var data = MockData.LoginData();
            var centreData = MockData.CentreData();
            var login = new LoginDto { UserName = "testuser", Password = "testpassword", CenterId = "TY1" };
            var options = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "testdb3").Options;
            var context = new AppDBContextEF(options);
            context.Database.EnsureCreated();

            context.SCS_Logins.Add(data);
            context.SCS_Centers.Add(centreData);
            context.SaveChanges();


            var loginService = new LoginService(context, mockLogger.Object);

            string isValid = await loginService.ValidateCredentials(login);

            Assert.Equal("Login Successful!", isValid);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task ValidateCredentials_ReturnsWrongUsername()
        {
            var data = MockData.LoginData();
            var centreData= MockData.CentreData();
            var options = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "testdb1").Options;
            var context = new AppDBContextEF(options);


            context.SCS_Logins.Add(data);
            context.SCS_Centers.Add(centreData);
            context.SaveChanges();

            var loginService = new LoginService(context, mockLogger.Object);
            var login = new LoginDto { UserName = "wronguser", Password = "testpassword", CenterId = "TY1" };
            string isValid = await loginService.ValidateCredentials(login);
            Assert.Equal("Invalid Username or Password", isValid);
            context.Database.EnsureDeleted();

        }


        [Fact]
        public async Task ValidateCredentials_ReturnsWrongPassword()
        {
            var data = MockData.LoginData();
            var centreData = MockData.CentreData();
            var options = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "testdb").Options;
            var context = new AppDBContextEF(options);

            context.SCS_Logins.Add(data);
            context.SCS_Centers.Add(centreData);
            context.SaveChanges();

            var loginService = new LoginService(context, mockLogger.Object);
            var login = new LoginDto { UserName = "testuser", Password = "wrongpassword", CenterId = "TY1" };
            string isValid = await loginService.ValidateCredentials(login);
            Assert.Equal("Invalid Username or Password", isValid);

            context.Database.EnsureDeleted();

        }


        [Fact]
        public async Task ValidateCredentials_ReturnsWrongCenter()
        {
            var data = MockData.LoginData();
            var options = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "testdb4").Options;
            var context = new AppDBContextEF(options);

            context.SCS_Logins.Add(data);
            context.SCS_Centers.Add(new Center { Ctr_Key = 6, Ctr_Name = "hgxajxl", Ctr_Id = "TY2", IsActive = true });
            context.SaveChanges();

            var loginService = new LoginService(context, mockLogger.Object);
            var login = new LoginDto { UserName = "testuser", Password = "testpassword", CenterId = "TY2" };
            string isValid = await loginService.ValidateCredentials(login);
            Assert.Equal("User not Authorized for this Center", isValid);

            context.Database.EnsureDeleted();

        }


    }
}
