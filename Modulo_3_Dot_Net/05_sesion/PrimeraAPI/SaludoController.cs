using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]

public class SaludoController : ControllerBase
{
    // GET /saludo
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new{ mensaje = "Saludo desde el Controller" });
    }

    //GET /saludo/{name}
    [HttpGet("personalizado/{nombre}")]
    public IActionResult GetPersonalizado(string nombre)
    {
        var respuesta = new
        {
            mensaje = $"Hola, {nombre}"
        };

        return Ok(respuesta);

    }

    public static string validadorNombre(string nombre)
    {
        return "dafdsfdgh";
    }
}