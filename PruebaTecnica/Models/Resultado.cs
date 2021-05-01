using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PruebaTecnica.Models
{
    public class Resultado
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string PacienteID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Doctor { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CentroMedico { get; set; }

        public DateTime FechaResultado { get; set; }
    }
}