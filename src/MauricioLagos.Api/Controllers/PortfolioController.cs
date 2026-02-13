using Microsoft.AspNetCore.Mvc;
using MauricioLagos.Api.Models;

namespace MauricioLagos.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PortfolioController : ControllerBase
{
    [HttpGet]
    public IActionResult GetPortfolio()
    {
        var profile = new Profile();
        
        var experiences = new List<Experience>
        {
            new Experience 
            { 
                Company = "Koff & Guerrero Consultants", 
                Role = "Ingeniero Programador", 
                Period = "Mayo 2023 – Enero 2025", 
                Location = "Santiago, Chile",
                Responsibilities = new List<string> 
                { 
                    "Desarrollo de plataforma unificada en Blazor con Syncfusion y MudBlazor.",
                    "Implementación de pipelines CI/CD en Azure DevOps.",
                    "Optimización de rendimiento y estabilidad en aplicaciones .NET.",
                    "Gestión y optimización de bases de datos SQL Server.",
                    "Visualización de datos con Power BI."
                }
            },
            new Experience 
            { 
                Company = "Serviphar", 
                Role = "Desarrollador .NET", 
                Period = "Julio 2025 – Septiembre 2025", 
                Location = "Santiago, Chile",
                Responsibilities = new List<string> 
                { 
                    "Optimización de bases de datos para búsquedas complejas.",
                    "Desarrollo de aplicaciones en C# con .NET Framework 4.6.",
                    "Implementación de funcionalidades con JavaScript, AJAX y JQuery."
                }
            },
            new Experience 
            { 
                Company = "Ayesa", 
                Role = "Practicante Desarrollo BDD", 
                Period = "Marzo 2022 – Julio 2022", 
                Location = "Remoto, Chile",
                Responsibilities = new List<string> 
                { 
                    "Integración y optimización de BBDD.",
                    "Manejo de Power BI para grandes volúmenes de datos.",
                    "Apoyo en tareas de desarrollo y documentación técnica."
                }
            }
        };

        var skills = new List<Skill>
        {
            new Skill { Category = "Backend & ORM", Items = new List<string> { "C#", ".NET Core", ".NET Framework", "Entity Framework", "Dapper", "Python" } },
            new Skill { Category = "Desarrollo Frontend", Items = new List<string> { "React", "Blazor", "TypeScript", "JavaScript" } },
            new Skill { Category = "IA & Automatización", Items = new List<string> { "Integración con IA", "Claude Code", "Gemini", "LLM Prompting" } },
            new Skill { Category = "Ingeniería de Datos", Items = new List<string> { "SQL Server", "MySQL", "Procesos ETL", "Pandas", "Power BI" } },
            new Skill { Category = "DevOps & Nube", Items = new List<string> { "Azure DevOps", "Vercel", "Git", "GitHub" } },
            new Skill { Category = "Diseño & Gestión", Items = new List<string> { "Tailwind CSS", "Bootstrap", "Syncfusion", "Jira", "Trello" } }
        };

        return Ok(new { Profile = profile, Experiences = experiences, Skills = skills });
    }
}
