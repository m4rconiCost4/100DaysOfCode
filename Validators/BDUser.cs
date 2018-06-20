using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Persistencia;
using WebApplication2.Data;
using System.Text;

namespace WebApplication2.Validators
{
    public class BDUser
    {
        private readonly Context _context = new Context();

        public bool ValidateUser(UserProfile user)
        {
            var crypt = new System.Security.Cryptography.SHA256Managed();
            var hash = new System.Text.StringBuilder();
            byte[] crypto = crypt.ComputeHash(Encoding.UTF8.GetBytes(user.UserPassword));
            foreach (byte theByte in crypto)
            {
                hash.Append(theByte.ToString("x2"));
            }

            return _context.UserProfile.Any(a => a.Username == user.Username && a.UserPassword == hash.ToString());

        }    
            }
}
