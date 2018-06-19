using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Persistencia;
using WebApplication2.Data;

namespace WebApplication2.Validators
{
    public class BDUser
    {
        private readonly Context _context = new Context();

        public bool ValidateUser(UserProfile user) =>
         _context.UserProfile.Any(a => a.Username == user.Username && a.UserPassword == user.UserPassword);
           
        
            }
}
