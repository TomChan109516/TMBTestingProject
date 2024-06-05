using SCS_Backend_API.DTO;

namespace SCS_Backend_API.Interfaces
{
    public interface IAttachmentService
    {
        Task<List<AppointmentHistory_AttachmentResponse>?> GetAppointmentHistory(string chassisNumber);
        Task<string> AddAttachment(AttachmentDto attachmentRequest);
        Task<List<AttachmentResponse>?> SearchAttachment(string chassisNumber, long appointmentNumber);
        Task<string> DeleteAttachment(string chassisNumber, string fileName);
        Task<byte[]> DownloadAttachment(string chassisNumber, string fileName);
    }
}
