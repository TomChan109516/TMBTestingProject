using Microsoft.AspNetCore.Mvc;
using SCS_Backend_API.DTO;

namespace SCS_Backend_API.Interfaces
{
    public interface IDropDownService
    {
        Task<List<DropDownResponseDto>> GetAllDropdownList(string dropDownListType, string id);
    }
}
