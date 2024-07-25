using Microsoft.AspNetCore.Mvc;
using MSA_Phase_2.Models;
using MSA_Phase_2.Repositories;

namespace MSA_Phase_2.Controllers
{
    public class ReviewController : Controller
    {
        private readonly IReviewRepository _repository;

        public ReviewController(IReviewRepository repository)
        {
            _repository = repository;
        }

        // GET: get all reviews
        [HttpGet("/review/all")]
        public async Task<ActionResult<IEnumerable<Review>>> Index()
        {
            var reviews = await _repository.GetAllReviewsAsync();
            return Ok(reviews);
        }

        // GET: get a random review
        [HttpGet("/review/random")]
        public async Task<ActionResult<Review>> Random()
        {
            var review = await _repository.GetRandomReview();
            return Ok(review);
        }

        // GET: get a specific review
        [HttpGet("/review/{reviewId}")]
        public async Task<ActionResult<Review>> GetReviewById(int reviewId)
        {
            Review review = await _repository.GetReviewByIdAsync(reviewId);
            return Ok(review);
        }

        // GET: get all reviews for a book
        [HttpGet("/review/bybook/{bookId}")]
        public async Task<ActionResult<Review>> GetReviewByBook(int bookId)
        {
            IEnumerable<Review> reviews = await _repository.GetAllReviewsForBookAsync(bookId);
            return Ok(reviews);
        }

        // GET: get all review for a user
        [HttpGet("/review/byuser/{userId}")]
        public async Task<ActionResult<Review>> GetReviewByUser(int userId)
        {
            IEnumerable<Review> reviews = await _repository.GetAllReviewsForUserAsync(userId);
            return Ok(reviews);
        }


        // POST: add a new review
        [HttpPost("/review/post")]
        public async Task<ActionResult> Post([FromBody] Review review)
        {
            if (review == null)
            {
                return BadRequest("Review object is null");
            }
            // post the review to db
            await _repository.AddReviewAsync(review);
            return CreatedAtAction(nameof(Random), new { id = review.ReviewId }, review);
        }

        // DELETE: delete a review
        [HttpDelete("/review/delete")]
        public async Task<ActionResult<Review>> DeleteReview([FromBody] Review review)
        {
            int id = review.ReviewId;
            await _repository.DeleteReviewAsync(id);
            return Ok();
        }
    }
}
