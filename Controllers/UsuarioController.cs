using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
//using FileContextCore;
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

        [Route("v1/{id}")]
        [HttpGet]
        public Usuario Get(string id){
            //return _context.Usuarios.Include(x => x.Id == id).ToList();
            return _context.Usuarios.AsNoTracking().Where(x => x.Id == id).FirstOrDefault();
        }

        [Route("v1/usuarios")]
        [HttpPut]
        public Usuario Put([FromBody]Usuario usuario){
            _context.Entry<Usuario>(usuario).State = EntityState.Modified;
            _context.SaveChanges();
            return usuario;
        }

        [Route("v1/usuario")]
        [HttpDelete]
        public Usuario Delete([FromBody] Usuario usuario){
            _context.Usuarios.Remove(usuario);
            _context.SaveChanges();
            return usuario;
        }
    }
}