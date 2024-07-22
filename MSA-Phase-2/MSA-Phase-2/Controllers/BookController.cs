using Microsoft.AspNetCore.Mvc;
using MSA_Phase_2.Context;
using MSA_Phase_2.Models;
using MSA_Phase_2.Repositories;

namespace MSA_Phase_2.Controllers
{
    public class BookController : Controller
    {
        private readonly IBookRepository _repository;

        public BookController(IBookRepository repository)
        {
            _repository = repository;
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


    }
}
