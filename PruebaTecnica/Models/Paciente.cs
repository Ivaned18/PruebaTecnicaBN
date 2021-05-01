﻿using System;
using System.ComponentModel.DataAnnotations;

namespace PruebaTecnica.Models
{
    public class Paciente
    {
        public int Id { get; set; }
        public string PacienteID { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public string Sexo { get; set; }
        public DateTime FechaNacimiento { get; set; }

    }
}