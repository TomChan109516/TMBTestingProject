using Microsoft.EntityFrameworkCore;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using SCS_Backend_API.Models1;
using SCS_Backend_API.Data;
using PdfSharpCore.Pdf;
using PdfSharpCore;
using TheArtOfDev.HtmlRenderer.PdfSharp;
using System.Net;
using SCS_Backend_API.Constants;
using AutoMapper;
using Azure.Core;
using Azure;
using System.Linq;
using System.Reflection.Metadata.Ecma335;

namespace SCS_Backend_API.Services
{
    public class VehicleService : IVehicleService
    {
        #region Private Variable
        private readonly AppDBContextEF _context;
        private readonly IMapper _mapper;
        private readonly ILogger<VehicleService> _logger;
        private readonly IAttachmentService _attachmentService;
        #endregion

        #region Constructor
        public VehicleService(AppDBContextEF context, IMapper mapper, ILogger<VehicleService> logger, IAttachmentService attachmentService)
        {
            _context = context;
            _mapper = mapper;
            _logger = logger;
            _attachmentService = attachmentService;
        }
        #endregion

        #region Public Services

        public async Task<VVandMPVResponseDTO> CreateNewVillageVehicle(VillageAndMovementPermitVehicleDto vehicleInfo)
        {

            _logger.LogInformation("CreateAppointment service started.");
            VVandMPVResponseDTO response = new();
            var Information = _mapper.Map<VehicleInformation>(vehicleInfo);
            Information.VhclTypeCode = "NV";
            var vehicleClassDetails = await _context.SCS_VehicleClasses.FirstOrDefaultAsync(x => x.VehicleClassName == vehicleInfo.VehicleClassName);
            Information.VehicleClassId = vehicleClassDetails.VehicleClassId;
            Information.LastUpdated = DateTime.Now;
            Information.LastRecordedTranscTypeCode = "Insert";
            Information.ModifiedDate = DateTime.Now;
            Information.LastRecordedTranscDate = DateTime.Now;
            Information.RegMark = string.Join("", Guid.NewGuid().ToString("n").Take(10).Select(o => o)).ToUpper();


            Information.SeatCapacity = vehicleInfo.SeatCapacity;

            await _context.SCS_VehicleInfo.AddAsync(Information);
            await _context.SaveChangesAsync();

            var newVehicleDetails = _mapper.Map<VVandMPVResponse>(Information);
            //newVehicleDetails.VehicleClassname = vehicleInfo.VehicleClassname;

            response.data = newVehicleDetails;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = CommonMessages.VehicleCreatedSuccessfully;

            _logger.LogInformation("CreateAppointment service Completed.");
            return response;

        }

        public async Task<CreateNewNonValidVehicleDtoResponse> AmendNonValidVehicle(CreateNewNonValidVehicleDto amendNonValidVehicleRequest)
        {
            try
            {
                _logger.LogInformation("AmendNonValidVehicle service started.");
                CreateNewNonValidVehicleDtoResponse response = new CreateNewNonValidVehicleDtoResponse();

                var nonValidVehicleDetails = await _context.SCS_VehicleInfo.FirstOrDefaultAsync(x => x.ChassisNumber == amendNonValidVehicleRequest.ChassisNumber);

                if (nonValidVehicleDetails != null)
                {
                    nonValidVehicleDetails.ADApprovalDate = amendNonValidVehicleRequest.ADApprovalDate;
                    nonValidVehicleDetails.DocNumber = amendNonValidVehicleRequest.DocNumber;
                    nonValidVehicleDetails.FloatName = amendNonValidVehicleRequest.FloatName;
                    nonValidVehicleDetails.VehicleClassId = amendNonValidVehicleRequest.VehicleClassId;
                    nonValidVehicleDetails.VehicleSubClassId = amendNonValidVehicleRequest.VehicleSubClassId;
                    nonValidVehicleDetails.CENumber = amendNonValidVehicleRequest.CENumber;
                    nonValidVehicleDetails.TANumber = amendNonValidVehicleRequest.TANumber;
                    nonValidVehicleDetails.RegMark = amendNonValidVehicleRequest.RegMark;
                    nonValidVehicleDetails.CountryCode = amendNonValidVehicleRequest.CountryCode;
                    nonValidVehicleDetails.Make = amendNonValidVehicleRequest.Make;
                    nonValidVehicleDetails.Model = amendNonValidVehicleRequest.Model;
                    nonValidVehicleDetails.ModelCode = amendNonValidVehicleRequest.ModelCode;
                    nonValidVehicleDetails.BodyType = amendNonValidVehicleRequest.BodyType;
                    nonValidVehicleDetails.ManufactureYear = amendNonValidVehicleRequest.ManufactureYear;
                    nonValidVehicleDetails.SeatCapacity = amendNonValidVehicleRequest.SeatCapacity;
                    nonValidVehicleDetails.EngineSize = amendNonValidVehicleRequest.EngineSize;
                    nonValidVehicleDetails.EngineNumber = amendNonValidVehicleRequest.EngineNumber;
                    nonValidVehicleDetails.EngineType = amendNonValidVehicleRequest.EngineType;
                    nonValidVehicleDetails.DocNumber = amendNonValidVehicleRequest.DocNumber;
                    nonValidVehicleDetails.PSL = amendNonValidVehicleRequest.PSL;
                    nonValidVehicleDetails.Permit = amendNonValidVehicleRequest.Permit;
                    nonValidVehicleDetails.FirstRegDate = amendNonValidVehicleRequest.FirstRegDate;
                    nonValidVehicleDetails.LicenceExpiry = amendNonValidVehicleRequest.LicenceExpiry;
                    nonValidVehicleDetails.VICO = amendNonValidVehicleRequest.VICO;
                    nonValidVehicleDetails.ADApprovalDate = amendNonValidVehicleRequest.ADApprovalDate;
                    nonValidVehicleDetails.RenewalDate = amendNonValidVehicleRequest.RenewalDate;
                    nonValidVehicleDetails.LastUpdated = amendNonValidVehicleRequest.LastUpdated;
                    nonValidVehicleDetails.CancelReason = amendNonValidVehicleRequest.CancelReason;
                    nonValidVehicleDetails.InspectionOrder = amendNonValidVehicleRequest.InspectionOrder;
                    nonValidVehicleDetails.StatusCode = amendNonValidVehicleRequest.StatusCode;
                    nonValidVehicleDetails.RatedPower = amendNonValidVehicleRequest.RatedPower;
                    nonValidVehicleDetails.WeightCode = amendNonValidVehicleRequest.WeightCode;
                    nonValidVehicleDetails.PGVWeight = amendNonValidVehicleRequest.PGVWeight;
                    nonValidVehicleDetails.LUGWeight = amendNonValidVehicleRequest.LUGWeight;
                    nonValidVehicleDetails.Axle1Weight = amendNonValidVehicleRequest.Axle1Weight;
                    nonValidVehicleDetails.Axle2Weight = amendNonValidVehicleRequest.Axle2Weight;
                    nonValidVehicleDetails.Axle3Weight = amendNonValidVehicleRequest.Axle3Weight;
                    nonValidVehicleDetails.Axle4Weight = amendNonValidVehicleRequest.Axle4Weight;
                    nonValidVehicleDetails.Axle5Weight = amendNonValidVehicleRequest.Axle5Weight;
                    nonValidVehicleDetails.Axle6Weight = amendNonValidVehicleRequest.Axle6Weight;
                    nonValidVehicleDetails.Axle7Weight = amendNonValidVehicleRequest.Axle7Weight;
                    nonValidVehicleDetails.LantauVehicle = amendNonValidVehicleRequest.LantauVehicle;
                    nonValidVehicleDetails.Attribute = amendNonValidVehicleRequest.Attribute;
                    nonValidVehicleDetails.CreatedDate = amendNonValidVehicleRequest.CreatedDate;
                    nonValidVehicleDetails.ModifiedDate = DateTime.UtcNow;
                    nonValidVehicleDetails.OwnerName = amendNonValidVehicleRequest.OwnerName;
                    nonValidVehicleDetails.HybridVehicle = amendNonValidVehicleRequest.HybridVehicle;
                    nonValidVehicleDetails.PVRMTrimText = amendNonValidVehicleRequest.PVRMTrimText;
                    nonValidVehicleDetails.PVRMDoubleLineIndicator = amendNonValidVehicleRequest.PVRMDoubleLineIndicator;
                    nonValidVehicleDetails.PVRMLine1Text = amendNonValidVehicleRequest.PVRMLine1Text;
                    nonValidVehicleDetails.PVRMLine2Text = amendNonValidVehicleRequest.PVRMLine2Text;
                    nonValidVehicleDetails.PrimaryColor = amendNonValidVehicleRequest.PrimaryColor;
                    nonValidVehicleDetails.SecondaryColor = amendNonValidVehicleRequest.SecondaryColor;
                    nonValidVehicleDetails.FrontTireSize = amendNonValidVehicleRequest.FrontTireSize;
                    nonValidVehicleDetails.RearTireSize = amendNonValidVehicleRequest.RearTireSize;
                    nonValidVehicleDetails.leftHandSteering = amendNonValidVehicleRequest.leftHandSteering;
                    nonValidVehicleDetails.LastRecordedTranscTypeCode = TransactionType.Amend.ToString();
                    nonValidVehicleDetails.VhclTypeCode = "NV";

                    await _context.SaveChangesAsync();
                    var newNonValidVehicleInfoDetails = _mapper.Map<CreateNewNonValidVehicleDto>(nonValidVehicleDetails);

                    response.data = newNonValidVehicleInfoDetails;
                }

                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = nonValidVehicleDetails != null ? CommonMessages.AmendNVVehicle : CommonMessages.NoAmendNVVehicle;
                _logger.LogInformation("Service:- VehicleService, Method:- AmendNonValidVehicle.,Message:- ", response.Message);
                return response;

            }
            catch (Exception ex)
            {
                _logger.LogError("AmendNonValidVehicle exception : " + ex.Message);
                throw;
            }
        }

        public async Task<AmendVVandMPVResponseDto> AmendVVandMPV(AmendVVandMPVRequestDto request, string chasisNo)
        {
            try
            {
                _logger.LogInformation("AmendVVandMPV service started.");
                AmendVVandMPVResponseDto response = new();
                var vehicleDetails = await AmendVillageAndMovementPermitVehicle(request, chasisNo).ConfigureAwait(false);
                var information = _mapper.Map<AmendVVandMPVDto>(vehicleDetails);
                response.data = information;
                response.Message = information != null ? CommonMessages.AmendVVandMPV : CommonMessages.NoAmendVVandMPV;
                response.StatusCode = (int)HttpStatusCode.OK;
                return response;
            }
            catch(Exception ex)
            {
                _logger.LogError("AmendVVandMPV exception : " + ex.Message);
                throw;
            }
        }


        public async Task<VehicleOperationRemarkResponse> VehicleOperationalRemark(AttachmentDto attachmentRequest,string remark, string chasisNumber)
        {

            _logger.LogInformation("VehicleOperationalRemark service started.");
            VehicleOperationRemarkResponse response = new VehicleOperationRemarkResponse();
            var vehicleDetails = await _context.SCS_VehicleInfo.FirstOrDefaultAsync(v => v.ChassisNumber == chasisNumber);
            if (attachmentRequest != null)
            {
                var attachment = _attachmentService.AddAttachment(attachmentRequest);
            }
            if (vehicleDetails != null)
            {
                vehicleDetails.VehicleRemarkText = remark;
                await _context.SaveChangesAsync();
            }
            

            response.data = vehicleDetails != null ? CommonMessages.VehicleRemarkAddedSuccessfully : CommonMessages.NoVehicleFound;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = vehicleDetails != null?CommonMessages.VehicleRemarkAddedSuccessfully : CommonMessages.NoVehicleFound;

            _logger.LogInformation("VehicleOperationalRemark service Completed.");
            return response;

        }

        public async Task<VehicleMessagesResponse> VehicleMessage(VehicleMessagesDto vehicleMessagesDto)
        {

            _logger.LogInformation("VehicleMessage service started.");
            VehicleMessagesResponse response = new VehicleMessagesResponse();

            var vehicleMessages = await _context.SCS_VehicleMessages.FirstOrDefaultAsync(v => v.VehicleId == vehicleMessagesDto.VehicleId);
            var vehicleMessageDetails = _mapper.Map<VehicleMessages>(vehicleMessagesDto);

            if (vehicleMessages != null)
            {
                vehicleMessages.MessageEn = vehicleMessagesDto.MessageEn;
                vehicleMessages.MessageCh = vehicleMessagesDto.MessageCh;
                vehicleMessages.ModifiedDate = DateTime.UtcNow;
            }
            else
            {
                vehicleMessageDetails.CreatedDate = DateTime.UtcNow;
                await _context.SCS_VehicleMessages.AddAsync(vehicleMessageDetails);

            }
            await _context.SaveChangesAsync();
            var vehicleMessagesData = vehicleMessages != null ? _mapper.Map<VehicleMessagesDto>(vehicleMessages) 
                                                         : _mapper.Map<VehicleMessagesDto>(vehicleMessageDetails);

            response.data = vehicleMessagesData;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = CommonMessages.VehicleCreatedSuccessfully;

            _logger.LogInformation("VehicleMessage service Completed.");
            return response;

        }
        #endregion

        #region Private Services

        private async Task<VehicleInformation> AmendVillageAndMovementPermitVehicle(AmendVVandMPVRequestDto request,string chasisNo)
        {
            var vehicleDetails =  await _context.SCS_VehicleInfo.FirstOrDefaultAsync(v => v.ChassisNumber == chasisNo);
            if (vehicleDetails != null)
            {
                if(!string.IsNullOrEmpty(request.FloatName))
                {
                    vehicleDetails.FloatName = request.FloatName;
                }
                if(request.ManufactureYear != null && request.ManufactureYear !=0)
                {
                    vehicleDetails.ManufactureYear = request.ManufactureYear;
                }
                if(!string.IsNullOrEmpty(request.EngineType))
                {
                    vehicleDetails.EngineType = request.EngineType;
                }
                if (!string.IsNullOrEmpty(request.BodyType))
                {
                    vehicleDetails.BodyType = request.BodyType;
                }
                if (request.EngineSize != null && request.EngineSize !=0)
                {
                    vehicleDetails.EngineSize = request.EngineSize;
                }
                if (!string.IsNullOrEmpty(request.ChassisNumber))
                {
                    vehicleDetails.ChassisNumber = request.ChassisNumber;
                }
                await _context.SaveChangesAsync();
                
                return vehicleDetails;
            }
            return null!;
            
        }


        public async Task<SearchWatchListResponseDto> SearchWatchList(WatchListRequestDto searchWhtlst)
        {
            _logger.LogInformation("Search watchList service strated.");
            SearchWatchListResponseDto response = new SearchWatchListResponseDto();
            var whtLst = _context.SCSWatchList.AsQueryable();
           


                await Task.Run(() =>
               {

                   if (searchWhtlst.Type.Length > 0)
                   {

                       whtLst = whtLst.Where(x => searchWhtlst.Type.Contains(x.Type));
                   }

                   if (!string.IsNullOrEmpty(searchWhtlst.VhlClassId))
                   {
                       whtLst = whtLst.Where(w => w.VehicleClassId == searchWhtlst.VhlClassId);
                   }

                   if (!string.IsNullOrEmpty(searchWhtlst.Status))
                   {
                       whtLst = whtLst.Where(w => w.Status == searchWhtlst.Status);
                   }

                   if (searchWhtlst.Rsn_Key != 0)
                   {
                       whtLst = whtLst.Where(w => w.WhLst_Rsn_Key == searchWhtlst.Rsn_Key);
                   }
                   if (searchWhtlst.Center_Key != 0)
                   {
                       whtLst = whtLst.Where(w => w.Ctr_Key == searchWhtlst.Center_Key);
                   }

                   if (!string.IsNullOrEmpty(searchWhtlst.CreatedDateFrom) && !string.IsNullOrEmpty(searchWhtlst.CreatedDateTo))
                   {
                       DateTime fromDate = DateTime.Parse(searchWhtlst.CreatedDateFrom);
                       DateTime toDate = DateTime.Parse(searchWhtlst.CreatedDateTo);

                       whtLst = whtLst.Where(w => w.CreatedDate >= fromDate && w.CreatedDate <= toDate);
                   }

                   whtLst.ToList();

                });

            if (whtLst.Count() > 0)
            {
                var searchResponse = _mapper.Map<List<WatchListDto>>(whtLst);

                response.data = searchResponse;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.WatchListSearchedSuccessfully;
            
            }
            else
            {
                response.Message = CommonMessages.WatchListSearchFailed;
            }
                                 
        _logger.LogInformation("Search watchList service completed.");
            return response;

        }


        public async Task<WatchListCancelResponse> CancelWatchList(CancelWatchListDto cnclwhlst)
        {
            _logger.LogInformation("Cancel WatchList service started.");
            WatchListCancelResponse response = new WatchListCancelResponse();
            var whlstCancel = await _context.SCSWatchList.FirstOrDefaultAsync
                (a => a.Vhcl_WhLst_Key == cnclwhlst.Vhcl_WhLst_Key);
            if (whlstCancel != null)

            {
                whlstCancel.CancelReason = cnclwhlst.Cncl_reason;
                whlstCancel.Cancelled_Date = cnclwhlst.Cncl_Date;
                whlstCancel.Status = WatchlistStatus.Cancelled.ToString();
                whlstCancel.Last_Txn_UserId = cnclwhlst.Last_Txn_UserId;
                whlstCancel.Last_Txn_Type_Code = TransactionType.Delete.ToString();
                whlstCancel.Last_Rec_Txn_Date = cnclwhlst.Last_Rec_Txn_Date;
                await _context.SaveChangesAsync();

                response.data = null;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.CancelWatchList;

            }
            else
            {
                response.Message = CommonMessages.CancelWatchListFailure;
            }

            _logger.LogInformation("Cancel WatchList service Completed.");

            return response;

        }


        public async Task<CreateWatchListDtoResponse> CreateWatchList(CreateWatchListDto request)
        {
            _logger.LogInformation("CreateWatchList service started.");
            CreateWatchListDtoResponse response = new CreateWatchListDtoResponse();
            var wthList = _mapper.Map<WatchList>(request);

            wthList.CreatedDate = DateTime.UtcNow;
            wthList.Status = WatchlistStatus.Outstanding.ToString();
            wthList.Last_Txn_Type_Code = TransactionType.Insert.ToString();
            wthList.Last_Rec_Txn_Date = DateTime.UtcNow;

            await _context.SCSWatchList.AddAsync(wthList);
            await _context.SaveChangesAsync();


            var watchlistDetails = _mapper.Map<CreateWatchListDto>(wthList);
            response.data = watchlistDetails;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = CommonMessages.WatchListCreatedSuccessfully;

            _logger.LogInformation("CreateWatchList service Completed.");
            return response;
        }

        public async Task<CountryCodeResponse> GetCountryCode()
        {
            _logger.LogInformation("GetCountryCode service started.");
            CountryCodeResponse response = new CountryCodeResponse();
            var countryCodeList = await _context.SCS_VehicleCountryCodes.ToListAsync();
            var countryData = _mapper.Map<List<CountryCodeDto>>(countryCodeList);

            response.data = countryData;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = countryData.Count == 0 ? CommonMessages.NoCountryCodeFound : CommonMessages.CountryCodeFetchSuccessfully;

            _logger.LogInformation("GetCountryCode service completed.");
            return response;
        }
        #endregion

    }
}
