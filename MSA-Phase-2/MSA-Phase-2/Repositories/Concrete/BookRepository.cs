using Microsoft.EntityFrameworkCore;
using MSA_Phase_2.Context;
using MSA_Phase_2.Models;

namespace MSA_Phase_2.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly BookReviewContext _context;

        public BookRepository(BookReviewContext context)
        {
            _context = context;   
        }

        public async Task<IEnumerable<Book>> GetAllBooksAsync()
        {
            return await _context.Books.ToListAsync();
        }

        public async Task<Book> GetBookByIdAsync(long id)
        {
            return await _context.Books.FindAsync(id);
        }

        public async Task AddBookAsync(Book book)
        {
            _context.Books.Add(book);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateBookAsync(Book book)
        {
            _context.Entry(book).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteBookAsync(long id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book != null)
            {
                _context.Books.Remove(book);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> BookExistsAsync(long id)
        {
            return await _context.Books.AnyAsync(e => e.BookId == id);
        }

        public async Task BulkAddBooksAsync(IEnumerable<Book> books)
        {
            await _context.Books.AddRangeAsync(books);
            await _context.SaveChangesAsync();
        }
    }
}
