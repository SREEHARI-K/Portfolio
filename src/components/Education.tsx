
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Central University of Haryana",
      location: "Haryana",
      period: "Graduation Year 2025",
      type: "Postgraduate"
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Calicut University",
      location: "Kozhikode",
      period: "Graduation Year 2023",
      type: "Undergraduate"
    },
  ];

  const skills = [
    "Communication", "Teamwork", "Critical thinking", 
    "Time management", "Leadership", "Adaptability"
  ];

  const languages = [
    { language: "English", level: "Proficient" },
    { language: "Hindi", level: "Proficient" },
    { language: "Malayalam", level: "Native" },
    { language: "Tamil", level: "Conversational" },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Education & Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{edu.degree}</CardTitle>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays size={16} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {edu.type}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills and Languages */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground">{lang.language}</span>
                      <Badge variant="secondary" className="text-xs">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
