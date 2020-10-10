using System;
using System.Collections.Generic;
using System.Text;

namespace Parcialplataformas
{
    public class Tarea
    {
        public int IdTarea { get; set; }
        public string Titulo { get; set; }
        public DateTime Vencimiento { get; set; }
        public DateTime Estimacion { get; set; }
        public Recurso Responsable { get; set; }
        public bool Estado { get; set; }

    }
}