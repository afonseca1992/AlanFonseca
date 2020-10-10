using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Parcialplataformas
{
    class parcialdbcontext : DbContext
    {
        public object Usuario { get; internal set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=tareas.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Usuario
            modelBuilder.Entity<Usuario>()
                           .ToTable("Usuarios")
                           .HasKey(p => p.IdUsuario);



            modelBuilder.Entity<Usuario>()
                .ToTable("Usuarios")
                .Property(p => p.User)
                .HasColumnType("varchar(50)")
                .IsRequired()
                .HasColumnName("Usuario");

            modelBuilder.Entity<Usuario>()
                .ToTable("Usuarios")
                .Property(p => p.Clave)
                .HasColumnType("varchar(50)")
                .IsRequired()
                .HasColumnName("Clave");

            //Detalle
            modelBuilder.Entity<Detalle>()
                               .ToTable("Detalles")
                               .HasKey(p => p.IdDetalle);
                     

            modelBuilder.Entity<Detalle>()
                    .ToTable("Detalles")
                    .Property(p => p.Fecha)
                    .HasColumnType("DateTime")
                    .IsRequired()
                    .HasColumnName("Fecha");
            ;
            modelBuilder.Entity<Detalle>()
                   .ToTable("Detalles")
                   .Property(p => p.Tiempo)
                   .HasColumnType("int")
                   .IsRequired()
                   .HasColumnName("Tiempo");
            ;

            //Recurso
            modelBuilder.Entity<Recurso>()
                .ToTable("Recursos")
                .HasKey(p => p.IdRecurso);


            modelBuilder.Entity<Recurso>()
                .ToTable("Nombre")
                .Property(p => p.Nombre)
                .HasColumnType("varchar(50)")
                .IsRequired()
                .HasColumnName("Nombre");



            //Tarea
            modelBuilder.Entity<Tarea>()
                .ToTable("Tareas")
                .HasKey(p => p.IdTarea);


            modelBuilder.Entity<Tarea>()
                   .ToTable("Tareas")
                   .Property(p => p.Titulo)
                   .HasColumnType("varchar(255)")
                   .IsRequired()
                   .HasColumnName("Titulo");
            ;

            modelBuilder.Entity<Tarea>()
                    .ToTable("Tareas")
                    .Property(p => p.Vencimiento)
                    .HasColumnType("DateTime")
                    .IsRequired()
                    .HasColumnName("Vencimiento");
            ;
            modelBuilder.Entity<Tarea>()
                    .ToTable("Tareas")
                    .Property(p => p.Estimacion)
                    .HasColumnType("int")
                    .IsRequired()
                    .HasColumnName("Estimacion");

            ;

            modelBuilder.Entity<Tarea>()
                    .ToTable("Tareas")
                    .Property(p => p.Estado)
                    .HasColumnType("varchar(50)")
                    .IsRequired()
                    .HasColumnName("Estado");
        }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Detalle> Detalles { get; set; }
        public DbSet<Tarea> Tareas { get; set; }
        public DbSet<Recurso> Recursos { get; set; }
    }
}
