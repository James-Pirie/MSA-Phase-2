using Microsoft.EntityFrameworkCore;
using MSA_Phase_2.Context;
using MSA_Phase_2.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// Connect to SQL Server
builder.Services.AddDbContext<BookReviewContext>(options =>
{
    options.UseSqlServer("Server=DESKTOP-2VE2VNK;Database=BookReviewDB;Trusted_Connection=True;TrustServerCertificate=True;");
});

// Register BookRepository as transient service for IBookRepository interface
// Create a new BookRepository instance when IBookRepository is requested
builder.Services.AddTransient<IBookRepository, BookRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
