using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Data;

namespace WebApplication2.Persistencia
{
    public class Context : DbContext
    {
        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<BooksForRead> Books { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=hellsingsdb.database.windows.net,1433; User Id=hellsing55;Password=Hell2216;Database=myTypeDb");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { }
    }
}
