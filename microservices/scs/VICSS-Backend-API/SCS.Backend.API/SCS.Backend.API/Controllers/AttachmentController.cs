using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Newtonsoft.Json;
using SCS_Backend_API.Constants;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using System.IO;
using System.Runtime.InteropServices;

namespace SCS_Backend_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttachmentController : ControllerBase
    {
        #region private variables
        private readonly IAttachmentService _attachmentService;
        private readonly ILogger<AttachmentController> _logger;
        #endregion

        #region constructor
        public AttachmentController(IAttachmentService attachmentService, ILogger<AttachmentController> logger)
        {
            _attachmentService = attachmentService;
            _logger = logger;
        }
        #endregion

        #region Action Methods
        //GetAppointmentHistory

        /// <summary>
        /// Returns the details of Appointment or Vehicle
        /// </summary>
        /// <param name="chassisNumber"></param>
        /// <returns>Vehicle or Appointment details</returns>
        [Route("getappointmenthistory")]
        [HttpPost]
        public async Task<IActionResult> GetAppointmentHistory(string chassisNumber)
        {
            try
            {
                if (string.IsNullOrEmpty(chassisNumber))
                {
                    return BadRequest(CommonMessages.ChassisNumberRequired);
                }
                _logger.LogInformation("GetAppointmentHistory processing request : " + JsonConvert.SerializeObject(chassisNumber));
                var response = await _attachmentService.GetAppointmentHistory(chassisNumber);
                _logger.LogInformation("GetAppointmentHistory response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("SearchAttachment exception : " + ex.Message);
                throw;
            }
        }

        //AddAttachment

        /// <summary>
        /// Add details of Attachment
        /// </summary>
        /// <param name="attachmentRequest"></param>
        /// <returns></returns>
        [Route("addattachment")]
        [HttpPost]
        public async Task<IActionResult> AddAttachment([FromForm] AttachmentDto attachmentRequest)
        {
            try
            {
                _logger.LogInformation("AddAttachment processing request : " + JsonConvert.SerializeObject(attachmentRequest));
                var response = await _attachmentService.AddAttachment(attachmentRequest);
                _logger.LogInformation("AddAttachment response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("AddAttachment exception : " + ex.Message);
                throw;
            }
        }

        //SearchAttachment

        /// <summary>
        /// Get details of Attachment
        /// </summary>
        /// <param name="chassisNumber"></param>
        /// <param name="appointmentNumber"></param>
        /// <returns></returns>
        [Route("searchattachment")]
        [HttpGet]
        public async Task<IActionResult> SearchAttachment(string chassisNumber,[Optional] long appointmentNumber)
        {
            try
            {
                if(string.IsNullOrEmpty(chassisNumber))
                {
                    return BadRequest(CommonMessages.ChassisNumberRequired);
                }
                _logger.LogInformation("SearchAttachment processing request :- " + "ChassisNumber: " + chassisNumber, "AppointmentNumber: "+ appointmentNumber);
                var response = await _attachmentService.SearchAttachment(chassisNumber,appointmentNumber);
                _logger.LogInformation("SearchAttachment response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("SearchAttachment exception : " + ex.Message);
                throw;
            }
        }

        //DeleteAttachment

        /// <summary>
        /// Delete Attachment
        /// </summary>
        /// <param name="chassisNumber"></param>
        /// <param name="fileName"></param>
        /// <returns></returns>
        [Route("deleteattachment")]
        [HttpPost]
        public async Task<IActionResult> DeleteAttachment(string chassisNumber, string fileName)
        {
            try
            {
                if (string.IsNullOrEmpty(chassisNumber) )
                {
                    return BadRequest(CommonMessages.ChassisNumberRequired);
                }
                else if(string.IsNullOrEmpty(fileName))
                {
                    return BadRequest(CommonMessages.FileNameRequired);
                }
                _logger.LogInformation("DeleteAttachment processing request :- " + "ChassisNumber: " + chassisNumber, "FileName: " + fileName);
                var response = await _attachmentService.DeleteAttachment(chassisNumber, fileName);
                _logger.LogInformation("DeleteAttachment response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("DeleteAttachment exception : " + ex.Message);
                throw;
            }
        }

        //DownloadAttachment

        /// <summary>
        /// Download Attachment
        /// </summary>
        /// <param name="chassisNumber"></param>
        /// <param name="fileName"></param>
        /// <returns></returns>
        [Route("downloadattachment")]
        [HttpPost]
        public async Task<IActionResult> DownloadAttachment(string chassisNumber, string fileName)
        {
            try
            {
                var attachmentData = await _attachmentService.DownloadAttachment(chassisNumber, fileName);

                if (attachmentData != null)
                {
                    return File(attachmentData, "application/octet-stream");
                }
                return BadRequest(CommonMessages.FileAlreadyExists);
            }
            catch (Exception ex)
            {
                _logger.LogError("DownloadAttachment exception : " + ex.Message);
                throw;
            }
        }

        #endregion
    }
}
