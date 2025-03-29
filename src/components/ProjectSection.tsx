import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import axios from "axios";
import { staticProjects } from "@/data/project";

export interface Project {
    name: string;
    description: string;
    language: string[];
    html_url: string;
    homepage?: string;
    stargazers_count?: number;
    forks_count?: number;
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
                    .filter((repo: Project) => desiredRepos.includes(repo.name))
                    .map((repo: Project) => ({
                        name: repo.name.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()),
                        description: repo.description || "No description provided.",
                        language: repo.language ? [repo.language] : [],
                        html_url: repo.html_url,
                        homepage: repo.homepage,
                        stargazers_count: repo.stargazers_count,
                        forks_count: repo.forks_count,
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
            <h2 className="text-4xl font-pixel text-neonGreen mb-12 relative z-10 tracking-widest uppercase shadow-[0_0_5px_#33ff00] text-center">
                {"> PROJECTS_"}
            </h2>
            <div className="max-w-5xl mx-auto relative z-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-darkBg/90 border-2 rounded-lg group overflow-hidden flex flex-col"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <div className="p-4 flex flex-col flex-grow relative">
                                <div className="absolute inset-0 crt-effect pointer-events-none z-20" />
                                <h3 className="font-pixel text-neonGreen text-xl uppercase tracking-wider shadow-[0_0_2px_#33ff00] text-center mb-2">
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
                                    {project.language.map((t, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            transition={{ duration: 0.3, delay: i * 0.1 }}
                                        >
                                            <Icon icon={techIcons[t] || "mdi:code"} width={20} height={20} className="text-neonGreen" />
                                        </motion.div>
                                    ))}
                                </div>
                                {(project.stargazers_count! > 0 || project.forks_count! > 0) && (
                                    <div className="flex justify-center gap-4 mt-2">
                                        {project.stargazers_count! > 0 && (
                                            <span className="font-mono text-neonBlue text-xs">★ {project.stargazers_count}</span>
                                        )}
                                        {project.forks_count! > 0 && (
                                            <span className="font-mono text-neonBlue text-xs">⑂ {project.forks_count}</span>
                                        )}
                                    </div>
                                )}
                                {project.homepage && project.homepage !== "" && (
                                    <a
                                        href={project.homepage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-mono text-neonBlue text-sm text-center hover:underline hover:text-neonGreen transition-colors"
                                    >
                                        [Project URL / Homepage]
                                    </a>
                                )}
                                <a
                                    href={project.html_url}
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