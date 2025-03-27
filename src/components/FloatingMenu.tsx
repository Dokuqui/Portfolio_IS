"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Cpu, Atom, Code2, Mail, User, GraduationCap } from "lucide-react";

const menuItems = [
    { id: "about", label: "PROFILE", icon: <User size={18} /> },
    { id: "skills", label: "SKILLSET", icon: <Cpu size={18} /> },
    { id: "experience", label: "CAREER", icon: <Atom size={18} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "projects", label: "WORKS", icon: <Code2 size={18} /> },
    { id: "contact", label: "COMS", icon: <Mail size={18} /> },
];

const FloatingMenu = () => {
    const [activeSection, setActiveSection] = useState("about");
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.nav
            className="fixed top-1/2 right-6 -translate-y-1/2 z-50 group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="relative bg-darkBg/80 backdrop-blur-sm p-2 rounded-xl border-2 border-neonGreen shadow-neonGlow">
                <div className="absolute inset-0 rounded-xl border border-neonGreen/30 pointer-events-none"></div>

                {menuItems.map((item) => (
                    <ScrollLink
                        key={item.id}
                        to={item.id}
                        smooth={true}
                        duration={600}
                        spy={true}
                        onSetActive={(to) => setActiveSection(to)}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer
                            ${activeSection === item.id
                                ? "bg-neonGreen/20 text-neonGreen"
                                : "text-gray-300 hover:bg-neonGreen/10"}
                        `}
                    >
                        <motion.div
                            animate={{
                                color: activeSection === item.id ? "#39ff14" : "#4A5568",
                                scale: activeSection === item.id ? 1.15 : 1
                            }}
                        >
                            {item.icon}
                        </motion.div>
                        <motion.span
                            className="text-sm font-medium tracking-wide"
                            animate={{
                                opacity: isHovered ? 1 : 0,
                                x: isHovered ? 0 : 10,
                                display: isHovered ? "inline-block" : "none"
                            }}
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
