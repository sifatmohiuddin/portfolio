import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
   {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A Fast responsive E-commerce platform featuring a clean and responsive frontend. Seamless checkout with SSLCommerz payment gateway and OTP verification for enhanced security. Includes a powerful admin dashboard for managing products, orders, user data, and delivery information and wishlist",
    image: "/projects/project-shop.png",
    tags: ["PHP", "Bootstrap", "SQL", "html", "CSS", "JavaScript" ],
    demoUrl: "https://fashion.fwh.is/",
    githubUrl: "https://github.com/sifatmohiuddin/The-Fashion-Hub",
  },

    {
    id: 2,
    title: "Gym-Management",
    description:
      "A Beautiful responsive Gym Management website, Includes sortable member listings, membership day tracking, admission forms, edit/update options, and one-click membership extension. Allows assigning personalized diet and workout plans to members and downloading them as PDFs using DomPDF in Laravel. ",
    image: "/projects/project-rev.png",
    tags: ["Laravel", "TailwindCSS", "SQL", "Node.js", "Alpine.js", "Javascript"],
    demoUrl: "https://rev-1.fwh.is",
    githubUrl: "https://github.com/sifatmohiuddin/Rev-1",
  },


  {
    id: 3,
    title: "Book Review",
    description: "A Simple Book Review website featuring a clean, responsive interface. Enables users to browse and filter book reviews by popularity, recency, or category, with secure actions gated by middleware authentication. Utilizes Laravel's rate limiter to prevent spamming, and implements caching for faster performance",
    image: "/projects/project-book.png",
    tags: ["Laravel", "TailwindCSS", "SQL", "Blade"],
    demoUrl: "https://book-review.fwh.is/",
    githubUrl: "https://github.com/sifatmohiuddin/book-review",
  },
  {
    id: 4,
    title: "Job Portal",
    description:
      "A minimalist designed Job Portal. Secure login with token-based authentication policies and scalable architecture for future upgrades. Employers can post jobs; users can find jobs, log in, upload/download CVs smooth experience. Searching through job type and level through filter options",
    image: "/projects/project-job.png",
    tags: ["Laravel", "TailwindCSS", "SQL", "Blade", "Alpine.js"],
    demoUrl: "https://job.fwh.is/",
    githubUrl: "https://github.com/sifatmohiuddin/job-portal",
  },

  {
    id: 5,
    title: "Real Estate Platform",
    description:
      "A beautifully crafted real estate platform .Offers role-based access for Guests, Buyers, and Sellers using Laravel Policies, Gates, and Sanctum.Features an EMI calculator, image uploads, soft deletes with restore, and real-time Notifications via Laravel. Enhanced with custom middleware and caching.",
    image: "/projects/project-abash.png",
    tags: ["Laravel", "Vue.js", "TailwindCSS", "SQL", "Node.js", "Alpine.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/sifatmohiuddin/Abash",
  },

  {
    id: 6,
    title: "Livewire Poll",
    description:
      "Built with JavaScript, PHP, SQL, and Bootstrap, featuring a clean and responsive frontend. Seamless checkout with SSLCommerz payment gateway and OTP verification for enhanced security. Includes a powerful admin dashboard for managing products, orders, user data, and delivery information and wishlist",
    image: "/projects/project-livewire.png",
    tags: ["Laravel", "Livewire", "Blade", "TailwindCSS"],
    demoUrl: "https://livewere.fwh.is/",
    githubUrl: "https://github.com/sifatmohiuddin/livewire-poll",
  },

  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-70 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-130"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center w-full">
  <a
    href={project.demoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="cosmic-button flex items-center space-x-2 text-foreground/80 hover:text-white hover:bg-black transition-colors duration-300"
  >
    <span>Live </span>
    <ExternalLink size={20} />
  </a>

  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="cosmic-button flex items-center space-x-2 text-foreground/80 hover:text-white hover:bg-black transition-colors duration-300"
  >
    <span>Git</span>
    <Github size={20} />
  </a>
</div>


                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sifatmohiuddin"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
