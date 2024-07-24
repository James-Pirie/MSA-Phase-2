using Microsoft.EntityFrameworkCore;
using MSA_Phase_2.Models;

namespace MSA_Phase_2.Context
{
    public class BookReviewContext : DbContext
    {
        public BookReviewContext(DbContextOptions<BookReviewContext> options)
            : base(options)
        {
        }

        // Create Tables
        public DbSet<Author> Authors { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Book-Author relationship
            modelBuilder.Entity<Book>()
                .HasOne(b => b.Author)
                .WithMany(a => a.Books)
                .HasForeignKey(b => b.AuthorId);

            // Review-Book relationship
            modelBuilder.Entity<Review>()
                .HasOne(r => r.Book)
                .WithMany(b => b.Reviews)
                .HasForeignKey(r => r.BookId);

            // Review-User relationship
            modelBuilder.Entity<Review>()
                .HasOne(r => r.User)
                .WithMany(u => u.Reviews)
                .HasForeignKey(r => r.UserId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
