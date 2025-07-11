import { Github, Linkedin, Mail, Moon, Sun, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const downloadResume = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/Sreehari K - Resume.pdf'; // Corrected path to public folder
    link.download = 'Sreehari_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-background/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Sreehari K</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={downloadResume} className="hidden md:flex">
              <Download size={16} />
              Resume
            </Button>
            <a href="mailto:sreeharij17@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
              <span className="hidden md:block">Contact</span>
            </a>
            <a href="https://www.linkedin.com/in/sreehari---k/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/SREEHARI-K" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
