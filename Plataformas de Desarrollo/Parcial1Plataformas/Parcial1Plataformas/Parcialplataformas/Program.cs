using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;

namespace Parcialplataformas
{
    class Program
    {
        static void Main(string[] args)
        {

            //Usuarios

            static void Actualizacion()
            {
                var ctx = new parcialdbcontext();
                var lista = ctx.Usuarios.Where(i => i.User);
            }
            static void ListaUsuario()
            {
                var bd = new parcialdbcontext();
                var lista = bd.Usuario.ToList();
                foreach (var item in lista)
                {
                    Console.WriteLine($"Usuario: {item.Usuario} ({item.IdUsuario})");
                }

            }

            static void Insertar()
            {
                var ctx = new parcialdbcontext();
                ctx.Set<Usuario>().Add(new Usuario
                {
                    IdUsuario = 1,
                    User = "Alan",
                    Clave = "111"

                });

                ctx.SaveChanges();
            }

            static void BorrarUsuario(int n)
            {
                var bd = new parcialdbcontext();
                var user = bd.Usuarios.Where(i => i.IdUsuario == n).Single();
                bd.Usuarios.Remove(user);
                bd.SaveChanges();
            }
            static void CambiarPassword(int id, string clave = null)
            {
                var ctx = new parcialdbcontext();
                var usuario = ctx.Usuarios.Where(i => i.IdUsuario == id).FirstOrDefault();

                if (usuario is null)
                {
                    Console.WriteLine("Usuario inexistente");
                }
                else
                {
                    if (!string.IsNullOrEmpty(clave))
                    {
                        usuario.Clave = clave;
                    }
                }
                ctx.SaveChanges();
            }

            //Recursos
            static void SeleccionarRecurso(int id)
            {
                var ctx = new parcialdbcontext();
                var recurso = ctx.Recursos.Where(i => i.IdRecurso == id).FirstOrDefault();

                if (recurso is null)
                {
                    Console.WriteLine("Recurso inexistente");
                }
                else
                {
                    Console.WriteLine($"Nombre: {recurso.Nombre} ({recurso.IdRecurso}) Usuario: {recurso.Usuario}");
                }
            }
            static void InsertarRecurso(int n)
            {
                var bd = new parcialdbcontext();
                var lista = bd.Usuarios.Where(i => i.IdUsuario == n).ToList();

                bd.Recursos.Add(new Recurso
                {
                    Nombre = "Carpeta",
                    Usuario = lista[0]
                });

                bd.SaveChanges();
            }

            //Detalles
            static void ListarDetalle()
            {
                var ctx = new parcialdbcontext();
                var lista = ctx.Detalles.ToList();
                foreach (var item in lista)
                {
                    Console.WriteLine($"Fecha: {item.Fecha} ({item.IdDetalle}) Tiempo: {item.Tiempo} " +
                                        $"Recurso: {item.Recurso} Tarea: {item.Tarea}");
                }
            }
            static void ActualizarDetalle(int d, int r, int t)
            {
                var bd = new parcialdbcontext();
                var detalles = bd.Detalles.Where(i => i.IdDetalle == d).ToList();
                var rec = bd.Recursos.Where(i => i.IdRecurso == r).ToList();
                var tar = bd.Tareas.Where(i => i.IdTarea == t).ToList();

                detalles[0].Fecha = new DateTime(2019, 4, 12);
                detalles[0].Tiempo = new DateTime(2020, 11, 9);
                detalles[0].Recurso = rec[0];
                detalles[0].Tarea = tar[0];

                bd.SaveChanges();
            }

            static void InsertarDetalle(int r, int t)
            {
                var bd = new parcialdbcontext();
                var recur = bd.Recursos.Where(i => i.IdRecurso == r).ToList();
                var tare = bd.Tareas.Where(i => i.IdTarea == t).ToList();

                bd.Detalles.Add(new Detalle
                {
                    Fecha = new DateTime(2016, 8, 20),
                    Tiempo = new DateTime(2018, 9, 12),
                    Recurso = recur[0],
                    Tarea = tare[0]
                });
            }
            //Tareas
            static void ListarTareas()
            {
                var ctx = new parcialdbcontext();
                var lista = ctx.Tareas.ToList();
                foreach (var item in lista)
                {
                    Console.WriteLine($"Titulo: {item.Titulo} ({item.IdTarea}) Vencimiento: {item.Vencimiento} " +
                        $"Estimacion: {item.Estimacion} Responsable: {item.Responsable} Estado: {item.Estado}");
                }
            }
            static void InsertarTarea(int r)
            {
                var bd = new parcialdbcontext();
                var recur = bd.Recursos.Where(i => i.id == r).ToList();

                bd.Tareas.Add(new Tarea
                {
                    Titulo = "Revision de legajos",
                    Vencimiento = new DateTime(2020, 5, 25),
                    Estimacion = new DateTime(2020, 6, 25),
                    Responsable = recur[0],
                    Estado = true
                });
                bd.SaveChanges();

                static void BorrarTarea(int id)
                {
                    var ctx = new parcialdbcontext();
                    var tarea = ctx.Tareas.Where(i => i.IdTarea == id).Single();
                    ctx.Tareas.Remove(tarea);
                    ctx.SaveChanges();
                }
            }
        }
    }
}
