import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { skills } from "@/data/skills";

const SkillsSection = () => {
    return (
        <motion.section
            id="skills"
            className="py-12 relative overflow-hidden bg-darkBg/95"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 crt-effect scanline" />
            <h2 className="text-4xl font-pixel text-neonGreen mb-8 relative z-10 tracking-widest uppercase shadow-[0_0_10px_#33ff00] text-center">
                {"> SKILLSET_"}
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-5xl mx-auto relative z-10 px-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="group flex flex-col items-center justify-center bg-darkBg rounded-sm hover:bg-neonGreen/10 transition-all duration-300 shadow-[inset_0_0_5px_rgba(51,255,0,0.3)] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwAADDAAFU8zA8x8dXAAAAAElFTkSuQmCC')] bg-repeat bg-[linear-gradient(rgba(0,128,0,0.1)_1px,transparent_1px)] bg-[size:100%_4px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{
                            scale: 1.05,
                            x: [0, -2, 2, -2, 0],
                            y: [0, 2, -2, 0, 0],
                            transition: { duration: 0.3, times: [0, 0.2, 0.4, 0.6, 1], repeat: 1 }
                        }}
                    >
                        <motion.div
                            className="flex flex-col items-center justify-center p-4 transition-all duration-300"
                            whileHover={{ opacity: 0 }}
                        >
                            <Icon
                                icon={skill.icon}
                                width={48}
                                height={48}
                                className="mb-2 transition-all duration-300"
                                style={{ filter: "drop-shadow(0 0 5px #33ff00)" }}
                            />
                            <span className="font-mono text-gray-300 text-sm md:text-base group-hover:text-neonGreen transition-colors text-center">
                                {skill.name}
                            </span>
                        </motion.div>

                        <motion.div
                            className="absolute inset-0 flex items-center justify-center bg-darkBg/90 rounded-sm font-mono text-neonGreen text-sm opacity-0 group-hover:opacity-100 group-hover:animate-[crt-flicker_0.1s_infinite_step-end] transition-opacity duration-200 pointer-events-none"
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="p-2 border border-neonGreen/50 border-dashed rounded-sm bg-darkBg shadow-[0_0_8px_#33ff00] tracking-wide uppercase">
                                {skill.code}
                            </span>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default SkillsSection;