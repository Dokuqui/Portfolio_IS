"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Cpu, Atom, Code2, User, GraduationCap, Joystick } from "lucide-react";

const menuItems = [
    { id: "about", label: "PROFILE", icon: <User size={24} /> },
    { id: "skills", label: "SKILLSET", icon: <Cpu size={24} /> },
    { id: "experience", label: "CAREER", icon: <Atom size={24} /> },
    { id: "education", label: "EDUCATION", icon: <GraduationCap size={24} /> },
    { id: "projects", label: "PROJECTS", icon: <Code2 size={24} /> },
];

const FloatingMenu = () => {
    const [activeSection, setActiveSection] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    const handleSetActive = (sectionId: string) => {
        setActiveSection(sectionId);
    };

    const handleClick = (sectionId: string) => {
        setActiveSection(sectionId);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            menuItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) {
                    const sectionTop = section.offsetTop - 100;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(item.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className="fixed top-1/2 right-8 -translate-y-1/2 z-50 group font-mono"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="relative bg-darkBg/90 backdrop-blur-md p-6 rounded-xl border-2 border-neonGreen shadow-neonGlow">
                <div className="absolute inset-0 rounded-xl border border-neonGreen/40 pointer-events-none crt-effect" />

                {menuItems.map((item) => (
                    <ScrollLink
                        key={item.id}
                        to={item.id}
                        smooth={true}
                        duration={600}
                        spy={true}
                        offset={-120}
                        spyThrottle={100}
                        onSetActive={() => handleSetActive(item.id)}
                        onClick={() => handleClick(item.id)}
                        className={`flex items-center gap-4 p-4 mx-2 my-1 rounded-lg transition-all cursor-pointer
                            ${activeSection === item.id
                                ? "bg-neonGreen/20 shadow-[0_0_8px_#39ff14]"
                                : "hover:bg-neonGreen/10 hover:shadow-[0_0_5px_#39ff14]"
                            }`}
                    >
                        <motion.div
                            animate={{
                                color: activeSection === item.id ? "#39ff14" : "#4A5568",
                                scale: activeSection === item.id ? 1.2 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {item.icon}
                        </motion.div>
                        <motion.span
                            className="text-base font-medium tracking-wider"
                            animate={{
                                color: activeSection === item.id ? "#39ff14" : "#4A5568",
                                opacity: isHovered ? 1 : 0,
                                x: isHovered ? 0 : 15,
                                display: isHovered ? "inline-block" : "none",
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {item.label}
                        </motion.span>
                    </ScrollLink>
                ))}
            </div>
        </motion.nav>
    );
};

export default FloatingMenu;