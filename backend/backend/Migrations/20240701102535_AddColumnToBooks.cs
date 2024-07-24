using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MSA_Phase_2.Migrations
{
    /// <inheritdoc />
    public partial class AddColumnToBooks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CoverImage",
                table: "Books",
                newName: "CoverImageS");

            migrationBuilder.AddColumn<string>(
                name: "CoverImageL",
                table: "Books",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CoverImageM",
                table: "Books",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "Books",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoverImageL",
                table: "Books");

            migrationBuilder.DropColumn(
                name: "CoverImageM",
                table: "Books");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "Books");

            migrationBuilder.RenameColumn(
                name: "CoverImageS",
                table: "Books",
                newName: "CoverImage");
        }
    }
}
