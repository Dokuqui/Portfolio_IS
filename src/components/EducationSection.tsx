import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { education } from "@/data/education";

const techIcons: { [key: string]: string } = {
    MongoDB: "logos:mongodb-icon",
    Docker: "logos:docker-icon",
    Postman: "logos:postman-icon",
    GitHub: "logos:github",
    Gitlab: "logos:gitlab",
    Git: "logos:git-icon",
    Go: "logos:go",
    Java: "logos:java",
    Spring: "logos:spring-icon",
    YAML: "simple-icons:yaml",
    TypeScript: "logos:typescript-icon",
    Angular: "logos:angular-icon",
    Hibernate: "simple-icons:hibernate",
    "CI/CD": "mdi:pipeline",
    "Spring Boot": "logos:spring-icon",
    "C#": "logos:c-sharp",
    Unity: "logos:unity",
    Figma: "logos:figma",
    MySQL: "logos:mysql",
    JavaScript: "logos:javascript",
    CSS: "logos:css-3",
    "Node.js": "logos:nodejs-icon",
    Linux: "logos:linux",
    React: "logos:react",
    Flutter: "logos:flutter",
    Django: "logos:django-icon",
    "React Native": "logos:react",
    Python: "logos:python",
    "C++": "logos:c-plusplus",
    Électronique: "mdi:circuit",
    "Systèmes embarqués": "mdi:chip",
};

const splitCompetences = (competences: string[]) => {
    const tech = competences.filter((c) => techIcons[c]);
    const skills = competences.filter((c) => !techIcons[c]);
    return { tech, skills };
};

const EducationSection = () => {
    return (
        <motion.section
            id="education"
            className="py-16 relative overflow-hidden bg-darkBg/95"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 crt-effect scanline" />
            <h2 className="text-4xl font-pixel text-neonGreen mb-12 relative z-10 tracking-widest uppercase shadow-[0_0_10px_#33ff00] text-center">
                {"> EDUCATION_"}
            </h2>
            <div className="max-w-4xl mx-auto relative z-10 px-4">
                <div className="relative flex flex-col items-center">

                    {education.map((edu, index) => {
                        const { tech, skills } = splitCompetences(edu.competences);
                        return (
                            <div key={index} className="relative w-full flex justify-center mb-20">
                                <motion.div
                                    className={`absolute top-8 w-1/4 h-px bg-neonGreen/50 ${index % 2 === 0 ? "left-1/2 translate-x-2" : "right-1/2 -translate-x-2"}`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "25%" }}
                                    transition={{ duration: 0.8, delay: index * 0.3 }}
                                />
                                <motion.div
                                    className="absolute top-8 w-5 h-5 bg-neonGreen rounded-full shadow-[0_0_10px_#33ff00] z-10"
                                    style={{ left: "50%", transform: "translateX(-50%)" }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1, rotate: 360 }}
                                    transition={{ duration: 0.5, delay: index * 0.3 }}
                                    whileHover={{ scale: 1.5, transition: { duration: 0.3 } }}
                                />
                                <motion.div
                                    className={`w-1/2 p-4 bg-darkBg/90 rounded-xl border-2 border-neonGreen/40 shadow-neonGlow hover:bg-neonGreen/10 transition-all duration-300 group relative ${index % 2 === 0 ? "ml-[calc(25%+2rem)]" : "mr-[calc(25%+2rem)]"}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.3, type: "spring" }}
                                    whileHover={{ x: index % 2 === 0 ? 5 : -5, transition: { duration: 0.3 } }}
                                >
                                    <div className="absolute inset-0 crt-effect pointer-events-none" />
                                    <h3 className="font-pixel text-neonGreen text-lg uppercase tracking-wider shadow-[0_0_8px_#33ff00] text-center mb-2">
                                        {edu.degree}
                                    </h3>
                                    <p className="font-mono text-gray-200 text-sm text-center mb-2">
                                        {edu.institution} {edu.title && <span className="text-neonBlue">[{edu.title}]</span>}
                                    </p>
                                    {edu.niveau && (
                                        <p className="font-mono text-gray-300 text-xs text-center mb-2">Niveau: {edu.niveau}</p>
                                    )}
                                    <p className="font-mono text-neonGreen text-sm text-center mb-2 shadow-[0_0_4px_#33ff00]">
                                        {edu.period}
                                    </p>
                                    {tech.length > 0 && (
                                        <div className="flex flex-wrap justify-center gap-3 mt-3">
                                            {tech.map((t, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                                >
                                                    <Icon icon={techIcons[t]} width={24} height={24} className="text-neonGreen drop-shadow-[0_0_4px_#33ff00]" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                    {skills.length > 0 && (
                                        <p className="font-mono text-gray-400 text-[10px] mt-3 text-center italic leading-tight">
                                            {skills.join(", ")}
                                        </p>
                                    )}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default EducationSection;