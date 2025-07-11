
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "React Frontend Developer",
      company: "Greekslabs Technologies ltd",
      location: "Kozhikode",
      period: "September 2024 - Present",
      type: "Full-time",
      responsibilities: [
        "Developed and maintained responsive web applications for unlisted shares and algo trading platform",
        "Contributed to the development of a web application for unlisted shares and algorithmic trading",
        "Utilized React.js, Material-UI, Tailwind CSS, React hook forms, Redux and React Query to create a responsive and user-friendly interface",
        "Integrated backend services with the frontend for seamless data communication",
        "Enhanced real-time data processing using WebSocket API integration and REST APIs",
        "Maintained clean code standards and code reviews using Git workflows"
      ],
      technologies: ["React.js", "Material-UI", "Tailwind CSS", "Redux", "React Query", "WebSocket", "REST APIs"]
    },
    {
      title: "Python Full Stack Developer Intern",
      company: "Quest Innovative Solutions Pvt Ltd",
      location: "Kozhikode",
      period: "October 2023 - August 2024",
      type: "Internship",
      responsibilities: [
        "Internship at Quest Innovative Solutions as a Python Full Stack Developer",
        "Gained hands-on experience in developing and maintaining web applications",
        "Frontend: Built dynamic UIs using HTML, CSS, JavaScript, and Bootstrap for responsive design",
        "Backend: Developed robust APIs and managed data using Python, Django, and Flask"
      ],
      technologies: ["Python", "Django", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <div key={respIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{responsibility}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
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

export default Experience;
