using Microsoft.EntityFrameworkCore;
using MSA_Phase_2.Context;
using MSA_Phase_2.Repositories;
using MSA_Phase_2.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// Connect to SQL Server
builder.Services.AddDbContext<BookReviewContext>(options =>
{
    options.UseSqlServer("Server=100.119.116.100;Database=BookReviewDB;User Id=admin;Password=JLW54NS9XQ;TrustServerCertificate=True;");
});

// Register Repositories as transient service for Repository interface
// Create new Repository instances when associated Interface is requested
builder.Services.AddTransient<IBookRepository, BookRepository>();
builder.Services.AddTransient<IReviewRepository, ReviewRepository>();
builder.Services.AddTransient<IAuthorRepository, AuthorRepository>();
builder.Services.AddTransient<IUserRepository, UserRepository>();

// Add token services
builder.Services.AddScoped<TokenServices>();




var app = builder.Build();

// Configure CORS to allow any localhost origin
app.UseCors(options =>
{
    options.AllowAnyOrigin(); // Allow any origin (including localhost)
    options.AllowAnyMethod(); // Allow any HTTP methods
    options.AllowAnyHeader(); // Allow any headers
});

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
