using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using PracticeBackend.Model;


[Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
[ApiController]
public class PersonsController : ControllerBase
{
    private readonly MyDbContext _context;

    public PersonsController(MyDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> PostPerson([FromBody] Person person)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Persons.Add(person);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetPerson", new { id = person.Id }, person);
    }
}