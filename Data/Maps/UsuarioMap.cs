using Microsoft.EntityFrameworkCore;
using FileContextCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using zeusbeta01.Models;

namespace zeusbeta01.Data.Maps
{
    public class UsuarioMap  : IEntityTypeConfiguration<Usuario>
    {
         public void Configure(EntityTypeBuilder<Usuario> builder){
            builder.ToTable("Usuario");
            builder.HasKey(x=> x.Id);
            //builder.Property(x => x.Nome).IsRequired().HasMaxLength(120).HasColumnType("varchar(120)");
            //builder.Property(x => x.Email).IsRequired().HasMaxLength(120).HasColumnType("varchar(120)");
            //builder.Property(x => x.CreateDate).IsRequired();
        }
    }
}