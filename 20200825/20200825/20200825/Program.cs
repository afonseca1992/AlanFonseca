using System;

namespace _20200825
{
    class Program
    {
        static void Main(string[] args)
        {
            int intentos = 1;
            String clave = "";
            while (clave != "secreto" && intentos < 4)
            {
                Console.Write("Ingresa la contraseña");
                clave = Console.ReadLine();
     
                intentos++;
            }
        }
    }
}
