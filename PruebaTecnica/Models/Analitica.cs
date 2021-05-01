using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace PruebaTecnica.Models
{
    public class Analitica
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string ResultadoID { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Tipo { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string Valor { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Rango { get; set; }
    }
}