
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow duration-300 border shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Let's Work Together</CardTitle>
              <p className="text-muted-foreground mt-2">
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to discuss potential collaborations.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <a href="mailto:sreeharij17@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Mail size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">sreeharij17@gmail.com</p>
                      </div>
                    </a>
                    
                    <a href="tel:+919633745016" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Phone size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">+91 8078 760 149</p>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">Kozhikode, Kerala</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links & CTA */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h3>
                  
                  <div className="space-y-4">
                    <a href="https://www.linkedin.com/in/sreehari---k/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Linkedin size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Connect with me professionally</p>
                      </div>
                    </a>
                    
                    <a href="https://github.com/SREEHARI-K" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Github size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">GitHub</p>
                        <p className="text-sm text-muted-foreground">Check out my repositories</p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild className="w-full">
                      <a href="mailto:sreeharij17@gmail.com">
                        Send me an email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
