using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Data;
using WebApplication2.Validators;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    public class UserLoginController : Controller
    {
        [HttpPost]
        public bool UserLogin([FromBody] UserProfile user) =>
            new BDUser().ValidateUser(user);

    }
}