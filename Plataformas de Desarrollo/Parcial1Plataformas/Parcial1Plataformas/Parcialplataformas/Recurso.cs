using System;
using System.Collections.Generic;
using System.Text;

namespace Parcialplataformas
{
    public class Recurso
    {
        public int IdRecurso { get; set; }
        public string Nombre { get; set; }
        public Usuario Usuario { get; set; }
    }
}