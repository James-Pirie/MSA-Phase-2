using Microsoft.EntityFrameworkCore;
using MSA_Phase_2.Context;
using MSA_Phase_2.Models;

namespace MSA_Phase_2.Repositories
{
    public class AuthorRepository : IAuthorRepository
    {
        private readonly BookReviewContext _context;

        public AuthorRepository(BookReviewContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Author>> GetAllAuthorsAsync()
        {
            return await _context.Authors.ToListAsync();
        }

        public async Task<Author> GetAuthorByIdAsync(int id)
        {
            return await _context.Authors.FindAsync(id);
        }

        public async Task AddAuthorAsync(Author author)
        {
            _context.Authors.Add(author);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAuthorAsync(Author author)
        {
            _context.Entry(author).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAuthorAsync(int id)
        {
            var author = await _context.Authors.FindAsync(id);
            if (author != null)
            {
                _context.Authors.Remove(author);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> AuthorExistsAsync(int id)
        {
            return await _context.Authors.AnyAsync(e => e.AuthorId == id);
        }

        public async Task BulkAddAuthorsAsync(IEnumerable<Author> author)
        {
            await _context.Authors.AddRangeAsync(author);
            await _context.SaveChangesAsync();
        }
    }
}
