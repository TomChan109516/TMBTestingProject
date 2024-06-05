using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_API_Unit_Tests.Helper;
using SCS_Backend_API.Data;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Helpers;
using SCS_Backend_API.Models1;
using SCS_Backend_API.RepoInterfaces;
using SCS_Backend_API.Services;


namespace SCS_API_Unit_Tests.Services
{
    public class UserAccountServiceUnitTest
    {
        private Mock<ILogger<UserAccountService>> mockLogger;
        private IMapper _mapper;
        private Mock<IUserRepository> mockRepos;
        private Mock<IUnitOfWork> mockUnitOfWork;
        public UserAccountServiceUnitTest()
        {
            mockRepos = new Mock<IUserRepository>();
            mockUnitOfWork = new Mock<IUnitOfWork>();
            mockLogger = new Mock<ILogger<UserAccountService>>();
            if (_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new MapperConfig());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }
        }

        [Fact]
        public async Task CreateUser_ReturnSuccesfull()
        {
            var userDto = MockData.CreateUserDtoData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "UserDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper,mockRepos.Object,mockUnitOfWork.Object);
            mockRepos.Setup(i => i.CreateUser(It.IsAny<UserAuth>())).ReturnsAsync(true);
           // mockRepos.Setup(i => i.GetUserByIdOrUserName(It.IsAny<string>(),It.IsAny<string>())).ReturnsAsync((UserAuth)null);

            mockUnitOfWork.Setup(i => i.SaveChanges()).ReturnsAsync(true);
            var result = await userAccountService.CreateUser(userDto);

            Assert.NotNull(result);
            Assert.Equal("success", result);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task CreateUser_ReturnUnSuccesfullForInvalidInput()
        {

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "UserDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();


            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            var result = await userAccountService.CreateUser(It.IsAny<CreateUserDto>());

            Assert.NotNull(result);
            Assert.Equal("Error in creating user.Please check Logs", result);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task CreateUser_ReturnUnSuccesfullUserExists()
        {
            var userDto = MockData.CreateUserDtoData();
            var data = MockData.LoginData();
            var response = new UserAuth { Id = "1", UserId = "1" };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "UserDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Logins.Add(data);
            context.SaveChanges();
            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            mockRepos.Setup(i => i.CreateUser(It.IsAny<UserAuth>())).ReturnsAsync(true);
            mockRepos.Setup(i => i.GetUserByIdOrUserName(It.IsAny<string>(),It.IsAny<string>())).ReturnsAsync(response);

            mockUnitOfWork.Setup(i => i.SaveChanges()).ReturnsAsync(true);
            var result = await userAccountService.CreateUser(userDto);

            Assert.NotNull(result);
            Assert.Equal("Validation failed.", result);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task UpdateUser_ReturnSuccesfull()
        {
            var userDto = MockData.EditUserDtoSData();
            var data = MockData.LoginData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Db")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Logins.Add(data);
            context.SaveChanges();

            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            var result = await userAccountService.UpdateUser(userDto);

            Assert.NotNull(result);
            Assert.Equal("success", result);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task UpdateUser_ReturnUnSuccesfullForInvalidInput()
        {

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "UserDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();


            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            var result = await userAccountService.UpdateUser(It.IsAny<EditUserDto>());

            Assert.NotNull(result);
            Assert.Equal("Error in updating user. Please check logs", result);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task UpdateUser_ReturnUnSuccesfullUserDoesNotExists()
        {
            var userDto = MockData.EditUserDtoData();

            var data = MockData.LoginData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Database")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Logins.Add(data);
            context.SaveChanges();

            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            var result = await userAccountService.UpdateUser(userDto);

            Assert.NotNull(result);
            Assert.Equal("Error in updating user. Please check logs", result);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task SearchUsers_ReturnSuccesfull()
        {
            var userDto = MockData.SearchUserRequestDtoData();
            var data = MockData.LoginData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Db")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Logins.Add(data);
            context.SaveChanges();

            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            var result = await userAccountService.SearchUsers(userDto);

            Assert.NotEmpty(result);
            Assert.Equal(data.UserName, result.First().UserName);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task SearchUsers_ReturnUnSuccesfullEmptyList()
        {
            var userDto = MockData.SearchUserRequestDtoData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Db")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            var result = await userAccountService.SearchUsers(userDto);

            Assert.Empty(result);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task GetUserDetails_ReturnSuccesfull()
        {
            var userId = "4";
            var data = MockData.LoginData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Db")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Logins.Add(data);
            context.SaveChanges();

            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            var result = await userAccountService.GetUserDetails(userId);

            Assert.NotNull(result);
            Assert.Equal(data.UserName, result.UserName);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task GetUserDetails_ReturnUnSuccesfullNullResult()
        {
            var userId = "4";

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Db")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            var result = await userAccountService.GetUserDetails(userId);

            Assert.Null(result);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task DeleteUser_ReturnSuccesfull()
        {
            var userDto = "4";// MockData.EditUserDtoSData();
            var data = MockData.LoginData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Db")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Logins.Add(data);
            context.SaveChanges();

            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            var result = await userAccountService.DeleteUser(userDto);

            Assert.NotNull(result);
            Assert.Equal("success", result);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task DeleteUser_ReturnUnSuccesfullForInvalidInput()
        {

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();


            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            var result = await userAccountService.DeleteUser(It.IsAny<string>());

            Assert.Empty(result);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task DeleteUser_ReturnUnSuccesfull()
        {
            var userDto = "2";
            var data = MockData.LoginData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Db")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Logins.Add(data);
            context.SaveChanges();

            var userAccountService = new UserAccountService(context, mockLogger.Object, _mapper, mockRepos.Object, mockUnitOfWork.Object);
            var result = await userAccountService.DeleteUser(userDto);

            Assert.NotNull(result);
            Assert.Equal("Error in deleting user.Please check logs", result);

            context.Database.EnsureDeleted();

        }

    }
}
