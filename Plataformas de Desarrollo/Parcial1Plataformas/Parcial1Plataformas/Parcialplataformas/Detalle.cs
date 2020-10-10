using System;
using System.Collections.Generic;
using System.Text;

namespace Parcialplataformas
{
    public class Detalle
    {
        public int IdDetalle { get; set; }
        public DateTime Fecha { get; set; }
        public DateTime Tiempo { get; set; }
        public Recurso Recurso { get; set; }
        public Tarea Tarea { get; set; }
    }
}
