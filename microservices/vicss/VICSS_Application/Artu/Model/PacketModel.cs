using System.Diagnostics.CodeAnalysis;

namespace VICSS.Service.Artu.Model
{
    [ExcludeFromCodeCoverage]
    public class PacketModel
    {
        public int PacketLength { get; set; }
        public byte[]? CommandString { get; set; }
    }
}