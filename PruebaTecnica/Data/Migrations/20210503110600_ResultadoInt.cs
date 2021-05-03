using Microsoft.EntityFrameworkCore.Migrations;

namespace PruebaTecnica.Data.Migrations
{
    public partial class ResultadoInt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ResultadoID",
                table: "Analitica",
                type: "int(10)",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ResultadoID",
                table: "Analitica",
                type: "nvarchar(50)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int(10)");
        }
    }
}
