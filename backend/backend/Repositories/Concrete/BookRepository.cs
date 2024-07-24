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
            return await _context.Books
                                 .Include(b => b.Author)
                                 .ToListAsync();
        }

        public async Task<IEnumerable<Book>> GetBooksFromSearchAsync(string search)
        {
            search = search.ToLower();

            return await _context.Books
                                    .Where(b => b.BookName.ToLower().Contains(search))
                                    .OrderByDescending(b => b.BookName.ToLower().StartsWith(search))
                                    .ThenByDescending(b => b.BookName.ToLower() == search)
                                    .ThenBy(b => b.BookName.ToLower().Contains(search))
                                    .Take(15)
                                    .ToListAsync();
        }

        public async Task<Book> GetBookByIdAsync(int id)
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

        public async Task DeleteBookAsync(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book != null)
            {
                _context.Books.Remove(book);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> BookExistsAsync(int id)
        {
            return await _context.Books.AnyAsync(e => e.BookId == id);
        }

        public async Task BulkAddBooksAsync(IEnumerable<Book> books)
        {
            await _context.Books.AddRangeAsync(books);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Book>> GetEightBooksWithMostReviewsAsync()
        {
            return await _context.Books
                .Select(book => new
                {
                    Book = book,
                    ReviewCount = _context.Reviews.Count(review => review.BookId == book.BookId)
                })
                .OrderByDescending(bookReview => bookReview.ReviewCount)
                .Take(8)
                .Select(bookReview => bookReview.Book)
                .ToListAsync();
        }

        public async Task<IEnumerable<Book>> GetEightBooksWithHighestAverageRatingAsync()
        {   
            return await _context.Books
                .Select(book => new
                {
                    Book = book,
                    AverageRating = _context.Reviews
                        .Where(review => review.BookId == book.BookId)
                        .Average(review => review.Rating)
                })
                .OrderByDescending(bookReview => bookReview.AverageRating)
                .Take(8)
                .Select(bookReview => bookReview.Book)
                .ToListAsync();
        }
    }
}
