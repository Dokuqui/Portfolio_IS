import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { skills } from "@/data/skills";

const SkillsSection = () => {
    return (
        <motion.section
            id="skills"
            className="py-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 crt-effect scanline" />
            <h2 className="text-4xl font-pixel text-neonGreen mb-6 relative z-10 tracking-wide uppercase shadow-[0_0_10px_#39ff14]">
        > SKILLSET_
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-5xl mx-auto relative z-10">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        className="group relative flex flex-col items-center p-3 bg-darkBg/80 rounded-lg border border-neonGreen/30 hover:border-neonGreen hover:shadow-neonGlow transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Icon
                            icon={skill.icon}
                            width={48}
                            height={48}
                            className="mb-2"
                            style={{ filter: "drop-shadow(0 0 5px #39ff14)" }}
                        />
                        <span className="font-mono text-gray-300 text-sm md:text-base group-hover:text-neonGreen transition-colors text-center">
                            {skill.name}
                        </span>
                        <motion.div
                            className="absolute -top-14 left-1/2 -translate-x-1/2 bg-darkBg/90 border border-neonGreen p-2 rounded-md shadow-neonGlow font-mono text-neonGreen text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span>{skill.code}</span>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default SkillsSection;