using System.Text.Json.Serialization;

namespace MSA_Phase_2.Models
{
    public class Author
    {
        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
        // Author can have multiple books
        [JsonIgnore]
        public ICollection<Book> Books { get; set; }
    }
}
