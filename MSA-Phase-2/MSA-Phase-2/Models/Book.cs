namespace MSA_Phase_2.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public int AuthorId { get; set; }
        public string BookName { get; set; }
        public string CoverImage { get; set; }
        public Author Author { get; set; }
        // Book has multuiple reviews
        public ICollection<Review> Reviews { get; set; }

    }
}
