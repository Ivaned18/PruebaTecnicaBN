using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PruebaTecnica.Data.Migrations
{
    public partial class ModelosSistema1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Analitica",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ResultadoID = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Tipo = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    Valor = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    Rango = table.Column<string>(type: "nvarchar(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Analitica", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Paciente",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PacienteID = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Nombre = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Apellido = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Telefono = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    Sexo = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    FechaNacimiento = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paciente", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Resultado",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PacienteID = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Doctor = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    CentroMedico = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    FechaResultado = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Resultado", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Analitica");

            migrationBuilder.DropTable(
                name: "Paciente");

            migrationBuilder.DropTable(
                name: "Resultado");
        }
    }
}
