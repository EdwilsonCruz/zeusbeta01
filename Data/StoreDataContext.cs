using Microsoft.EntityFrameworkCore;
using zeusbeta01.Models;
using zeusbeta01.Data;
using System;
using FileContextCore;
using System.ComponentModel.DataAnnotations;

namespace zeusbeta01.Data
{
    public class StoreDataContext : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {   //usando arquivo .json para gravar os dados.
            optionsBuilder.UseFileContextDatabase();
            //Conectando com banco SQLSERVER.
            //optionsBuilder.UseSqlServer(@"Server=localhost,1433;Database=slytherinPdtctl;User ID=SA;password=Bianca2018;");
        }

        protected override void OnModelCreating(ModelBuilder builder){
            builder.Entity<Usuario>()
                .ToTable("custom_usuario_tabela")
                .HasKey(x=> x.Id);
                //.Property(x => x.CreateDate);
        
            //builder.ApplyConfiguration(new UsuarioMap());
            //builder.ApplyConfiguration(new CategoryMap());

        }
    }
}