using System.Diagnostics.CodeAnalysis;
using System.Net.Sockets;

namespace VICSS.Service.Artu.Interface
{
    public interface IArtuTcpClient
    {
        bool Connect(string ipAddress, int port);
        bool Disconnect();
        int Send(byte[] xmlData, int xmlLength, SocketFlags socketFlags);
        string GetServerEndpoints();
        bool IsConnected();
        Task<string?> CheckForResponse();
    }
}