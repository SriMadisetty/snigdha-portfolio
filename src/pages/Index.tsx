import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Database,
  Cloud,
  Smartphone,
  Server,
  Globe
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const experiences = [
    {
      company: "Vanguard",
      role: "Frontend Engineer",
      location: "PA, USA",
      period: "Feb 2024 - Present",
      achievements: [
        "Built scalable frontend features for an investment analytics platform using React and Plotly, supporting 10,000+ active users",
        "Created interactive dashboards and data visualizations, boosting user engagement by 30%",
        "Deployed frontend components on AWS S3, working with backend auto-scaling on EC2 to maintain 99.9% uptime",
        "Contributed to Jenkins CI/CD pipelines for frontend releases, reducing deployment cycles by 20%",
        "Designed and developed code using MVC architecture with angular js"
      ]
    },
    {
      company: "Citi Bank",
      role: "Associate Software Engineer", 
      location: "Hyderabad, India",
      period: "Aug 2023 - Dec 2023",
      achievements: [
        "Designed and developed a web-based dashboard for real-time banking transaction monitoring using Java, Spring Boot, and React",
        "Built secure RESTful APIs with Spring Security and JWT authentication, integrating MySQL databases",
        "Enhanced user experience by integrating interactive visualizations with D3.js and Chart.js",
        "Automated testing processes with JUnit and Selenium, achieving 95% code coverage"
      ]
    },
    {
      company: "Google",
      role: "UI Developer",
      location: "Hyderabad, India", 
      period: "Jan 2021 - May 2022",
      achievements: [
        "Developed high-performance frontend interfaces for internal search optimization tools using React, TypeScript, and D3.js",
        "Designed and implemented modular, reusable UI components supporting complex data visualizations",
        "Collaborated with backend teams leveraging BigQuery and Apache Beam to efficiently fetch and display large-scale analytics data",
        "Optimized frontend performance by implementing code-splitting, lazy loading, and advanced caching strategies"
      ]
    }
  ];

  const projects = [
    {
      title: "Investment Analytics Platform",
      description: "Built a scalable React frontend featuring Plotly visualizations, supported by Python, Django, and PostgreSQL backend systems.",
      technologies: ["React", "Plotly", "Python", "Django", "PostgreSQL", "AWS"],
      company: "Vanguard"
    },
    {
      title: "Transaction Monitoring Dashboard",
      description: "Developed a real-time React frontend dashboard with D3.js visualizations, integrated with Java and Spring Boot backend services.",
      technologies: ["React", "D3.js", "Java", "Spring Boot", "MySQL", "JWT"],
      company: "Citi Bank"
    },
    {
      title: "Search Optimization Suite",
      description: "Enhanced internal tools by creating responsive React frontend components, collaborating with Python, Go, and BigQuery backend teams.",
      technologies: ["React", "TypeScript", "D3.js", "Python", "Go", "BigQuery"],
      company: "Google"
    }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "Java", "Python", "C++", "SQL", "Go"]
    },
    {
      title: "Frontend Frameworks",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "Next.js", "Angular", "Vue.js", "HTML5", "CSS3"]
    },
    {
      title: "Backend Frameworks", 
      icon: <Server className="w-6 h-6" />,
      skills: ["Spring Boot", "Django", "Flask", "Node.js", "Express", "Hibernate"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "Redis", "BigQuery"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
    },
    {
      title: "Tools & Others",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["Git", "Jenkins", "Jest", "Selenium", "Pandas", "NumPy"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-section py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div 
              className="mb-8" 
              data-aos="fade-up"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
                Sri Snigdha
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
                Software Engineer
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Software Engineer with over 3 years of experience designing, developing, and deploying 
                user-centric frontend applications alongside robust backend systems. Passionate about 
                combining frontend innovation with backend reliability to drive engaging and efficient software products.
              </p>
            </div>
            
            <div 
              className="flex flex-wrap justify-center gap-4" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <Button 
                variant="social" 
                size="xl"
                onClick={() => window.open('https://github.com/SriMadisetty', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </Button>
              <Button 
                variant="social" 
                size="xl"
                onClick={() => window.open('https://www.linkedin.com/in/madissri-snigdha-36b838221', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                View LinkedIn
              </Button>
              <Button 
                variant="contact" 
                size="xl"
                onClick={() => window.open('mailto:srimadisetty22@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-hero bg-clip-text text-transparent"
              data-aos="fade-up"
            >
              About Me
            </h2>
            <div 
              className="text-lg text-foreground/80 leading-relaxed space-y-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p>
                I'm a passionate Software Engineer with over 3 years of experience in full-stack development, 
                specializing in creating scalable frontend applications and robust backend systems. My journey 
                spans across prestigious companies including Google, Citi Bank, and currently Vanguard, where 
                I've contributed to projects serving thousands of users.
              </p>
              <p>
                My expertise lies in JavaScript, React, Java, Python, and cloud platforms. I'm skilled in 
                Agile methodologies, UI/UX optimization, and data visualization. I thrive in collaborative 
                environments where I can work cross-functionally to deliver impactful, scalable solutions 
                that make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-hero bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Professional Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="mb-12" 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <Card className="shadow-card bg-gradient-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                        <h4 className="text-xl font-semibold text-primary mb-2">{exp.company}</h4>
                        <p className="text-muted-foreground flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-sm font-medium">
                        {exp.period}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-foreground/80">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-hero bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="shadow-card bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-sm text-accent font-medium mb-4">{project.company}</p>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-hero bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="shadow-card bg-gradient-card hover:shadow-glow transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
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

      {/* Education Section */}
      <section id="education" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-hero bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Education & Certifications
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card 
              className="shadow-card bg-gradient-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Master of Science in Computer Science</h4>
                    <p className="text-muted-foreground">University of Central Missouri, Missouri, USA</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Bachelor of Science in Computer Science</h4>
                    <p className="text-muted-foreground">JNTU-H, Hyderabad, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="shadow-card bg-gradient-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Certifications</h3>
                <div>
                  <h4 className="font-semibold text-primary">Python for Data Science</h4>
                  <p className="text-muted-foreground">Coursera</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-hero bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Get In Touch
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-4" />
                  <a 
                    href="mailto:srimadisetty22@gmail.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    srimadisetty22@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-4" />
                  <span className="text-foreground">302-420-8899</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-4" />
                  <span className="text-foreground">New Jersey, USA</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button 
                  variant="social"
                  onClick={() => window.open('https://www.linkedin.com/in/madissri-snigdha-36b838221', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  variant="social"
                  onClick={() => window.open('https://github.com/SriMadisetty', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="400">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Sri Snigdha. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://www.linkedin.com/in/madissri-snigdha-36b838221', '_blank')}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://github.com/SriMadisetty', '_blank')}
            >
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
