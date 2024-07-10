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
    }
}
