using System;
using System.ComponentModel.DataAnnotations;

namespace PruebaTecnica.Models
{
    public class Resultado
    {
        public int Id { get; set; }
        public string PacienteID { get; set; }
        public string Doctor { get; set; }
        public DateTime FechaResultado { get; set; }
    }
}