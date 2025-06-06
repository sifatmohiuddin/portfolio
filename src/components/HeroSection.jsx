import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
  <span className="opacity-0 animate-fade-in">Hi, I'm</span>

  {/* Mobile view: Sifat and Mohiuddin on one line */}
  <span className="md:hidden opacity-0 animate-fade-in-delay-1">
    <span className="text-primary"> Sifat&nbsp;</span>
    <span className="text-white">Mohiuddin</span>
  </span>

  {/* Desktop view: Sifat and Mohiuddin separate */}
  <span className="hidden md:inline text-primary opacity-0 animate-fade-in-delay-1">
    {" "}
    Sifat
  </span>
  <span className="hidden md:inline text-white ml-2 opacity-0 animate-fade-in-delay-2">
    {" "}
    Mohiuddin
  </span>
</h1>


          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I craft dynamic web applications using Laravel and modern PHP frameworks.
As a junior Laravel developer, I specialize in building robust backends and clean, efficient code structures that power seamless user experiences.
From RESTful APIs to database design, I bring ideas to life with functionality and scalability in mind.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
