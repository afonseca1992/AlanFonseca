using System;

namespace _20200901
{
    class Program
    {
        static void Main(string[] args)
        {
                Random random = new Random()
                int y = 0;
                int x = random.Next(10);
                string userinput = "";
                do
                {
                    Console.WriteLine("Ingresa el numero");
                    userinput = Console.ReadLine();
                }
                while (x != int.Parse(userinput) or y = 3);
                Console.WriteLine("Adivinaste");
                    y++;
            }
        }
    }
}

