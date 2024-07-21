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

        // GET: all reviews
        [HttpGet("/review/all")]
        public async Task<ActionResult<IEnumerable<Review>>> Index()
        {
            var reviews = await _repository.GetAllReviewsAsync();
            return Ok(reviews);
        }

        // GET: random review
        [HttpGet("/review/random")]
        public async Task<ActionResult<Review>> Random()
        {
            var review = await _repository.GetRandomReview();
            return Ok(review);
        }

        // GET: /review/reviewId
        [HttpGet("/review/{reviewId}")]
        public async Task<ActionResult<Review>> GetReviewById(int reviewId)
        {
            Review review = await _repository.GetReviewByIdAsync(reviewId);
            return Ok(review);
        }

                // GET: /review/reviewId
        [HttpGet("/review/bybook/{bookId}")]
        public async Task<ActionResult<Review>> GetReviewByBook(int bookId)
        {
            IEnumerable<Review> reviews = await _repository.GetAllReviewsForBookAsync(bookId);
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
    }
}
