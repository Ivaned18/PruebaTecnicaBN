using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
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

        [HttpGet("one/{PacienteID}")]
        public async Task<ActionResult<Paciente>> GetPaciente(string PacienteID)
        {
            var userId = this.User.FindFirstValue(ClaimTypes.NameIdentifier);
            var paciente = _context.Paciente.Where(x => x.PacienteID == userId).FirstOrDefault();

            if (paciente == null)
            {
                return NotFound();
            }

            return paciente;
        }


    }
}
