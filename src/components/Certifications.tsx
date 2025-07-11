import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Science Certification",
      institution: "TUTEDUDE",
      year: "2025",
      type: "Data Science"
    },
    {
      title: "Python Web Development",
      institution: "KAGGLE",
      year: "2025",
      type: "Web Development"
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-center gap-2">
                  <Award className="text-primary" />
                  {cert.title}
                </CardTitle>
                <p className="text-primary font-medium">{cert.institution}</p>
                <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={16} />
                    <span className="text-sm">{cert.year}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">{cert.type}</Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
