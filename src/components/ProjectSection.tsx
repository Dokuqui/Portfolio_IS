import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import axios from "axios";
import { staticProjects } from "@/data/project";

export interface Project {
    name: string;
    description: string;
    tech: string[];
    githubUrl: string;
    stars?: number;
    forks?: number;
}

const techIcons: { [key: string]: string } = {
    "Node.js": "logos:nodejs-icon",
    MongoDB: "logos:mongodb-icon",
    JavaScript: "logos:javascript",
    Docker: "logos:docker-icon",
    Python: "logos:python",
    Django: "logos:django-icon",
    Rust: "logos:rust",
    "Semantic Release": "simple-icons:semanticrelease",
    Go: "logos:go",
    C: "logos:c",
    Gitlab: "logos:gitlab",
};

const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
        opacity: 1,
        transition: { delay: i * 0.05 },
    }),
};

const ProjectsSection = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const githubUsername = "Dokuqui";
    const desiredRepos = [
        "LanguageRevamp",
        "Find-Movie-APP_Django",
        "Semantic-release_Force-version-plugin",
        "Job_Detection",
        "MagicTray",
        "Hooly_Back-end",
    ];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${githubUsername}/repos`, {
                    headers: {
                        Authorization: process.env.NEXT_PUBLIC_GITHUB_TOKEN ? `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}` : undefined,
                    },
                });
                const filteredProjects = response.data
                    .filter((repo: any) => desiredRepos.includes(repo.name))
                    .map((repo: any) => ({
                        name: repo.name.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()),
                        description: repo.description || "No description provided.",
                        tech: repo.language ? [repo.language] : [],
                        githubUrl: repo.html_url,
                        stars: repo.stargazers_count,
                        forks: repo.forks_count,
                    }));
                setProjects(filteredProjects);
            } catch (error) {
                console.error("Error fetching GitHub repos:", error);
                setProjects(staticProjects);
            }
        };
        fetchProjects();
    }, []);

    return (
        <motion.section
            id="projects"
            className="py-16 relative overflow-hidden bg-darkBg/95"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-darkBg/80 to-neonGreen/10" />
            <div className="absolute inset-0 crt-effect scanline" />
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1 h-1 bg-neonGreen/50 rounded-full"
                        initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
                        animate={{ y: ["0%", "100%"], opacity: [0.5, 0] }}
                        transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 2 }}
                    />
                ))}
            </div>
            <h2 className="text-4xl font-pixel text-neonGreen mb-12 relative z-10 tracking-widest uppercase shadow-[0_0_10px_#33ff00] text-center">
                {"> PROJECTS_"}
            </h2>
            <div className="max-w-5xl mx-auto relative z-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-darkBg/90 border-2 border-neonGreen/40 rounded-lg shadow-neonGlow group overflow-hidden flex flex-col"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(51, 255, 0, 0.8)", transition: { duration: 0.3 } }}
                        >
                            <div className="p-4 flex flex-col flex-grow relative">
                                <div className="absolute inset-0 crt-effect pointer-events-none z-20" />
                                <h3 className="font-pixel text-neonGreen text-xl uppercase tracking-wider shadow-[0_0_8px_#33ff00] text-center mb-2">
                                    {project.name.split("").map((char, i) => (
                                        <motion.span key={i} custom={i} initial="hidden" whileInView="visible" variants={typewriterVariants}>
                                            {char}
                                        </motion.span>
                                    ))}
                                </h3>
                                <p className="font-mono text-gray-300 text-xs text-center flex-grow mb-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    {project.tech.map((t, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            transition={{ duration: 0.3, delay: i * 0.1 }}
                                        >
                                            <Icon icon={techIcons[t] || "mdi:code"} width={20} height={20} className="text-neonGreen drop-shadow-[0_0_4px_#33ff00]" />
                                        </motion.div>
                                    ))}
                                </div>
                                {(project.stars! > 0 || project.forks! > 0) && (
                                    <div className="flex justify-center gap-4 mt-2">
                                        {project.stars! > 0 && (
                                            <span className="font-mono text-neonBlue text-xs">★ {project.stars}</span>
                                        )}
                                        {project.forks! > 0 && (
                                            <span className="font-mono text-neonBlue text-xs">⑂ {project.forks}</span>
                                        )}
                                    </div>
                                )}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-neonBlue text-sm text-center mt-4 block hover:underline hover:text-neonGreen transition-colors"
                                >
                                    [GitHub]
                                </a>
                            </div>
                            <motion.div
                                className="absolute inset-0 bg-neonGreen/10 opacity-0 z-10"
                                whileHover={{ opacity: [0, 0.8, 0.2, 0.6, 0], transition: { duration: 0.5, repeat: 1 } }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;