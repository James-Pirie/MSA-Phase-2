using MSA_Phase_2.Models;

namespace MSA_Phase_2.Repositories
{
    public interface IReviewRepository
    {
        Task<IEnumerable<Review>> GetAllReviewsAsync();
        Task<Review> GetReviewByIdAsync(int id);
        Task AddReviewAsync(Review review);
        Task UpdateReviewAsync(Review review);
        Task DeleteReviewAsync(int id);
        Task<bool> ReviewExistsAsync(int id);
        Task BulkAddReviewsAsync(IEnumerable<Review> Review);
        Task<Review> GetRandomReview();
        Task<IEnumerable<Review>> GetAllReviewsForBookAsync(int bookId);
        Task<IEnumerable<Review>> GetAllReviewsForUserAsync(int userId);
    }
}
