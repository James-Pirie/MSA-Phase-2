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

        // GET: random review
        [HttpGet("/review/all")]
        public async Task<ActionResult<IEnumerable<Book>>> Index()
        {
            var books = await _repository.GetAllReviewsAsync();
            return Ok(books);
        }
    }
}
