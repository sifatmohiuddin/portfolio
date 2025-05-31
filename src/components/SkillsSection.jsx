import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Backend
  { name: "PHP", level: 85, category: "backend" },
  { name: "Laravel", level: 90, category: "backend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },

  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Alpine.js", level: 80, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "Vue.js", level: 65, category: "frontend" },
  { name: "Livewire", level: 75, category: "frontend" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Postman", level: 70, category: "tools" },
  { name: "XAMPP", level: 75, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-muted-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-xl shadow-sm transition-transform duration-300 hover:scale-[1.02] animate-fadeIn"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
