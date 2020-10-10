using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Parcialplataformas
{
    public class Usuario
    {
      

        public int IdUsuario { get; set; }
        public string Clave { get; set; }

        public string User { get; set; }


    }
}
