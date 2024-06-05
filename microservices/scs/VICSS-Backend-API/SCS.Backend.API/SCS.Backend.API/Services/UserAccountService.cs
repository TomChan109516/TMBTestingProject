namespace SCS_Backend_API.Services
{
    using System.Data.Entity;
    using System.Globalization;
    using AutoMapper;
    using SCS_Backend_API.Constants;
    using SCS_Backend_API.Data;
    using SCS_Backend_API.DTO;
    using SCS_Backend_API.Interfaces;
    using SCS_Backend_API.Models1;
    using SCS_Backend_API.RepoInterfaces;

    public class UserAccountService : IUserAccountService
    {

        private readonly AppDBContextEF _context;
        private readonly ILogger<UserAccountService> _logger;
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public UserAccountService(AppDBContextEF context, ILogger<UserAccountService> logger, IMapper mapper,IUserRepository userRepository,IUnitOfWork unitOfWork) { 

            _context = context;
            _logger = logger;
            _mapper = mapper;
            _logger = logger;
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<string> CreateUser(CreateUserDto createUserDto)
        {
            string returnMessage = string.Empty;            
            try
            {                
                if (ValidateNewUser(createUserDto) && !UserIDExists(createUserDto.UserName ,createUserDto.UserId))
                {
                    var newUser = _mapper.Map<UserAuth>(createUserDto);
                    newUser.AccountStatusCode = Convert.ToChar(UserAccountStatusCode.A);
                    newUser.LastRecordTransactionDateTime = DateTime.Now;
                    newUser.LastRecordTransactionTypeCode = Convert.ToChar(UserAccountModificationStatus.I);
                    newUser.LastRecordTransactionUserId = "";

                    newUser.Users = new Users();
                    newUser.Users.UserId = createUserDto.UserId;
                    newUser.Users.CenterId = "TY1";
                    newUser.Users.UserCenterRoleBeginDate = DateTime.Now;
                    newUser.Users.UserCenterRoleEndDate = DateTime.Now;
                    newUser.Users.UserCenterRoleRemarkText = "Test";
                    newUser.Users.PrivilegeId = "APPT-AUTH-1";
                    newUser.Users.LastRecordTransactionDateTime = DateTime.Now;
                    newUser.Users.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;
                    newUser.Users.LastRecordTransactionUserId = "";
                    //newUser.Ctr_Id = "TY1";
                    //newUser.LastRecordTransactionCode = Convert.ToString(UserAccountModificationStatus.Insert);
                    //newUser.LastRecordTransactiondate = DateTime.Now;
                    //newUser.Password = sha256_hash(createUserDto.Password);
                    //newUser.LastRecordTransactionUserID = string.Empty;

                    //bool userAdded = await AddNewUser(newUser);

                    bool userAdded = await _userRepository.CreateUser(newUser);

                    bool dataSaved = await _unitOfWork.SaveChanges();

                    if (userAdded && dataSaved)
                    {
                        returnMessage = CommonMessages.ResponseSuccessMessage;
                    }
                    else
                    {
                        returnMessage = CommonMessages.NewUserCreationfailed;
                    }
                }
                else
                {
                    returnMessage = CommonMessages.CreateUserValidationfailed;
                }
            }
            catch(Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(CreateUser), nameof(UserAccountService),ex.Message.ToString()));

                returnMessage = CommonMessages.NewUserCreationfailed;
            }

            return returnMessage;
        }

        public async Task<string> UpdateUser(EditUserDto editUserDto)
        {
            string returnMessage = string.Empty;

            try
            {
                if(!String.IsNullOrEmpty(editUserDto.UserId))
                {
                    var updatedUser = _mapper.Map<Login>(editUserDto);
                    updatedUser.LastRecordTransactionCode = Convert.ToString(UserAccountModificationStatus.Update);
                    updatedUser.LastRecordTransactiondate = DateTime.Now;

                    bool updateStatus = await UpdateUsers(updatedUser);

                    if(!updateStatus)
                    {
                        returnMessage = CommonMessages.userUpdationFailed;
                    }
                    else
                    {
                        returnMessage = CommonMessages.ResponseSuccessMessage;
                    }
                }
                else
                {
                    returnMessage = CommonMessages.CreateUserValidationfailed;                    
                }
            }
            catch(Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(UpdateUser), nameof(UserAccountService), ex.Message.ToString()));

                returnMessage = CommonMessages.userUpdationFailed;
            }

            return returnMessage;
        }

        public async Task<SearchUserDto> GetUserDetails(string userId)
        {
            SearchUserDto userDetail = null;

            try
            {
                if (!String.IsNullOrEmpty(userId))
                {
                   Login userData = await GetUserBasedOnID(Convert.ToInt32(userId));
                    userDetail = _mapper.Map<SearchUserDto>(userData); 
                }
            }
            catch(Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(GetUserDetails), nameof(UserAccountService), ex.Message.ToString()));
            }

            return userDetail;
        }


        public async Task<string> DeleteUser(string userId)
        {
            string returnMessage = string.Empty;

            try
            {
                if(!String.IsNullOrEmpty(userId)) {

                    bool status = await DeleteUserById(Convert.ToInt32(userId));

                    if(status) 
                    {
                        returnMessage = CommonMessages.ResponseSuccessMessage;
                    }
                    else
                    {
                        returnMessage = CommonMessages.userDeletionFailed;
                    }                    
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(DeleteUser), nameof(UserAccountService), ex.Message.ToString()));
                returnMessage = CommonMessages.userDeletionFailed;
            }

            return returnMessage;
        }

        public async Task<List<SearchUserDto>> SearchUsers(SearchUserRequestDto searchUserRequestDto)
        {
            List<SearchUserDto> searchUserDtos = new List<SearchUserDto>();

            try
            {
                var searchedData = await SearchUsersByFilter(searchUserRequestDto);
                searchUserDtos = _mapper.Map<List<SearchUserDto>>(searchedData);
            }
            catch(Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(SearchUsers), nameof(UserAccountService), ex.Message.ToString()));
            }

            return searchUserDtos;
        }

        private bool ValidateNewUser(CreateUserDto createUserDto)
        {
            bool isValid = false;
            try
            {
                if(!String.IsNullOrEmpty(createUserDto.UserName) 
                    && !String.IsNullOrEmpty(createUserDto.UserId) && !String.IsNullOrEmpty(createUserDto.Password)) {
                    isValid = true;
                }                
            }
            catch(Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(ValidateNewUser), nameof(UserAccountService), ex.Message.ToString()));
                throw ex;
            }

            return isValid;
        }

        private bool UserIDExists(string userName , string userId)
        {
            bool userExists = false;

            try
            {
                var existingUser = _userRepository.GetUserByIdOrUserName(userId , userName);
                if (existingUser.Result != null) {
                    userExists = true;
                }
            }
            catch(Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(UserIDExists), nameof(UserAccountService), ex.Message.ToString()));
                throw ex;
            }

            return userExists;
        }

        private async Task<bool> AddNewUser(Login newUser)
        {
            bool userAdded = false;

            try
            {
                await _context.SCS_Logins.AddAsync(newUser);
                await _context.SaveChangesAsync();

                userAdded = true;
            }
            catch(Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(AddNewUser), nameof(UserAccountService), ex.Message.ToString()));
                throw ex;
            }

            return userAdded;
        }

        private async Task<bool> UpdateUsers(Login updatedUser)
        {
            bool userUpdated = false;

            try
            {
                var existingUser = _context.SCS_Logins
                    .FirstOrDefault(x => x.UserID == updatedUser.UserID);
                if(existingUser != null)
                {
                    if(existingUser.UserName != updatedUser.UserName || existingUser.IsActive != updatedUser.IsActive)
                    {
                        existingUser.UserName = updatedUser.UserName;
                        existingUser.IsActive = updatedUser.IsActive;
                        existingUser.LastRecordTransactionCode = updatedUser.LastRecordTransactionCode;
                        existingUser.LastRecordTransactiondate = updatedUser.LastRecordTransactiondate;

                        await _context.SaveChangesAsync();

                        userUpdated = true;
                    }
                }                
            }
            catch (Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(UpdateUsers), nameof(UserAccountService), ex.Message.ToString()));
                throw ex;
            }

            return userUpdated;
        }


        private async Task<Login> GetUserBasedOnID(int userId)
        {
            Login userData = null;

            try
            {                
                userData = _context.SCS_Logins.AsNoTracking().FirstOrDefault(x => x.UserID == userId);
            }
            catch(Exception ex) {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(GetUserBasedOnID), nameof(UserAccountService), ex.Message.ToString()));
                throw ex;
            }

            return userData;
        }

        private async Task<bool> DeleteUserById(int userId)
        {
            bool status = false;
            try
            {
                var userToDelete = _context.SCS_Logins.FirstOrDefault(x=> x.UserID == userId);
                if (userToDelete != null)
                {
                    userToDelete.IsActive = false;
                    userToDelete.LastRecordTransactionCode = Convert.ToString(UserAccountModificationStatus.Delete);
                    userToDelete.LastRecordDeletedate = DateTime.Now;

                    _context.Remove(userToDelete);
                    await _context.SaveChangesAsync(); 
                    status = true;
                }
                else
                {

                }
            }
            catch(Exception ex)
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(DeleteUserById), nameof(UserAccountService), ex.Message.ToString()));
                throw ex;
            }

            return status;
        }

        private async Task<List<Login>> SearchUsersByFilter(SearchUserRequestDto searchUserRequestDto)
        {
            List<Login> users = new List<Login>();

            try
            {
                 users = (from userInfo in _context.SCS_Logins 
                               where 
                            (string.IsNullOrEmpty(searchUserRequestDto.UserId) || userInfo.UserID == Convert.ToInt32(searchUserRequestDto.UserId))
                            &&
                            (string.IsNullOrEmpty(searchUserRequestDto.UserName) || userInfo.UserName == searchUserRequestDto.UserName)
                            &&
                            (string.IsNullOrEmpty(searchUserRequestDto.AssignedCenter) || userInfo.Ctr_Id == searchUserRequestDto.AssignedCenter)
                            //&& -- For assigned role...do not delete this line..
                            //(!string.IsNullOrEmpty(searchUserRequestDto.AssignedRole) && userInfo.UserName == searchUserRequestDto.AssignedRole)
                            //&& -- For login type...do not delete this line..
                            //(!string.IsNullOrEmpty(searchUserRequestDto.AssignedRole) && userInfo.UserName == searchUserRequestDto.AssignedRole)
                            &&
                            (userInfo.IsActive == searchUserRequestDto.AccountStatus)
                               select new Login  { 
                                   UserID = userInfo.UserID , 
                                   UserName = userInfo.UserName , 
                                   IsActive =  userInfo .IsActive , 
                                   LastRecordTransactionCode = userInfo.LastRecordTransactionCode,                                   
                               }).ToList();
            }
            catch(Exception ex )
            {
                _logger.LogError(string.Format(CommonMessages.CommonErrorMessage, nameof(SearchUsersByFilter), nameof(UserAccountService), ex.Message.ToString()));
            }

            return users;
        }

    }
}
