using Microsoft.AspNetCore.Mvc;
using MSA_Phase_2.Context;
using MSA_Phase_2.Models;
using MSA_Phase_2.Repositories;

namespace MSA_Phase_2.Controllers
{
    public class BookController : Controller
    {
        private readonly IBookRepository _repository;
        private readonly IReviewRepository _reviewRepository;

        public BookController(IBookRepository repository, IReviewRepository reviewRepository)
        {
            _repository = repository;
            _reviewRepository = reviewRepository;

        }

        // GET: /book
        [HttpGet("/book/all")]
        public async Task<ActionResult<IEnumerable<Book>>> Index()
        {
            var books = await _repository.GetAllBooksAsync();
            return Ok(books);
        }

        // GET: /book/bookId
        [HttpGet("/book/{bookId}")]
        public async Task<ActionResult<Book>> GetBookByReview(int bookId)
        {
            Book book = await _repository.GetBookByIdAsync(bookId);
            return Ok(book);
        }

        // GET: /book/search/searchterm
        [HttpGet("/book/search/{searchTerm}")]
        public async Task<ActionResult<Book>> SearchForBook(string searchTerm)
        {
            var books = await _repository.GetBooksFromSearchAsync(searchTerm);
            return Ok(books);
        }

        // GET: /book/rating/{bookId}
        [HttpGet("/book/rating/{bookId}")]
        public async Task<ActionResult<BookRating>> GetBookRating(int bookId)
        {
            var reviews = await _reviewRepository.GetAllReviewsForBookAsync(bookId);
            // check if any reviews were retrieved
            if (reviews == null || !reviews.Any())
            {
                return NotFound();
            }

            // calcualte the average rating from all the reviews
            var averageRating = reviews.Average(r => r.Rating);

            var bookRating = new BookRating
            {
                BookId = bookId,
                Rating = (int)averageRating
            };

            return Ok(bookRating);
        }

        // GET: /book/reccomendation/mostreviewed
        [HttpGet("/book/reccomendation/mostreviewed")]
        public async Task<ActionResult<Book[]>> GetMostReviewedBooks()
        {
            var books = await _repository.GetEightBooksWithMostReviewsAsync();
            return Ok(books);

        }

        // GET: /book/reccomendation/highestrated
        [HttpGet("/book/reccomendation/highestrated")]
        public async Task<ActionResult<Book[]>> GetHighestRatedBooks()
        {
            var books = await _repository.GetEightBooksWithHighestAverageRatingAsync();
            return Ok(books);
        }
    }
}
