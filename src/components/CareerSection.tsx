import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { careerMilestones, abbreviateMonth } from "@/data/career";

const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
        opacity: 1,
        transition: { delay: i * 0.05 },
    }),
};

const techIcons: { [key: string]: string } = {
    "TypeScript": "logos:typescript-icon",
    "Node.js": "logos:nodejs-icon",
    "React": "logos:react",
    "Python": "logos:python",
    "FastAPI": "logos:fastapi",
    "Next.js": "logos:nextjs-icon",
    "PostgreSQL": "logos:postgresql",
    "Knex": "simple-icons:knexjs",
    "Jest": "logos:jest",
    "Azure DevOps": "logos:azure-devops",
    "Cypress": "skill-icons:cypress-light",
    "Golang": "logos:go",
    "Postman": "logos:postman-icon",
    "Cucumber": "logos:cucumber",
    "Docker": "logos:docker-icon",
    "Gitlab CI": "logos:gitlab",
    "Git": "logos:git-icon",
    "Linux": "logos:linux",
    "Express": "simple-icons:express",
    "GraphQL": "logos:graphql",
};

const CareerSection = () => {
    return (
        <motion.section
            id="experience"
            className="py-12 relative overflow-hidden bg-darkBg/95"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 crt-effect scanline" />
            <h2 className="text-4xl font-pixel text-neonGreen mb-8 relative z-10 tracking-widest uppercase shadow-[0_0_3px_#33ff00] text-center">
                {"> CAREER_"}
            </h2>
            <div className="max-w-3xl mx-auto relative z-10 px-4">
                <div className="relative">
                    <motion.div
                        className="absolute left-1/2 top-0 bottom-0 w-px bg-neonGreen/50 border-dashed border-neonGreen"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 w-full h-2 bg-neonGreen/70"
                            animate={{ y: ["0%", "100%"], opacity: [1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>

                    {careerMilestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2, type: "spring", stiffness: 100 }}
                        >
                            <motion.div
                                className="w-5/12 p-4 bg-darkBg/90 rounded-xl border-2 border-neonGreen/40 hover:bg-neonGreen/10 transition-all duration-300 group relative"
                                whileHover={{
                                    x: [0, -2, 2, -2, 0],
                                    y: [0, 2, -2, 0, 0],
                                    transition: { duration: 0.3, repeat: 1 },
                                }}
                            >
                                <div className="absolute inset-0 crt-effect pointer-events-none" />
                                <h3 className="font-pixel text-neonGreen text-xl uppercase tracking-wider shadow-[0_0_3px_#33ff00] text-center mb-2">
                                    {milestone.title.split("").map((char, i) => (
                                        <motion.span key={i} custom={i} initial="hidden" whileInView="visible" variants={typewriterVariants}>
                                            {char}
                                        </motion.span>
                                    ))}
                                </h3>
                                <p className="font-mono text-gray-200 text-sm text-center mb-2">
                                    <span className="text-neonEmerald font-bold">{milestone.company}</span> | <span className="text-neonBlue font-bold">{milestone.contractType}</span>
                                </p>
                                {milestone.description && (
                                    <p className="font-mono text-gray-300 text-xs mt-2 text-center leading-relaxed">
                                        {milestone.description.split("").map((char, i) => (
                                            <motion.span key={i} custom={i} initial="hidden" whileInView="visible" variants={typewriterVariants}>
                                                {char}
                                            </motion.span>
                                        ))}
                                    </p>
                                )}
                                {milestone.technologies && (
                                    <div className="flex flex-wrap justify-center gap-3 mt-3">
                                        {milestone.technologies.map((tech, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                whileHover={{ scale: 1.2, rotate: 10 }}
                                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                            >
                                                <Icon
                                                    icon={techIcons[tech] || "mdi:code"}
                                                    width={24}
                                                    height={24}
                                                    className="text-neonGreen"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                                {milestone.compétences && (
                                    <p className="font-mono text-gray-400 text-[10px] mt-3 text-center italic leading-tight">
                                        {milestone.compétences.join(", ")}
                                    </p>
                                )}
                            </motion.div>
                            <div className="w-2/12 flex justify-center relative">
                                <motion.div
                                    className="w-4 h-4 bg-neonGreen rounded-full shadow-[0_0_10px_#33ff00]"
                                    initial={{ scale: 0, rotate: 0 }}
                                    whileInView={{ scale: 1, rotate: 360 }}
                                    whileHover={{
                                        scale: 1.5,
                                        x: [0, -2, 2, -2, 0],
                                        y: [0, 2, -2, 0, 0],
                                        opacity: [1, 0.8, 1],
                                        transition: { duration: 0.5, repeat: Infinity },
                                    }}
                                    transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
                                />
                            </div>
                            <div className="w-5/12 text-center">
                                <motion.span
                                    className="font-pixel text-neonGreen text-sm tracking-wide"
                                    animate={{ opacity: [1, 0.9, 1] }}
                                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
                                >
                                    {abbreviateMonth(milestone.from)} - {milestone.till === "Now" ? "Present" : abbreviateMonth(milestone.till)}
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default CareerSection;