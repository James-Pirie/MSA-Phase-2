using Microsoft.AspNetCore.Mvc;
using MSA_Phase_2.Models;
using MSA_Phase_2.Repositories;

namespace MSA_Phase_2.Controllers
{
    public class UserController : Controller
    {
        private readonly IUserRepository _repository;

        public UserController(IUserRepository repository)
        {
            _repository = repository;
        }

        // GET: /user/all
        [HttpGet("/user/all")]
        public async Task<ActionResult<IEnumerable<User>>> Index()
        {
            var users = await _repository.GetAllUsersAsync();
            return Ok(users);
        }

        // GET: /user/userId
        [HttpGet("/user/{userId}")]
        public async Task<ActionResult<User>> GetUserByIdAsync(int userId)
        {
            User user = await _repository.GetUserByIdAsync(userId);
            return Ok(user);
        }

    }
}
