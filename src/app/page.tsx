"use client";
import { useState } from "react";
import TerminalIntro from "@/components/TerminalIntro";
import FloatingMenu from "@/components/FloatingMenu";

export default function Home() {
  const [terminalExited, setTerminalExited] = useState(false);

  return (
    <main>
      {!terminalExited && <TerminalIntro onTerminalExit={() => setTerminalExited(true)} />}
      {terminalExited && <FloatingMenu />}
      {/* Sections */}
      <div id="main-content" className="pt-20">
        {/* Sections will be added here */}
      </div>
    </main>
  );
}