"use client";
import { useEffect, useState } from "react";
import AboutSection from "@/components/about/AboutSection";
import Loader from "@/components/Loader";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/project/ProjectSection";
import CareerSection from "@/components/career/CareerSection";
import EducationSection from "@/components/education/EducationSection";
import NavMenu from "@/components/common/NavMenu";
import Footer from "@/components/common/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 1000); }, []);
  if (loading) return <Loader />;

  return (
    <>
      <NavMenu />
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CareerSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}
