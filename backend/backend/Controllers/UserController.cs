﻿using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;
using MSA_Phase_2.Models;
using MSA_Phase_2.Repositories;
using MSA_Phase_2.Services;


namespace MSA_Phase_2.Controllers
{
    public class UserController : Controller
    {
        private readonly IUserRepository _repository;
        private readonly TokenServices _tokenService;


        public UserController(IUserRepository repository, TokenServices tokenService)
        {
            _repository = repository;
            _tokenService = tokenService;

        }

        // GET: all users
        [HttpGet("/user/all")]
        public async Task<ActionResult<IEnumerable<User>>> Index()
        {
            var users = await _repository.GetAllUsersAsync();
            return Ok(users);
        }

        // GET: get use by user id
        [HttpGet("/user/id/{userId}")]
        public async Task<ActionResult<User>> GetUserByIdAsync(int userId)
        {
            User user = await _repository.GetUserByIdAsync(userId);
            return Ok(user);
        }

        // POST: add a user
        [HttpPost("/user/add")]
        public async Task<ActionResult> AddUserAsync([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("User cannot be null");
            }

            await _repository.AddUserAsync(user);
            return Ok();
        }

        // GET: get a user based on username
        [HttpGet("/user/username/{username}")]
        public async Task<ActionResult<User>> GetUserByUsernameAsync(string username)
        {
            User user = await _repository.GetUserByUsernameAsync(username);
            return Ok(user);
        }

        // POST: authenticate a user based on credentials and assign user a tojen
        [HttpPost("/user/authenticate")]
        public async Task<ActionResult<string>> AuthenticateUserAsync([FromBody] UserLogin loginUser)
        {
            var user = await _repository.GetUserByUsernameAsync(loginUser.UserName);
            if (user != null)
            {
                // verify hashed password in db with password submited by user
                if (BCrypt.Net.BCrypt.Verify(loginUser.Password, user.Password))
                {
                    var token = _tokenService.GenerateToken(user.UserName);
                    return Ok(new { Token = token });
                }
            }

            return Unauthorized("Invalid Login Details");
        }

        // POST: register a user
        [HttpPost("/user/register")]
        public async Task<ActionResult<string>> RegisterUser([FromBody] UserLogin loginUser)
        {
            User getUser = await _repository.GetUserByUsernameAsync(loginUser.UserName);
            

            if(getUser != null)
            {
                return BadRequest("Username Already Taken");
            }

            User newUser = new()
            {
                UserId = 0,
                UserName = loginUser.UserName,
                Password = BCrypt.Net.BCrypt.HashPassword(loginUser.Password)
            };
            await _repository.AddUserAsync(newUser);
            return Ok();
            
        }

        // POST: verify token
        [HttpPost("/user/authorize")]
        public ActionResult VerifyToken()
        {
            // get token from body
            var token = HttpContext.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");

            if (string.IsNullOrEmpty(token))
            {
                return BadRequest("No Token Found");
            }

            try
            {
                bool isValid = _tokenService.VerifyToken(token);
                if (isValid)
                {
                    return Ok(new { Valid = true });
                }
                else
                {
                    return Unauthorized("Invalid Token");
                }
            }
            catch (Exception)
            {
                return Unauthorized("Invalid token format");
            }
        }

        // POST: extract username from token
        [HttpPost("/user/authorize/username")]
        public ActionResult<string> GetAuthorizedUsername()
        {
            var token = HttpContext.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");

            if (string.IsNullOrEmpty(token))
            {
                return BadRequest("No Token Found");
            }

            var username = _tokenService.GetUsernameFromToken(token);

            if (username == null)
            {
                return Unauthorized("No Username Found");
            }
            return Ok(username);
        }
    }
}
