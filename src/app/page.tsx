"use client";
import { useState } from "react";
import TerminalIntro from "@/components/TerminalIntro";
import FloatingMenu from "@/components/FloatingMenu";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSecrion";

export default function Home() {
  const [terminalExited, setTerminalExited] = useState(false);

  return (
    <main className="min-h-screen bg-darkBg text-white">
      {!terminalExited && (
        <TerminalIntro onTerminalExit={() => setTerminalExited(true)} />
      )}
      {terminalExited && (
        <>
          <FloatingMenu />
          <div
            id="main-content"
            className="pt-16 pl-16 pr-24 max-w-4xl mx-auto md:pl-24 md:pr-36 lg:pl-32 lg:pr-40"
          >
            <AboutSection />
            <SkillsSection />
            {/* Other sections will be added later */}
          </div>
        </>
      )}
    </main>
  );
}