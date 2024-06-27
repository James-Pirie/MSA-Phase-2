namespace MSA_Phase_2.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        // User can have multiple reviews
        public ICollection<Review> Reviews { get; set; }

    }
}
