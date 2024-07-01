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

        // GET: books/Students
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> Index()
        {
            var books = await _repository.GetAllBooksAsync();
            return View(books);
        }



    }
}
