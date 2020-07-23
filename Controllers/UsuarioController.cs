using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using zeusbeta01.Models;
using zeusbeta01.Data;
using Microsoft.EntityFrameworkCore;


namespace zeusbeta01.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly StoreDataContext _context;

        public UsuarioController(StoreDataContext context)
        {
            _context = context;
        }

        [Route("v1/usuarios")]
        [HttpPost]
        public Usuario Post([FromBody] Usuario usuario){
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
            return usuario;
        }
        
        [Route("v1/all")]
        [HttpGet]
        public IEnumerable<Usuario> Get(){
            return _context.Usuarios.AsNoTracking().ToList();
        }
    }
}