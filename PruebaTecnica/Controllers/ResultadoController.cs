using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaTecnica.Data;
using PruebaTecnica.Models;

namespace PruebaTecnica.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ResultadoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ResultadoController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Resultado
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Resultado>>> GetResultado()
        {
            return await _context.Resultado.ToListAsync();
        }


        // GET: api/Resultado/5
        [HttpGet("{PacienteID}")]
        public async Task<List<Resultado>> GetResultado(string pacienteID)
        {
            var userId = this.User.FindFirstValue(ClaimTypes.NameIdentifier);
            var resultado = (from a in _context.Resultado where a.PacienteID == userId select a).ToList();

            return resultado;
        }



        // GET: api/Resultado/5
        [HttpGet("one/{id}")]
        public async Task<ActionResult<Resultado>> GetResultado(int id)
        {
            var resultado = await _context.Resultado.FindAsync(id);

            if (resultado == null)
            {
                return NotFound();
            }

            return resultado;
        }


    }
}