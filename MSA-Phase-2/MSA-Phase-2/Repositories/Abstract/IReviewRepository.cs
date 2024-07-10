using MSA_Phase_2.Models;

namespace MSA_Phase_2.Repositories
{
    public interface IReviewRepository
    {
        Task<IEnumerable<Review>> GetAllReviewsAsync();
        Task<Review> GetReviewByIdAsync(long id);
        Task AddReviewAsync(Review review);
        Task UpdateReviewAsync(Review review);
        Task DeleteReviewAsync(long id);
        Task<bool> ReviewExistsAsync(long id);
        Task BulkAddReviewsAsync(IEnumerable<Review> Review);

    }
}
