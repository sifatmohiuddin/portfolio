import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
// import { useState } from "react";
// import { Navbar } from "../components/Navbar";
// import { ThemeToggle } from "../components/ThemeToggle";
// import { StarBackground } from "@/components/StarBackground";
// import { HeroSection } from "../components/HeroSection";
// import { AboutSection } from "../components/AboutSection";
// import { SkillsSection } from "../components/SkillsSection";
// import { ProjectsSection } from "../components/ProjectsSection";
// import { ContactSection } from "../components/ContactSection";
// import { Footer } from "../components/Footer";

// export const Home = () => {
//   const [hasStarted, setHasStarted] = useState(false);
//   const [showContent, setShowContent] = useState(false);

//   const handleStart = () => {
//     setHasStarted(true);
//     setTimeout(() => {
//       setShowContent(true);
//     }, 3000); // Show main content after 7 seconds
//   };

//   return (
//     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
//       {!showContent ? (
//         <div className="fixed inset-0 z-50 w-full h-full bg-gradient-to-r from-gray-900 via-neutral-800 to-zinc-900 flex items-center justify-center">
//           {!hasStarted ? (
//             <button
//               onClick={handleStart}
//               className="text-white border border-white px-6 py-3 text-4xl font-bold rounded-lg hover:bg-white hover:text-black transition"
//             >
//               ▶ Hello Im Sifat, press here to see my profile
//             </button>
//           ) : (
//             <video
//               src="/intro.mp4"
//               autoPlay
//               playsInline
//               className="fixed inset-0 w-full h-full object-cover z-50"
//             />

//           )}
//         </div>
//       ) : (
//         <>
//           <ThemeToggle />
//           <StarBackground />
//           <Navbar />
//           <main>
//             <HeroSection />
//             <AboutSection />
//             <SkillsSection />
//             <ProjectsSection />
//             <ContactSection />
//           </main>
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// };


// import { Navbar } from "../components/Navbar";
// import { ThemeToggle } from "../components/ThemeToggle";
// import { StarBackground } from "@/components/StarBackground";
// import { HeroSection } from "../components/HeroSection";
// import { AboutSection } from "../components/AboutSection";
// import { SkillsSection } from "../components/SkillsSection";
// import { ProjectsSection } from "../components/ProjectsSection";
// import { ContactSection } from "../components/ContactSection";
// import { Footer } from "../components/Footer";

// export const Home = () => {
//   return (
//     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
//       {/* Theme Toggle */}
//       <ThemeToggle />
//       {/* Background Effects */}
//       <StarBackground />
//       {/* Navbar */}
//       <Navbar />
//       {/* Main Content */}
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <SkillsSection />
//         <ProjectsSection />
//         <ContactSection />
//       </main>
//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };
