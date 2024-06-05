namespace Inspection.UnitTest
{
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using VICSS.Infrastructure.DataAccess.Repositories.Implementation;

    public class DisableReactiveMaintainEquipmentHandlerUnitTest
    {
        private readonly Mock<IMapper> _mapperMock;
        private readonly Mock<IGenericRepository<InspectionDBContext, Equipment>> _repositoryMock;
        private readonly Mock<ILogger<DisableReactiveMaintainEquipmentHandler>> _loggerMock;
        private readonly Mock<IUnitOfWork<InspectionDBContext>> _unitOfWorkMock;
        private readonly DisableReactiveMaintainEquipmentHandler _handler;


        public DisableReactiveMaintainEquipmentHandlerUnitTest()
        {
            _mapperMock = new Mock<IMapper>();
            _repositoryMock = new Mock<IGenericRepository<InspectionDBContext, Equipment>>();
            _loggerMock = new Mock<ILogger<DisableReactiveMaintainEquipmentHandler>>();
            _unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            _handler = new DisableReactiveMaintainEquipmentHandler(_mapperMock.Object, _repositoryMock.Object, _unitOfWorkMock.Object, _loggerMock.Object);
        }
        [Fact]
        public async Task HandleReturnsOk()
        {
            // Arrange
            var request = new DisableReactiveMaintainEquipmentRequestDto("2",false);
            _repositoryMock.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Equipment, bool>>>())).ReturnsAsync(new List<Equipment>() { new Equipment() { Id = "1", ActivateInd = false } });

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, response.HttpStatusCode);
        }
        [Fact]
        public async Task HandleReturnsNotFound()
        {
            // Arrange
            var request = new DisableReactiveMaintainEquipmentRequestDto("2", false);
            _repositoryMock.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Equipment, bool>>>())).ReturnsAsync(new List<Equipment>() { });

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, response.HttpStatusCode);
        }
        [Fact]
        public async Task HandleReturnsInternalServerError()
        {
            // Arrange
            var request = new DisableReactiveMaintainEquipmentRequestDto("2", false);
            _repositoryMock.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Equipment, bool>>>())).Throws(new Exception());

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, response.HttpStatusCode);
        }
    }
}
