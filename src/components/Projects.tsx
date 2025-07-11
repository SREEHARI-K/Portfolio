import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Spam Email Classification",
      role: "",
      url: "",
      githubUrl: "",
      image: "",
      description: "Used different models for spam email classification. Using Python and machine learning models.",
      achievements: [],
      technologies: ["React.js", "Tailwind CSS", "Chart Components", "Responsive Design"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg bg-card overflow-hidden">
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={`${project.title} preview`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  {project.url && (
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Visit Site
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">{project.title}</CardTitle>
                    <p className="text-primary font-medium">{project.role}</p>
                   
                  </div>
                  <div className="flex gap-2">
                    {project.url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="space-y-2 mb-4">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
