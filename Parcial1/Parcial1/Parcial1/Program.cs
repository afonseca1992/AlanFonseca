using System;
using System.Collections.Generic;

namespace Parcial1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Tarea> tareas = new List<Tarea>();
                tareas.Add(new Tarea("Ejercicio 1", new DateTime(2020, 9, 22), 10, new Recurso(), false));
            tareas.Add(new Tarea("Ejercicio 2", new DateTime(2020, 9, 23), 22, new Recurso(), false));
            tareas.Add(new Tarea("Ejercicio 3", new DateTime(2020, 9, 24), 15, new Recurso(), false));
            tareas.Add(new Tarea("Ejercicio 4", new DateTime(2020, 9, 25), 05, new Recurso(), false));
            tareas.Add(new Tarea("Ejercicio 5", new DateTime(2020, 9, 26), 33, new Recurso(), false));
        }
    }
}
