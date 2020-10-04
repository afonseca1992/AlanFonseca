using System;

namespace Ejercicio20200825
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 2;
            string userinput = "";
            do
            {
                Console.WriteLine("Ingresa el numero");
                userinput = Console.ReadLine();
            }
            while (x != int.Parse(userinput));
            Console.WriteLine("Adivinaste");
        }
    }
}
