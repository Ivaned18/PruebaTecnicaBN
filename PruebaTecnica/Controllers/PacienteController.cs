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
    [Route("api/[controller]")]
    [ApiController]
    public class PacienteController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PacienteController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Paciente
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Paciente>>> GetPaciente()
        {
            return await _context.Paciente.ToListAsync();
        }

        // GET: api/Paciente/5
        [HttpGet("{PacienteID}")]
        public async Task<ActionResult<Paciente>> GetPaciente(string PacienteID)
        {
            var userId = this.User.FindFirstValue(ClaimTypes.NameIdentifier);


            var paciente = await _context.Paciente.FindAsync(userId);

            if (paciente == null)
            {
                return NotFound();
            }

            return paciente;
        }

    }
}
