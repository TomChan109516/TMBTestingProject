using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using SCS_Backend_API.Models;
using VICSS_Backend_API.Data;
using SCS_Backend_API.Data;
using Microsoft.IdentityModel.Tokens;

namespace SCS_Backend_API.Services
{
    public class DropDownService:IDropDownService
    {
        private readonly AppDBContextEF context;

        public DropDownService(AppDBContextEF context)
        {
            this.context = context;
        }
        public async Task<List<DropDownResponseDto>> GetAllDropdownList(string dropDownListType, string id)
        {
            return null;
        }
       }
}
