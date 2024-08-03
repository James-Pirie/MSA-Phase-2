using Microsoft.EntityFrameworkCore;
using MSA_Phase_2.Context;
using MSA_Phase_2.Repositories;
using MSA_Phase_2.Services;

var builder = WebApplication.CreateBuilder(args);

// Configure to listen on port 5220
builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(5220); // Listen on port 5220
});

// Add services to the container.
builder.Services.AddControllersWithViews();

// Connect to SQL Server
builder.Services.AddDbContext<BookReviewContext>(options =>
{
    options.UseSqlServer("Server=tcp:sqlchaptercritics.database.windows.net,1433;Initial Catalog=BookReviewDB;Persist Security Info=False;User ID=ChapterCriticsAdmin;Password=CD4ElnNO;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
});

// Register Repositories as transient service for Repository interface
builder.Services.AddTransient<IBookRepository, BookRepository>();
builder.Services.AddTransient<IReviewRepository, ReviewRepository>();
builder.Services.AddTransient<IAuthorRepository, AuthorRepository>();
builder.Services.AddTransient<IUserRepository, UserRepository>();

// add token services
builder.Services.AddScoped<TokenServices>();

// Configure CORS to allow any localhost origin
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000", "https://chaptercritics.azurewebsites.net")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// use cors
app.UseCors("AllowReactApp");


// configure  HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
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
