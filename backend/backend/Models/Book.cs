namespace MSA_Phase_2.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public int AuthorId { get; set; }
        public string BookName { get; set; }
        public string CoverImageS { get; set; }
        public string CoverImageM { get; set; }
        public string CoverImageL { get; set; }
        public int Year { get; set; }
        // Book has a single author
        public Author Author { get; set; }
        // Book has multuiple reviews
        public ICollection<Review> Reviews { get; set; }

    }
}
