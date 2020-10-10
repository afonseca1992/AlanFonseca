using Microsoft.EntityFrameworkCore.Migrations;

namespace Parcialplataformas.Migrations
{
    public partial class inicio : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    IdUsuario = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Clave = table.Column<string>(type: "varchar(50)", nullable: false),
                    Usuario = table.Column<string>(type: "varchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.IdUsuario);
                });

            migrationBuilder.CreateTable(
                name: "Nombre",
                columns: table => new
                {
                    IdRecurso = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nombre = table.Column<string>(type: "varchar(50)", nullable: false),
                    UsuarioIdUsuario = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nombre", x => x.IdRecurso);
                    table.ForeignKey(
                        name: "FK_Nombre_Usuarios_UsuarioIdUsuario",
                        column: x => x.UsuarioIdUsuario,
                        principalTable: "Usuarios",
                        principalColumn: "IdUsuario",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Tareas",
                columns: table => new
                {
                    IdTarea = table.Column<string>(nullable: false),
                    Titulo = table.Column<string>(type: "varchar(255)", nullable: false),
                    Vencimiento = table.Column<string>(type: "DateTime", nullable: false),
                    Estimacion = table.Column<int>(type: "int", nullable: false),
                    ResponsableIdRecurso = table.Column<int>(nullable: true),
                    Estado = table.Column<bool>(type: "varchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tareas", x => x.IdTarea);
                    table.ForeignKey(
                        name: "FK_Tareas_Nombre_ResponsableIdRecurso",
                        column: x => x.ResponsableIdRecurso,
                        principalTable: "Nombre",
                        principalColumn: "IdRecurso",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Detalles",
                columns: table => new
                {
                    IdDetalle = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Fecha = table.Column<string>(type: "DateTime", nullable: false),
                    Tiempo = table.Column<string>(type: "int", nullable: false),
                    RecursoIdRecurso = table.Column<int>(nullable: true),
                    TareaIdTarea = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Detalles", x => x.IdDetalle);
                    table.ForeignKey(
                        name: "FK_Detalles_Nombre_RecursoIdRecurso",
                        column: x => x.RecursoIdRecurso,
                        principalTable: "Nombre",
                        principalColumn: "IdRecurso",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Detalles_Tareas_TareaIdTarea",
                        column: x => x.TareaIdTarea,
                        principalTable: "Tareas",
                        principalColumn: "IdTarea",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Detalles_RecursoIdRecurso",
                table: "Detalles",
                column: "RecursoIdRecurso");

            migrationBuilder.CreateIndex(
                name: "IX_Detalles_TareaIdTarea",
                table: "Detalles",
                column: "TareaIdTarea");

            migrationBuilder.CreateIndex(
                name: "IX_Nombre_UsuarioIdUsuario",
                table: "Nombre",
                column: "UsuarioIdUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Tareas_ResponsableIdRecurso",
                table: "Tareas",
                column: "ResponsableIdRecurso");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Detalles");

            migrationBuilder.DropTable(
                name: "Tareas");

            migrationBuilder.DropTable(
                name: "Nombre");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
