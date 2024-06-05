using AutoMapper;
using SCS_Backend_API.Constants;
using SCS_Backend_API.Data;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using SCS_Backend_API.Models1;
using Microsoft.EntityFrameworkCore;
using System.Drawing.Text;
using Microsoft.IdentityModel.Tokens;


namespace SCS_Backend_API.Services
{
    public class AttachmentService : IAttachmentService
    {
        #region Private Methods
        private readonly AppDBContextEF _context;
        private readonly IMapper _mapper;
        private readonly ILogger<AttachmentService> _logger;
        private readonly string attachmentFilePath = Config.Config.AttachmentFile;
        #endregion

        #region Constructor
        public AttachmentService(AppDBContextEF context, IMapper mapper, ILogger<AttachmentService> logger)
        {
            _context = context;
            _mapper = mapper;
            _logger = logger;
        }
        #endregion

        #region Public Services
       
        


        public async Task<List<AppointmentHistory_AttachmentResponse>?> GetAppointmentHistory(string chassisNumber)
        {
            List<AppointmentHistory_AttachmentResponse>? appointmentHistory = null;
            _logger.LogInformation("Service:- AttachmentService, Method:- GetAppointmentHistory  is started.");
            try
            {
                if (!string.IsNullOrEmpty(chassisNumber))
                {
                    var response = await GetAppointmentsHistory(chassisNumber);
                    appointmentHistory = _mapper.Map<List<AppointmentHistory_AttachmentResponse>>(response);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(GetAppointmentHistory), nameof(AttachmentService), ex.Message.ToString()));
            }

            return appointmentHistory;
        }

        public async Task<string> AddAttachment(AttachmentDto attachmentRequest)
        {
            _logger.LogInformation("Service:- AttachmentService, Method:- AddAttachment  is started.");
            try
            {
                IFormFile file = attachmentRequest.AttachmentFile;
                var originalFileName = file.FileName;
                var fileExtension = Path.GetExtension(originalFileName);

                // Create file name
                var fileName = attachmentRequest.ChassisNumber + "_" + originalFileName;

                //Create a file path
                var filePath = Path.Combine(Config.Config.AttachmentFile, fileName);
                string flag = CommonConstants.AddAttachment;

                bool status = false;
                status = FileExistsOrNot(attachmentRequest.ChassisNumber, fileName, flag);

                if (status == true)
                {
                    return CommonMessages.FileAlreadyExists;

                }
                //Save the file to local
                using (var stream = File.Create(filePath))
                {
                    await file.CopyToAsync(stream);
                }

                var attachment = _mapper.Map<Attachment>(attachmentRequest);

                attachment.CreatedDate = DateTime.UtcNow;
                attachment.ModifiedDate = DateTime.UtcNow;
                attachment.File = originalFileName;
                attachment.FileExtension = fileExtension;
                await _context.SCS_Attachment.AddAsync(attachment);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(GetAppointmentHistory), nameof(AttachmentService), ex.Message.ToString()));
                throw ex;
            }

            return CommonMessages.FileUploadedSuccesfully;
        }   

        public async Task<List<AttachmentResponse>?> SearchAttachment(string chassisNumber, long appointmentNumber)
        {
            List<AttachmentResponse>? attachmentDetails = null;
            _logger.LogInformation("Service:- AttachmentService, Method:- GetAppointmentHistory  is started.");
            try
            {
                if (!string.IsNullOrEmpty(chassisNumber))
                {
                    var response = await SearchAttachmentDetails(chassisNumber, appointmentNumber);
                    attachmentDetails = _mapper.Map<List<AttachmentResponse>>(response);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(SearchAttachment), nameof(AttachmentService), ex.Message.ToString()));
            }

            return attachmentDetails;
        } //done

        public async Task<string> DeleteAttachment(string chassisNumber, string fileName)
        {
            string responseMessage = string.Empty;

            try
            {
                bool status = await DeleteAttachmentByChassisNumber(chassisNumber, fileName);

                responseMessage = status ?  CommonMessages.ResponseSuccessMessage : CommonMessages.AttachmentDeletionFailed;
            }
            catch (Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(DeleteAttachment), nameof(AttachmentService), ex.Message.ToString()));
                responseMessage = CommonMessages.AttachmentDeletionFailed;
            }

            return responseMessage;
        }

        public async Task<byte[]> DownloadAttachment(string chassisNumber, string fileName)
        {
            
            try
            {
                string flag = CommonConstants.DownloadAttachment;
                string[] GetFilesName = GetFileNames(Config.Config.AttachmentFile, chassisNumber + "*");
                for (int i = 0; i <= GetFilesName.Length - 1; i++)
                {
                    string filePath = Config.Config.AttachmentFile + "\\" + GetFilesName.GetValue(i).ToString();

                    if (GetFilesName.GetValue(i).ToString().Contains(fileName))
                    {
                        if (File.Exists(filePath) && flag == CommonConstants.DownloadAttachment)
                        {
                            var newFileName = await File.ReadAllBytesAsync(filePath);
                            return newFileName;
                        }
                        
                    }
                }
                return null!;
            }
            catch (Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(DownloadAttachment), nameof(AttachmentService), ex.Message.ToString()));
                throw;
            }
        }

        #endregion

        #region Private Methods
        private async Task<List<Appointment>> GetAppointmentsHistory(string chassisNumber)
        {
            List<Appointment>? appointment = null;

            try
            {
                appointment = await _context.SCS_Appointments.Where(a => a.ChassisNumber == chassisNumber).ToListAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(GetAppointmentsHistory), nameof(AttachmentService), ex.Message.ToString()));
                throw ex;
            }

            return appointment;
        }




        private static string[] GetFileNames(string path, string filter)
        {

            string[] files = Directory.GetFiles(path, filter);
            for (int i = 0; i < files.Length; i++)
                files[i] = Path.GetFileName(files[i]);
            return files;
        }   

        private async Task<List<Attachment>> SearchAttachmentDetails(string chassisNumber, long appointmentNumber)
        {
            _logger.LogInformation("Service:- AttachmentService, Method:- SearchAttachmentDetails  is started.");
            List<Attachment>? result = null;
            try
            {
                result = _context.SCS_Attachment.Where(x => x.ChassisNumber == chassisNumber).ToList();
                await Task.Run(() =>
                {
                    if (appointmentNumber > 0)
                    {
                        result = result.Where(x => x.AppointmentNumber == appointmentNumber).ToList();
                    }
                });
                _logger.LogInformation("Service:- AttachmentService, Method:- SearchAttachmentDetails  is completed.");


            }
            catch (Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(SearchAttachmentDetails), nameof(AttachmentService), ex.Message.ToString()));
                throw ex;
            }
            return result;
        }  

        private async Task<bool> DeleteAttachmentByChassisNumber(string chassisNumber, string fileName)
        {
            bool status = false;
            try
            {
                string flag = CommonConstants.DeleteAttachment;
                status = FileExistsOrNot(chassisNumber, fileName, flag);
                if (status == true)
                {
                    var attachmentdelete = _context.SCS_Attachment.FirstOrDefault(x => x.ChassisNumber.ToLower() == chassisNumber.ToLower() && x.File.ToLower() == fileName.ToLower());
                    if (attachmentdelete != null)
                    {
                        attachmentdelete.IsActive = false;
                        attachmentdelete.ModifiedDate = DateTime.UtcNow;
                        await _context.SaveChangesAsync();
                        status = true;
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(DeleteAttachmentByChassisNumber), nameof(AttachmentService), ex.Message.ToString()));
                throw ex;
            }
            return status;
        }  

        private bool FileExistsOrNot(string chassisNumber, string fileName, string flag)
        {
            bool status = false;
            try
            {
                string[] GetFilesName = GetFileNames(Config.Config.AttachmentFile, chassisNumber + "*");
                for (int i = 0; i <= GetFilesName.Length - 1; i++)
                {
                    string filePath = Config.Config.AttachmentFile + "\\" + GetFilesName.GetValue(i).ToString();

                    if (GetFilesName.GetValue(i).ToString().Contains(fileName))
                    {
                        if (File.Exists(filePath) && flag == CommonConstants.AddAttachment)
                        {
                            status = true;
                        }
                        else if (File.Exists(filePath) && flag == CommonConstants.DeleteAttachment)
                        {
                            File.Delete(filePath);
                            status = true;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return status;
        }   
        #endregion
    }
}
