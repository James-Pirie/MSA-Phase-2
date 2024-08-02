using Microsoft.AspNetCore.Mvc;
using MSA_Phase_2.Context;
using MSA_Phase_2.Models;
using MSA_Phase_2.Repositories;

namespace MSA_Phase_2.Controllers
{
    public class AuthorController : Controller
    {
        private readonly IAuthorRepository _repository;

        public AuthorController(IAuthorRepository repository)
        {
            _repository = repository;
        }

        // GET: all authors
        [HttpGet("/author/all")]
        public async Task<ActionResult<IEnumerable<Author>>> Index()
        {
            var author = await _repository.GetAllAuthorsAsync();
            return Ok(author);
        }

        // GET: get an author by author id
        [HttpGet("/author/{authorId}")]
        public async Task<ActionResult<Author>> GetBookByReview(int authorId)
        {
            Author author = await _repository.GetAuthorByIdAsync(authorId);
            return Ok(author);
        }
    }
}
