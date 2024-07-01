using MSA_Phase_2.Models;

namespace MSA_Phase_2.Repositories
{
    public interface IBookRepository
    {
        Task<IEnumerable<Book>> GetAllBooksAsync();
        Task<Book> GetBookByIdAsync(long id);
        Task AddBookAsync(Book Bookbook);
        Task UpdateBookAsync(Book book);
        Task DeleteBookAsync(long id);
        Task<bool> BookExistsAsync(long id);
        Task BulkAddBooksAsync(IEnumerable<Book> books);

    }
}
