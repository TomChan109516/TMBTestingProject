namespace VICSS.Service.Artu.Helper
{
    using MediatR;
    using System.Collections.Concurrent;
    using System.Diagnostics.CodeAnalysis;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;

    [ExcludeFromCodeCoverage]
    public static class GlobalDictionary
    {
        public static ConcurrentDictionary<string, (ArtuTcpClient client, string status)> _connectedClients { get; set; } =
        new ConcurrentDictionary<string, (ArtuTcpClient client, string status)>();

        //Key is combination of IP and Port
        public static ConcurrentDictionary<string, (string laneId, string stationId)> _serverEndpoints { get; set; } =
        new ConcurrentDictionary<string, (string, string)>();

        //Key is Table primary key Id
        public static ConcurrentDictionary<string, (string laneId, string stationId)> _responseLaneStation { get; set; } =
        new ConcurrentDictionary<string, (string, string)>();

        //To check current vees status
        public static ConcurrentDictionary<(string laneId, string stationId), int> _currentVeesStatus { get; set; } =
        new ConcurrentDictionary<(string, string), int>();

        //Maps a lane-station pair to a unique ID
        public static ConcurrentDictionary<(string laneId, string stationId), string> _idForLaneStation { get; set; } =
        new ConcurrentDictionary<(string, string), string>();
    
        public static ConcurrentDictionary<string, string> MessageJsonDictionary { get; set; } =
        new ConcurrentDictionary<string, string>();

    }
}
