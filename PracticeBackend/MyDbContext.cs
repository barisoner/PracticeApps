using Microsoft.EntityFrameworkCore;
using PracticeBackend.Model;  // Model klasörünü referans ekleyin


public class MyDbContext : DbContext
{
    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
    {
    }

    public DbSet<Person> Persons { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Person>()
            .Property(p => p.Id)
            .ValueGeneratedOnAdd();
    }
}