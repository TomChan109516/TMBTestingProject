using AutoMapper;
using Microsoft.AspNetCore.Routing;
using Moq;
using System.Linq.Expressions;
using System.Net;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Entities.Artu;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;
using VICSS.Service.Artu.Domain;
using VICSS.Service.Artu.EventHandlers;
using VICSS.Service.Artu.Helper;
using VICSS.Shared.Models.Common;

namespace VICSS.Test.Service.Artu.UnitTest
{
    public class UpdateToggleStatusHandlerUnitTest
    {
        private UpdateToggleStatusHandler updateToggleStatusHandler;
        private Mock<IGenericRepository<ArtuDbContext, ArtuConfig>> mockGenericRepository;

        public UpdateToggleStatusHandlerUnitTest()
        {
            mockGenericRepository = new Mock<IGenericRepository<ArtuDbContext, ArtuConfig>>();
            updateToggleStatusHandler = new UpdateToggleStatusHandler(mockGenericRepository.Object);
        }

        [Fact]
        public void Handle_ReturnsAllStatuses_WhenDictionaryIsNotEmpty()
        {
            // Arrange
            GlobalDictionary.MessageJsonDictionary.TryAdd("key1", "status1");
            GlobalDictionary.MessageJsonDictionary.TryAdd("key2", "status2");

            // Act
            var result = updateToggleStatusHandler.Handle(CancellationToken.None).GetAwaiter().GetResult();

            // Assert
            Assert.Contains("status1", result);
            Assert.Contains("status2", result);
        }


        [Fact]
        public void Handle_ReturnsEmptyList_WhenDictionaryIsEmpty()
        {
            // Arrange
            GlobalDictionary.MessageJsonDictionary.Clear();

            // Act
            var result = updateToggleStatusHandler.Handle(CancellationToken.None).GetAwaiter().GetResult();

            // Assert
            Assert.IsType<List<string>>(result);
            Assert.Empty(result);
        }


        [Fact]
        public void Handle_ThrowsOperationCanceledException_WhenCancellationIsRequested()
        {
            // Arrange
            var cancellationTokenSource = new CancellationTokenSource();
            cancellationTokenSource.Cancel();

            // Act & Assert
             Assert.ThrowsAsync<OperationCanceledException>(async () => await updateToggleStatusHandler.Handle(cancellationTokenSource.Token));
        }

    }
}
