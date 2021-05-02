using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PruebaTecnica.Models
{
    public class Paciente
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string PacienteID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Nombre { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Apellido { get; set; }

        [Column(TypeName = "nvarchar(15)")]
        public string Telefono { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string Sexo { get; set; }

        public string FechaNacimiento { get; set; }

    }
}