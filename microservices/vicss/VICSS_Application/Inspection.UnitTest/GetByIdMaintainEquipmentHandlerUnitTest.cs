namespace Inspection.UnitTest
{
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using VICSS.Service.Inspection.Interface;

    public class GetByIdMaintainEquipmentHandlerUnitTest
    {
        private readonly Mock<IMapper> _mapperMock;
        private readonly Mock<IGenericRepository<InspectionDBContext, Equipment>> _repositoryMock;
        private readonly Mock<ILogger<GetByIdMaintainEquipmentHandler>> _loggerMock;
        private readonly GetByIdMaintainEquipmentHandler _handler;

        public GetByIdMaintainEquipmentHandlerUnitTest()
        {
            _mapperMock = new Mock<IMapper>();
            _repositoryMock = new Mock<IGenericRepository<InspectionDBContext, Equipment>>();
            _loggerMock = new Mock<ILogger<GetByIdMaintainEquipmentHandler>>();
            _handler = new GetByIdMaintainEquipmentHandler(_mapperMock.Object, _repositoryMock.Object, _loggerMock.Object);
        }
        [Fact]
        public async Task HandleReturnsOk()
        {
            // Arrange
            var request = new GetByIdMaintainEquipmentRequestDto ("1");
            _mapperMock.Setup(x => x.Map<GetByIdMaintainEquipmentResponseDto>(It.IsAny<Equipment>())).Returns(new GetByIdMaintainEquipmentResponseDto());
            _repositoryMock.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Equipment, bool>>>())).ReturnsAsync(new List<Equipment>() { new Equipment() { Id= "1", ActivateInd=false} });

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, response.HttpStatusCode);
        }
        [Fact]
        public async Task HandleReturnsNotFound()
        {
            // Arrange
            var request = new GetByIdMaintainEquipmentRequestDto("1");
            _mapperMock.Setup(x => x.Map<GetByIdMaintainEquipmentResponseDto>(It.IsAny<Equipment>())).Returns(new GetByIdMaintainEquipmentResponseDto());
            _repositoryMock.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Equipment, bool>>>())).ReturnsAsync(new List<Equipment>() {  });

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, response.HttpStatusCode);
        }
        [Fact]
        public async Task HandleReturnsInternalServerError()
        {
            // Arrange
            var request = new GetByIdMaintainEquipmentRequestDto("1");
            _mapperMock.Setup(x => x.Map<GetByIdMaintainEquipmentResponseDto>(It.IsAny<Equipment>())).Throws(new Exception());
            _repositoryMock.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Equipment, bool>>>())).ReturnsAsync(new List<Equipment>() { new Equipment() { Id = "1", ActivateInd = false } }); ;

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, response.HttpStatusCode);
        }
    }
}
