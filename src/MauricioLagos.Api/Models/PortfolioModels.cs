namespace MauricioLagos.Api.Models;

public class Profile
{
    public string Name { get; set; } = "Mauricio Lagos";
    public string Title { get; set; } = "Software Developer especializado en .NET y Blazor";
    public string Location { get; set; } = "Talcahuano, Chile";
    public string Summary { get; set; } = "Más de 2 años de experiencia como Desarrollador de Software especializado en .NET y Blazor. En Koff & Guerrero lideré la creación de una plataforma unificada de componentes en Blazor, integrando librerías como Syncfusion y aplicando prácticas de CI/CD en Azure DevOps. Mi perfil combina experiencia técnica en backend y frontend con una fuerte orientación a la mejora continua y la experiencia de usuario.";
    public string Email { get; set; } = "mauricioelb@hotmail.com";
    public string LinkedIn { get; set; } = "linkedin.com/in/maudev2";
    public string Phone { get; set; } = "+56940555937";
}

public class Experience
{
    public string Company { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string Period { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public List<string> Responsibilities { get; set; } = new();
}

public class Skill
{
    public string Category { get; set; } = string.Empty;
    public List<string> Items { get; set; } = new();
}
