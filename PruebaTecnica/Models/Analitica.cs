using System;
using System.ComponentModel.DataAnnotations;

namespace PruebaTecnica.Models
{
    public class Analitica
    {
        public int Id { get; set; }
        public string ResultadoID { get; set; }
        public string Tipo { get; set; }
        public string Valor { get; set; }
        public string Rango { get; set; }
    }
}