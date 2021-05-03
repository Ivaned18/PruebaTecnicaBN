using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaTecnica.Data;
using PruebaTecnica.Models;

namespace PruebaTecnica.Controllers
{
    [Authorize]
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
        public async Task<ActionResult<Resultado>> GetResultado(string PacienteID)
        {
            var userId = this.User.FindFirstValue(ClaimTypes.NameIdentifier);
            var resultado = await _context.Resultado.FindAsync(userId);

            if (resultado == null)
            {
                return NotFound();
            }

            return resultado;
        }

    }
}
