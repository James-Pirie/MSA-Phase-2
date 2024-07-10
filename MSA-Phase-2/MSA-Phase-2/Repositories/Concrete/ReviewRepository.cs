using Microsoft.EntityFrameworkCore;
using MSA_Phase_2.Context;
using MSA_Phase_2.Models;

namespace MSA_Phase_2.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly BookReviewContext _context;

        public async Task<IEnumerable<Review>> GetAllReviewsAsync()
        {
            return await _context.Reviews.ToListAsync();
        }

        public async Task<Review> GetReviewByIdAsync(long id)
        {
            return await _context.Reviews.FindAsync(id);
        }

        public async Task AddReviewAsync(Review review)
        {
            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateReviewAsync(Review review)
        {
            _context.Entry(review).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteReviewAsync(long id)
        {
            var review = await _context.Reviews.FindAsync(id);
            if (review != null)
            {
                _context.Reviews.Remove(review);
                await _context.SaveChangesAsync();
            }
        }
        public async Task<bool> ReviewExistsAsync(long id)
        {
            return await _context.Reviews.AnyAsync(e => e.ReviewId == id);
        }

        public async Task BulkAddReviewsAsync(IEnumerable<Review> reviews)
        {
            await _context.Reviews.AddRangeAsync(reviews);
            await _context.SaveChangesAsync();
        }
    }
}
