using SCS_Backend_API.DTO;

namespace SCS_Backend_API.Interfaces
{
    public interface ILoginService
    {
        Task<string> ValidateCredentials(LoginDto login);
        
    }
}
