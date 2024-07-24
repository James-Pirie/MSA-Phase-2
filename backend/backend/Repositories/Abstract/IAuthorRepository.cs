using MSA_Phase_2.Models;

namespace MSA_Phase_2.Repositories
{
    public interface IAuthorRepository
    {
        Task<IEnumerable<Author>> GetAllAuthorsAsync();
        Task<Author> GetAuthorByIdAsync(int id);
        Task AddAuthorAsync(Author author);
        Task UpdateAuthorAsync(Author author);
        Task DeleteAuthorAsync(int id);
        Task<bool> AuthorExistsAsync(int id);
        Task BulkAddAuthorsAsync(IEnumerable<Author> authors);
    }
}
