import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Award,
  Briefcase,
  Heart,
  Code,
  ArrowRight,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({
    years: 0,
    companies: 0,
    team: 0,
    success: 0,
  });
  const [hasAnimated, setHasAnimated] = useState({
    stats: false,
    skills: false,
  });
  const observerRef = useRef(null);

  // Gallery images with placeholders - Replace with your own images
  const galleryImages = [
    {
      image: "/a1.jpeg",
      caption: "Professional Moments",
      location: "Hyderabad",
    },
    {
      image: "/a2.jpeg",
      caption: "Team & Collaboration",
      location: "Getz Pharma",
    },
    {
      image: "/a3.jpeg",
      caption: "Work Excellence",
      location: "Office",
    },
    {
      image: "/a4.jpeg",
      caption: "Personal Journey",
      location: "Pakistan",
    },
    {
      image: "/a5.jpeg",
      caption: "Achievements",
      location: "Events",
    },
    {
      image: "/a6.jpeg",
      caption: "Professional Growth",
      location: "Career",
    },
    {
      image: "/a7.jpeg",
      caption: "Team Building",
      location: "Activities",
    },
    {
      image: "/a8.jpeg",
      caption: "Leadership",
      location: "Workplace",
    },
    {
      image: "/a9.jpeg",
      caption: "Professional Network",
      location: "Conferences",
    },
    {
      image: "/a10.jpeg",
      caption: "Industry Events",
      location: "Seminars",
    },
  ];

  const experiences = [
    {
      role: "Assistant Supervisor",
      company: "Getz Pharma",
      period: "Current Position",
      description:
        "Leading operational excellence in pharmaceutical manufacturing with a focus on quality assurance, team management, and regulatory compliance. Supervising daily operations, implementing process improvements, and ensuring adherence to GMP standards. Managing cross-functional teams, coordinating production schedules, and maintaining optimal inventory levels. Driving continuous improvement initiatives that have enhanced operational efficiency by streamlining workflows and reducing bottlenecks. Responsible for training and mentoring junior staff while maintaining the highest standards of pharmaceutical production.",
      achievements: [
        "Implemented quality control measures improving compliance",
        "Led team of 15+ staff members in daily operations",
        "Reduced operational bottlenecks by 25% through process optimization",
        "Achieved 98% on-time delivery rate",
      ],
    },
    {
      role: "Machine Operator",
      company: "Herbion Pharma",
      period: "Previous Experience",
      description:
        "Operated and maintained sophisticated pharmaceutical manufacturing equipment with precision and attention to detail. Monitored production processes, performed quality checks, and ensured compliance with safety protocols. Executed preventive maintenance schedules and troubleshot technical issues to minimize downtime. Collaborated with engineering teams to optimize machine performance and production efficiency. Maintained detailed production records and participated in continuous improvement initiatives that enhanced overall equipment effectiveness.",
      achievements: [
        "Maintained 99% machine uptime through proactive maintenance",
        "Trained 10+ new operators on equipment operation",
        "Contributed to 15% increase in production efficiency",
        "Zero safety incidents during tenure",
      ],
    },
    {
      role: "Computer Operator",
      company: "Boulevard Mall",
      period: "Previous Experience",
      description:
        "Managed computer systems and provided technical support in a fast-paced retail environment. Handled data entry, system maintenance, and customer service operations with proficiency in multiple software platforms. Troubleshot technical issues, maintained network connectivity, and ensured smooth daily operations. Processed transactions, managed digital inventory systems, and generated operational reports for management. Provided exceptional customer assistance while maintaining data accuracy and system security.",
      achievements: [
        "Managed 500+ daily transactions with zero errors",
        "Reduced system downtime by 40% through proactive monitoring",
        "Implemented digital filing system improving retrieval time",
        "Consistently received excellent customer feedback ratings",
      ],
    },
  ];

  const skills = [
    {
      category: "Leadership & Management",
      items: [
        "Team Supervision",
        "Operations Management",
        "Strategic Planning",
        "Performance Optimization",
        "Project Coordination",
      ],
    },
    {
      category: "Technical Skills",
      items: [
        "Quality Control Systems",
        "Manufacturing Equipment",
        "Computer Operations",
        "Data Analysis",
        "Process Automation",
      ],
    },
    {
      category: "Pharmaceutical Industry",
      items: [
        "GMP Compliance",
        "Quality Assurance",
        "Production Planning",
        "Inventory Management",
        "Regulatory Standards",
      ],
    },
    {
      category: "Professional Skills",
      items: [
        "Problem Solving",
        "Communication",
        "Time Management",
        "Decision Making",
        "Continuous Improvement",
      ],
    },
  ];

  const hobbies = [
    {
      title: "Cricket Enthusiast",
      description:
        "Passionate about cricket - playing regularly with local teams and following international matches. The sport has taught me teamwork, strategy, and the importance of staying focused under pressure.",
      icon: "🏏",
    },
    {
      title: "Food Explorer",
      description:
        "Love discovering new cuisines and restaurants around Hyderabad. From traditional Sindhi dishes to international flavors, exploring food is my way of experiencing different cultures.",
      icon: "🍜",
    },
    {
      title: "Tech Enthusiast",
      description:
        "Deeply interested in emerging technologies, automation, and digital transformation. Constantly learning about new innovations in tech and how they can improve business operations.",
      icon: "💻",
    },
    {
      title: "Photography",
      description:
        "Capturing moments and scenes from daily life, especially during travels around Sindh. Photography helps me appreciate the beauty in ordinary moments.",
      icon: "📷",
    },
    {
      title: "Fitness & Wellness",
      description:
        "Committed to maintaining physical fitness through regular exercise and outdoor activities. Believe in the balance between professional excellence and personal well-being.",
      icon: "💪",
    },
    {
      title: "Reading & Learning",
      description:
        "Avid reader of business management books and industry publications. Continuous learning is my approach to professional and personal growth.",
      icon: "📚",
    },
  ];

  // Counter animation function
  const animateCounter = (target, key) => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounters((prev) => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, duration / steps);
  };

  // Trigger counter animations when about section is visible
  useEffect(() => {
    if (isVisible.about && !hasAnimated.stats) {
      setHasAnimated((prev) => ({ ...prev, stats: true }));
      setTimeout(() => {
        animateCounter(7, "years");
        animateCounter(3, "companies");
        animateCounter(15, "team");
        animateCounter(98, "success");
      }, 300);
    }
  }, [isVisible.about, hasAnimated.stats]);

  // Trigger skill bar animations when skills section is visible
  useEffect(() => {
    if (isVisible.skills && !hasAnimated.skills) {
      setHasAnimated((prev) => ({ ...prev, skills: true }));
    }
  }, [isVisible.skills, hasAnimated.skills]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 min-h-screen overflow-x-hidden">
      {/* Custom Scrollbar Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
          scrollbar-width: thin;
          scrollbar-color: #d4a574 #1e293b;
        }
        
        *::-webkit-scrollbar {
          width: 10px;
        }
        
        *::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 10px;
        }
        
        *::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #d4a574 0%, #b8925f 100%);
          border-radius: 10px;
          border: 2px solid #1e293b;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #e6b887 0%, #d4a574 100%);
        }

        .font-display {
          font-family: 'Playfair Display', serif;
        }

        .font-body {
          font-family: 'Poppins', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(135deg, #d4a574 0%, #f4e4c1 50%, #d4a574 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
          background-size: 200% auto;
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .slide-enter {
          animation: slideEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideEnter {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .glow-effect {
          box-shadow: 0 0 40px rgba(212, 165, 116, 0.3);
          transition: box-shadow 0.3s ease;
        }

        .glow-effect:hover {
          box-shadow: 0 0 60px rgba(212, 165, 116, 0.5);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-hover:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .parallax {
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }

        .glass-effect {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(212, 165, 116, 0.1);
        }

        .hero-pattern {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(212, 165, 116, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
        }

        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4a574, transparent);
        }

        .image-zoom {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .image-zoom:hover {
          transform: scale(1.05);
        }

        .gallery-thumbnail {
          position: relative;
          overflow: hidden;
        }

        .gallery-thumbnail::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(212, 165, 116, 0.2));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-thumbnail:hover::before {
          opacity: 1;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fillBar {
          from {
            width: 0%;
          }
        }

        .skill-bar-fill {
          animation: fillBar 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect font-body">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-display font-bold gradient-text">
              <img
                src="/AL.png"
                alt="AL Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Gallery",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-amber-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-[slideEnter_0.3s_ease-out]">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Gallery",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-slate-300 hover:text-amber-400 transition-colors duration-300 py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative hero-pattern pt-20"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-enter">
              <div className="inline-block px-4 py-2 glass-effect rounded-full text-amber-400 text-sm font-medium mb-4">
                Welcome to my portfolio
              </div>
              <h1 className="text-6xl md:text-7xl font-display font-bold leading-tight">
                <span className="text-slate-100">I'm</span>
                <br />
                <span className="gradient-text">Ahtisham Lodhi</span>
              </h1>
              <p className="text-2xl md:text-3xl text-amber-400 font-light font-display">
                Assistant Supervisor
              </p>
              <p className="text-lg text-slate-400 max-w-xl font-body leading-relaxed">
                Driving operational excellence in pharmaceutical manufacturing
                with expertise in quality assurance, team leadership, and
                process optimization. Passionate about innovation and continuous
                improvement.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 glow-effect"
                >
                  Get In Touch <ArrowRight size={20} />
                </a>
                <a
                  href="#gallery"
                  className="px-8 py-4 glass-effect text-slate-100 rounded-full font-semibold hover:bg-slate-800/50 transition-all duration-300"
                >
                  View Gallery
                </a>
              </div>
            </div>

            <div className="relative float-animation">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden glass-effect glow-effect">
                  <img
                    src="/a10.jpeg"
                    alt="Ahtisham Lodhi Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-amber-400/30 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-blue-400/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-animate
        className={`py-24 relative ${isVisible.about ? "slide-enter" : "opacity-0"}`}
      >
        <div className="section-divider mb-20"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
              About Me
            </h2>
            <p className="text-slate-400 text-lg font-body">
              Passionate Professional | Quality Advocate | Team Leader
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 font-body">
              <p className="text-lg text-slate-300 leading-relaxed">
                With a robust background in pharmaceutical operations and a
                proven track record of leadership excellence, I bring a unique
                blend of technical expertise and strategic thinking to every
                challenge. My journey through various roles has equipped me with
                comprehensive insights into quality management, operational
                efficiency, and team development.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently serving as Assistant Supervisor at Getz Pharma, I lead
                initiatives that bridge the gap between operational requirements
                and strategic goals. My approach combines meticulous attention
                to detail with a big-picture vision, ensuring both immediate
                objectives and long-term organizational success.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Beyond my professional endeavors, I'm deeply committed to
                continuous learning and personal growth. From the cricket field
                where I learned teamwork and resilience, to exploring new
                technologies that shape our future, every experience enriches my
                perspective and enhances my ability to lead and innovate.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Based in the vibrant city of Hyderabad, Sindh, I'm passionate
                about contributing to Pakistan's pharmaceutical industry growth
                while mentoring the next generation of professionals. I believe
                in creating value not just through what we do, but how we do it
                – with integrity, excellence, and unwavering commitment to
                quality.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="glass-effect p-6 rounded-2xl card-hover">
                  <div className="text-4xl font-bold gradient-text">
                    {counters.years}+
                  </div>
                  <div className="text-slate-400 mt-2">Years Experience</div>
                </div>
                <div className="glass-effect p-6 rounded-2xl card-hover">
                  <div className="text-4xl font-bold gradient-text">
                    {counters.companies}
                  </div>
                  <div className="text-slate-400 mt-2">Major Companies</div>
                </div>
                <div className="glass-effect p-6 rounded-2xl card-hover">
                  <div className="text-4xl font-bold gradient-text">
                    {counters.team}+
                  </div>
                  <div className="text-slate-400 mt-2">Team Members Led</div>
                </div>
                <div className="glass-effect p-6 rounded-2xl card-hover">
                  <div className="text-4xl font-bold gradient-text">
                    {counters.success}%
                  </div>
                  <div className="text-slate-400 mt-2">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect p-6 rounded-2xl card-hover">
                  <MapPin className="text-amber-400 mb-3" size={32} />
                  <h3 className="font-semibold text-lg mb-2 font-display">
                    Location
                  </h3>
                  <p className="text-slate-400 font-body">
                    Hyderabad, Sindh
                    <br />
                    Pakistan
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-2xl card-hover">
                  <Mail className="text-amber-400 mb-3" size={32} />
                  <h3 className="font-semibold text-lg mb-2 font-display">
                    Email
                  </h3>
                  <p className="text-slate-400 text-sm font-body break-all">
                    ahtisham03479@gmail.com
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-2xl card-hover">
                  <Phone className="text-amber-400 mb-3" size={32} />
                  <h3 className="font-semibold text-lg mb-2 font-display">
                    Phone
                  </h3>
                  <p className="text-slate-400 font-body">+92 310 2323552</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl card-hover">
                  <Briefcase className="text-amber-400 mb-3" size={32} />
                  <h3 className="font-semibold text-lg mb-2 font-display">
                    Current Role
                  </h3>
                  <p className="text-slate-400 font-body">
                    Assistant Supervisor
                    <br />
                    Getz Pharma
                  </p>
                </div>
              </div>

              <div className="mt-8 glass-effect p-8 rounded-2xl card-hover">
                <h3 className="text-2xl font-display font-semibold gradient-text mb-4">
                  Core Values
                </h3>
                <div className="space-y-3 font-body">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-slate-300">
                      Integrity in every action
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-slate-300">
                      Excellence as standard
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-slate-300">
                      Innovation through learning
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-slate-300">
                      Teamwork over individualism
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        data-animate
        className={`py-24 bg-slate-900/50 ${isVisible.experience ? "slide-enter" : "opacity-0"}`}
      >
        <div className="section-divider mb-20"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
              Experience Journey
            </h2>
            <p className="text-slate-400 text-lg font-body">
              Building excellence through diverse experiences
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 md:p-10 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="text-amber-400" size={24} />
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-100">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-slate-400 font-body">
                      <span className="text-lg text-amber-400 font-semibold">
                        {exp.company}
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6 font-body text-lg">
                  {exp.description}
                </p>

                <div className="border-t border-slate-700 pt-6">
                  <h4 className="text-lg font-display font-semibold text-amber-400 mb-4">
                    Key Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Award
                          className="text-amber-400 flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span className="text-slate-300 font-body">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        data-animate
        className={`py-24 ${isVisible.skills ? "slide-enter" : "opacity-0"}`}
      >
        <div className="section-divider mb-20"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
              Skills & Expertise
            </h2>
            <p className="text-slate-400 text-lg font-body">
              Comprehensive skill set for operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Code className="text-amber-400" size={28} />
                  <h3 className="text-2xl font-display font-bold text-slate-100">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <div className="w-full">
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-300 font-body">
                            {skill}
                          </span>
                          <span className="text-amber-400 text-sm font-semibold">
                            {90 - idx * 5}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full ${
                              hasAnimated.skills ? "skill-bar-fill" : "w-0"
                            }`}
                            style={{
                              width: hasAnimated.skills
                                ? `${90 - idx * 5}%`
                                : "0%",
                              animationDelay: `${idx * 0.1}s`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Slider */}
      <section
        id="gallery"
        data-animate
        className={`py-24 bg-slate-900/50 ${isVisible.gallery ? "slide-enter" : "opacity-0"}`}
      >
        <div className="section-divider mb-20"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
              Gallery
            </h2>
            <p className="text-slate-400 text-lg font-body">
              Capturing moments of my professional journey
            </p>
          </div>

          <div className="relative">
            {/* Main Gallery Slider */}
            <div className="relative overflow-hidden rounded-3xl glow-effect bg-slate-950">
              <div className="relative h-[500px] md:h-[700px]">
                {galleryImages.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  >
                    <div className="relative w-full h-full flex items-center justify-center bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="max-w-full max-h-full object-contain"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60 pointer-events-none"></div>

                      {/* Image Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="max-w-4xl mx-auto text-center">
                          <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full text-amber-400 text-sm md:text-base font-medium mb-6">
                            <MapPin size={18} />
                            {item.location}
                          </div>
                          <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
                            {item.caption}
                          </h3>
                          <div className="flex items-center justify-center gap-4 text-slate-300 text-sm md:text-base">
                            <span>Image {currentSlide + 1}</span>
                            <span>•</span>
                            <span>{galleryImages.length} Photos</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 glass-effect rounded-full flex items-center justify-center hover:bg-amber-500/30 transition-all duration-300 group z-10"
                aria-label="Previous image"
              >
                <ChevronLeft
                  className="text-amber-400 group-hover:scale-125 transition-transform"
                  size={32}
                />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 glass-effect rounded-full flex items-center justify-center hover:bg-amber-500/30 transition-all duration-300 group z-10"
                aria-label="Next image"
              >
                <ChevronRight
                  className="text-amber-400 group-hover:scale-125 transition-transform"
                  size={32}
                />
              </button>

              {/* Slider Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-12 bg-amber-400"
                        : "w-2 bg-slate-500 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mt-8">
              {galleryImages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative rounded-xl overflow-hidden aspect-square group transition-all duration-300 ${
                    index === currentSlide
                      ? "ring-4 ring-amber-400 scale-105 z-10"
                      : "hover:scale-105 hover:z-10"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-amber-400/30"
                        : "bg-slate-950/60 group-hover:bg-slate-950/40"
                    }`}
                  ></div>

                  {/* Thumbnail Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`font-body font-bold transition-all duration-300 ${
                        index === currentSlide
                          ? "text-white text-lg"
                          : "text-slate-400 text-sm group-hover:text-white"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Gallery Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="glass-effect p-6 rounded-2xl text-center card-hover">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {galleryImages.length}
                </div>
                <div className="text-slate-400 text-sm font-body">
                  Total Photos
                </div>
              </div>
              <div className="glass-effect p-6 rounded-2xl text-center card-hover">
                <div className="text-4xl font-bold gradient-text mb-2">HD</div>
                <div className="text-slate-400 text-sm font-body">Quality</div>
              </div>
              <div className="glass-effect p-6 rounded-2xl text-center card-hover">
                <div className="text-4xl font-bold gradient-text mb-2">
                  Auto
                </div>
                <div className="text-slate-400 text-sm font-body">
                  Slideshow
                </div>
              </div>
              <div className="glass-effect p-6 rounded-2xl text-center card-hover">
                <div className="text-4xl font-bold gradient-text mb-2">Pro</div>
                <div className="text-slate-400 text-sm font-body">
                  Collection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section
        id="interests"
        data-animate
        className={`py-24 ${isVisible.interests ? "slide-enter" : "opacity-0"}`}
      >
        <div className="section-divider mb-20"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
              Hobbies & Interests
            </h2>
            <p className="text-slate-400 text-lg font-body">
              Beyond work - what drives my passion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-slate-100 mb-3 flex items-center gap-2">
                  {hobby.title}
                  <Heart
                    className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    size={18}
                  />
                </h3>
                <p className="text-slate-400 font-body leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-animate
        className={`py-24 bg-slate-900/50 ${isVisible.contact ? "slide-enter" : "opacity-0"}`}
      >
        <div className="section-divider mb-20"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
              Let's Connect
            </h2>
            <p className="text-slate-400 text-lg font-body">
              I'd love to hear from you
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:ahtisham03479@gmail.com"
                className="glass-effect p-8 rounded-2xl card-hover text-center group"
              >
                <Mail
                  className="text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <h3 className="font-display font-semibold text-lg mb-2">
                  Email
                </h3>
                <p className="text-slate-400 font-body text-sm break-all">
                  ahtisham03479@gmail.com
                </p>
              </a>
              <a
                href="tel:+923102323552"
                className="glass-effect p-8 rounded-2xl card-hover text-center group"
              >
                <Phone
                  className="text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <h3 className="font-display font-semibold text-lg mb-2">
                  Phone
                </h3>
                <p className="text-slate-400 font-body">+92 310 2323552</p>
              </a>
              <div className="glass-effect p-8 rounded-2xl card-hover text-center group">
                <MapPin
                  className="text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <h3 className="font-display font-semibold text-lg mb-2">
                  Location
                </h3>
                <p className="text-slate-400 font-body">
                  Hyderabad, Sindh
                  <br />
                  Pakistan
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="glass-effect p-12 rounded-2xl text-center">
              <h3 className="text-2xl font-display font-bold gradient-text mb-8">
                Follow Me On
              </h3>
              <div className="flex justify-center gap-6 flex-wrap">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 glass-effect rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-all duration-300 group glow-effect"
                >
                  <Linkedin
                    className="text-amber-400 group-hover:scale-110 transition-transform"
                    size={28}
                  />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 glass-effect rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-all duration-300 group glow-effect"
                >
                  <Github
                    className="text-amber-400 group-hover:scale-110 transition-transform"
                    size={28}
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 glass-effect rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-all duration-300 group glow-effect"
                >
                  <Twitter
                    className="text-amber-400 group-hover:scale-110 transition-transform"
                    size={28}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 glass-effect rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-all duration-300 group glow-effect"
                >
                  <Instagram
                    className="text-amber-400 group-hover:scale-110 transition-transform"
                    size={28}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-display font-bold gradient-text mb-4">
              Ahtisham Lodhi
            </div>
            <p className="text-slate-400 font-body mb-6">
              Assistant Supervisor | Pharmaceutical Excellence | Team Leadership
            </p>
            <p className="text-slate-500 text-sm font-body">
              © {new Date().getFullYear()} Ahtisham Lodhi. All rights reserved.
            </p>

            <p className="text-slate-600 text-xs font-body mt-2">
              Crafted with passion in Hyderabad, Pakistan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
