using System.ComponentModel.DataAnnotations;

namespace PracticeBackend.Model
{
    public class Person
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "FullName is required")]
        [MaxLength(255)]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        [MaxLength(255)]
        public string Email { get; set; }

        [Required(ErrorMessage = "IsActive status is required")]
        public bool IsActive { get; set; }
    }
}