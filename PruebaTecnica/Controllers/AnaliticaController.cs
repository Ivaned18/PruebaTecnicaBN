using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaTecnica.Data;
using PruebaTecnica.Models;

namespace PruebaTecnica.Controllers
{
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
        [HttpGet("{id}")]
        public async Task<ActionResult<Analitica>> GetAnalitica(int id)
        {
            var analitica = await _context.Analitica.FindAsync(id);

            if (analitica == null)
            {
                return NotFound();
            }

            return analitica;
        }

        // PUT: api/Analitica/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAnalitica(int id, Analitica analitica)
        {
            if (id != analitica.Id)
            {
                return BadRequest();
            }

            _context.Entry(analitica).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AnaliticaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Analitica
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Analitica>> PostAnalitica(Analitica analitica)
        {
            _context.Analitica.Add(analitica);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAnalitica", new { id = analitica.Id }, analitica);
        }

        // DELETE: api/Analitica/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnalitica(int id)
        {
            var analitica = await _context.Analitica.FindAsync(id);
            if (analitica == null)
            {
                return NotFound();
            }

            _context.Analitica.Remove(analitica);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AnaliticaExists(int id)
        {
            return _context.Analitica.Any(e => e.Id == id);
        }
    }
}
