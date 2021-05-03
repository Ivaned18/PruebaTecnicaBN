using System;
using System.Collections.Generic;
using System.Linq;
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
    public class AnaliticaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AnaliticaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Analitica
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Analitica>>> GetAnalitica()
        {
            return await _context.Analitica.ToListAsync();
        }



        // GET: api/Analitica/5
        [HttpGet("{ResultadoID}")]
        public async Task<List<Analitica>> GetAnalitica(int ResultadoID)
        {
            var analitica = (from a in _context.Analitica where a.ResultadoID == ResultadoID select a).ToList(); 

            return analitica;
        }



    }
}





//// GET: api/Analitica/5
//[HttpGet("{ResultadoID}")]
//public async Task<ActionResult<Analitica>> GetAnalitica(int ResultadoID)
//{
//    var analitica = await _context.Analitica.FindAsync(ResultadoID);

//    if (analitica == null)
//    {
//        return NotFound();
//    }

//    return analitica;
//}