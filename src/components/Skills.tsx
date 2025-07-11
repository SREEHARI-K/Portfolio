import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Code2, Paintbrush2, CheckSquare, FlaskConical, Server, Database, Settings
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-primary" />,
      skills: [
        "React.js", "JavaScript (ES6+)", "TypeScript",
        "Redux Toolkit", "Zustand", "React Query", "Context API"
      ]
    },
    {
      title: "Styling & UI",
      icon: <Paintbrush2 className="w-5 h-5 text-primary" />,
      skills: ["Tailwind CSS", "Bootstrap 5", "CSS3", "Responsive Design"]
    },
    {
      title: "Forms & Validation",
      icon: <CheckSquare className="w-5 h-5 text-primary" />,
      skills: ["React Hook Form", "Zod", "Form Validation"]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-primary" />,
      skills: ["REST Django APIs", "Python", "Django"]
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5 text-primary" />,
      skills: ["PostgreSQL", "MySQL", "Database Design"]
    },
    {
      title: "Tools & Workflow",
      icon: <Settings className="w-5 h-5 text-primary" />,
      skills: ["Git", "GitHub", "Postman", "Hadoop", "QGIS Excel", "PowerBI"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border border-border hover:shadow-xl hover:scale-[1.01] transition duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-t-xl">
                {category.icon}
                <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 pb-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs font-medium"
                    >
                      {skill}
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

export default Skills;
