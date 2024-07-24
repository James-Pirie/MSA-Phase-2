namespace MSA_Phase_2.Models
{
    public class Review
    {
        public int ReviewId { get; set; }
        public int BookId { get; set; }
        public int UserId { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; }
        // Review has one user and one book
        public User User { get; set; }
        public Book Book { get; set; }

    }
}
