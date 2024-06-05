namespace VICSS.Test.Services.LaneConfiguration.UnitTest
{
    using System;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using System.Net;
    using System.Threading.Tasks;
    using AutoMapper;
    using Microsoft.Extensions.Logging;
    using Moq;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Configuration;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.LaneConfiguration.Domain;
    using VICSS.Service.LaneConfiguration.EventHandlers;
    using VICSS.Service.LaneConfiguration.Mappers;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.LaneConfiguration;

    public class AddUpdateLanesHandlerUnitTest
    {
        [Fact]
        public async Task ReturnsBadRequestWhenRequestIsNull()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateLanesMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateLanesHandler>>();
            var mockRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<LaneConfigurationDBContext>>();
            var addUpdateLaneDto = new AddUpdateLaneDto { };
            var lane = new Lane { };
            var handler = new AddUpdateLanesHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);
            
            var request = (AddUpdateLanesRequestDto)null;

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
            Assert.Equal(CommonMessages.BadRequest, result.Message);
        }

        [Fact]
        public async Task ReturnsBadRequestWhenAddLaneRequestIsNull()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateLanesMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateLanesHandler>>();
            var mockRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<LaneConfigurationDBContext>>();
            var addUpdateLaneDto = new AddUpdateLaneDto {CentreId="001",LaneDescription="test Lane",LaneName="" };
            var lane = new Lane { };
            var handler = new AddUpdateLanesHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);
            
            var request = new AddUpdateLanesRequestDto(addUpdateLaneDto);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
            Assert.Equal(CommonMessages.BadRequest, result.Message);
        }

        [Fact]
        public async Task ReturnsBadRequestWhenUpdateLaneRequestIsNull()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateLanesMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateLanesHandler>>();
            var mockRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<LaneConfigurationDBContext>>();
            var addUpdateLaneDto = new AddUpdateLaneDto { CentreId = "001", LaneDescription = "test Lane", LaneName = "" };
            var lane = new Lane { };
            var handler = new AddUpdateLanesHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);
            
            var request = new AddUpdateLanesRequestDto(addUpdateLaneDto);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
            Assert.Equal(CommonMessages.BadRequest, result.Message);
        }

        [Fact]
        public async Task ReturnsInternalServerErrorWhenExceptionIsThrown()
        {
            // Arrange
            var mockMapper = new Mock<IMapper>();
            var mockLogger = new Mock<ILogger<AddUpdateLanesHandler>>();
            var mockRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<LaneConfigurationDBContext>>();
            var addUpdateLaneRequest = new AddUpdateLaneDto { CentreId = "1234", LaneType = "ABC", LaneDescription = "ABC",LaneName="11" };
            var lane = new Lane { };
            var handler = new AddUpdateLanesHandler(mockMapper.Object, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);
            mockMapper.Setup(m => m.Map<Lane>(It.IsAny<AddUpdateLaneDto>())).Throws(new Exception());
            var request = new AddUpdateLanesRequestDto(addUpdateLaneRequest);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
            Assert.Equal(CommonErrorMessage.ErrorMessage, result.ErrorMessage);
        }
        
        [Fact]
        public async Task ReturnsNotFoundWhenUpdatingNonExistingLane()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateLanesMapper());
            });
            var mapper = mappingConfig.CreateMapper();

            var mockLogger = new Mock<ILogger<AddUpdateLanesHandler>>();
            var mockRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<LaneConfigurationDBContext>>();
            var addUpdateLaneDto = new AddUpdateLaneDto { LaneId = "ABCD", CentreId = "ABCD", LaneDescription = "ABC", LastRecordTransactionUserId = "Admin" };
            var lane = new Lane { LaneId = "NonExistingId" };            
            
            mockRepo.Setup(r => r.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<Lane, bool>>>())).ReturnsAsync((Lane)null);
            var request = new AddUpdateLanesRequestDto(addUpdateLaneDto);

            var handler = new AddUpdateLanesHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            mockRepo.Verify(x => x.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<Lane, bool>>>()), Times.Once);
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            Assert.Equal(CommonMessages.NoRecordFound, result.Message);
        }
                
        [Fact]
        public async Task ReturnsOkWhenUpdatingExistingLane()
        {
            // Arrange

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateLanesMapper());
            });
            var mapper = mappingConfig.CreateMapper();

            var mockLogger = new Mock<ILogger<AddUpdateLanesHandler>>();
            var mockRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<LaneConfigurationDBContext>>();
            var addUpdateLaneDto = new AddUpdateLaneDto { LaneId = "001", CentreId = "001", LaneDescription = "Test", LastRecordTransactionUserId = "Admin" };
            Lane data = new Lane { LaneId = "001", CentreId = "001", LaneDescription = "ABC", LastRecordTransactionUserId = "Admin" };           
            var lane = new Lane { LaneId = "ExistingLaneId", CentreId = "ExistingCentreId", LaneDescription = "ABC", LastRecordTransactionUserId = "Admin" };
            var handler = new AddUpdateLanesHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);
            
            mockRepo.Setup(r => r.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<Lane, bool>>>())).ReturnsAsync(data);
            mockRepo.Setup(r => r.Update(data)).Verifiable();
            var request = new AddUpdateLanesRequestDto(addUpdateLaneDto);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            mockRepo.Verify(x => x.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<Lane, bool>>>()), Times.Once);
            mockRepo.Verify(x => x.Update(data), Times.Once);
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Equal(CommonMessages.OperationSuccessful, result.Message);
        }
        [Fact]
        public async Task ReturnsOkWhenAddingNewLane()
        {

            var request = new AddUpdateLanesRequestDto
             (
               new AddUpdateLaneDto
               {
                   LaneId = "",
                   CentreId = "Centre1",
                   LaneType = "Type1",
                   LaneDescription = "Description1",
                   LaneName = "ABC854735",
                   VirtualLaneId = "ABC123",
                   LastRecordTransactionUserId = "Admin"
               }
              );

            var laneData = new Lane
            {
               
                CentreId = request.addUpdateLaneDto.CentreId,
                LaneType = request.addUpdateLaneDto.LaneType,
                LaneDescription = request.addUpdateLaneDto.LaneDescription,
                LaneName = request.addUpdateLaneDto.LaneName,
                VirtualLaneId = request.addUpdateLaneDto.VirtualLaneId,
                LastRecordTransactionUserId = request.addUpdateLaneDto.LastRecordTransactionUserId,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                LaneStatus = CommonConstants.LaneStatus,
                DefaultCapacity = CommonConstants.DefaultCapacity
            };


            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateLanesMapper());
            });
            var mapper = mappingConfig.CreateMapper();

            var genericRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            genericRepo.Setup(r => r.Add(laneData)).Returns(Task.FromResult(true));

            var unitOfWork = new Mock<IUnitOfWork<LaneConfigurationDBContext>>();
            unitOfWork.Setup(u => u.SaveChanges()).Returns(Task.FromResult(true));

            var mockLogger = new Mock<ILogger<AddUpdateLanesHandler>>();

            AddUpdateLanesHandler handler = new AddUpdateLanesHandler(mapper, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            genericRepo.Verify(x => x.Add(It.IsAny<Lane>()), Times.Once);
            unitOfWork.Verify(x => x.SaveChanges(), Times.Once); 
            Assert.Equal(HttpStatusCode.OK, returnedData.HttpStatusCode);
            Assert.Equal(CommonMessages.OperationSuccessful, returnedData.Message);

        }


        [Fact]
        public async Task ReturnOkWhenLandIdAndLaneStatusExist()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateLanesMapper());
            });

            var mockRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateLanesHandler>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<LaneConfigurationDBContext>>();
            var addUpdateLaneDto = 
            
                new AddUpdateLaneDto
                {
                    LaneId = "testLaneId",
                    LaneStatus = true,
                    CentreId = "",
                    LaneType = "",
                    LaneName = "",
                    LaneDescription = "",
                    VirtualLaneId = "",
                    LastRecordTransactionUserId = "Admin"
                }
            ;
            var lane= new Lane()
            {
                LaneId = "testLaneId",
                LaneStatus = true,
                CentreId = "",
                LaneType = "",
                LaneDescription = "",
                LaneName = "",
                VirtualLaneId = "",
                LastRecordTransactionUserId = "Admin"
            };
            mockRepo.Setup(r => r.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<Lane, bool>>>())).ReturnsAsync(lane);
            mockRepo.Setup(r => r.Update(lane)).Verifiable();
            mockUnitOfWork.Setup(u => u.SaveChanges()).Returns(Task.FromResult(true));

            var handler = new AddUpdateLanesHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            var request = new AddUpdateLanesRequestDto(addUpdateLaneDto);
            // Act
            var result = await handler.Handle(request, new CancellationToken());

            // Assert
            mockRepo.Verify(x => x.Update(lane), Times.Once);
            mockUnitOfWork.Verify(x => x.SaveChanges(), Times.Once);
            mockRepo.Verify(x => x.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<Lane, bool>>>()), Times.Once);
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }

    }
}
