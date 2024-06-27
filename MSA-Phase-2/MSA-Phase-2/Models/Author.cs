namespace MSA_Phase_2.Models
{
    public class Author
    {
        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
        // Author can have multiple books
        public ICollection<Book> Books { get; set; }
    }
}
