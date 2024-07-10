using MSA_Phase_2.Models;

namespace MSA_Phase_2.Repositories
{
    public interface IBookRepository
    {
        Task<IEnumerable<Book>> GetAllBooksAsync();
        Task<Book> GetBookByIdAsync(int id);
        Task AddBookAsync(Book Bookbook);
        Task UpdateBookAsync(Book book);
        Task DeleteBookAsync(int id);
        Task<bool> BookExistsAsync(int id);
        Task BulkAddBooksAsync(IEnumerable<Book> books);
    }
}
