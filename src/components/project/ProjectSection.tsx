import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import axios from "axios";
import { staticProjects } from "@/data/project";
import styles from "./ProjectsSection.module.css";
import { useTranslation } from "react-i18next";

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
    Rust: "skill-icons:rust",
    "Semantic Release": "simple-icons:semanticrelease",
    Go: "logos:go",
    C: "logos:c",
    "C#": "devicon:csharp",
    TypeScript: "logos:typescript-icon",
    Gitlab: "logos:gitlab",
    PowerShell: "simple-icons:powershell",
    Powershell: "simple-icons:powershell",
    Groovy: "simple-icons:apachegroovy",
};

const ProjectsSection = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const { t } = useTranslation();
    const githubUsername = "Dokuqui";
    const desiredRepos = [
        "LanguageRevamp",
        "Find-Movie-APP_Django",
        "Semantic-release_Force-version-plugin",
        "Job_Detection",
        "Hooly_Back-end",
        "TubeLoader",
        "Finet",
        "AutoDS",
        "GAC-Bot",
        "DevStation"
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
        <section id="projects" className={styles.projectsSection}>
            <h2 className={styles.heading}>{t("projects.heading")}</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        className={styles.projectCard}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08, type: "spring" }}
                        tabIndex={0}
                    >
                        <div className={styles.projectName}>{project.name}</div>
                        <div className={styles.projectDesc}>{project.description}</div>
                        <div className={styles.techRow}>
                            {project.language.map((t, i) => (
                                <span key={i} title={t}>
                                    <Icon
                                        icon={techIcons[t] || "mdi:code"}
                                        width={22}
                                        height={22}
                                    />
                                </span>
                            ))}
                        </div>
                        {(project.stargazers_count! > 0 || project.forks_count! > 0) && (
                            <div className={styles.projectMeta}>
                                {project.stargazers_count! > 0 && <span>★ {project.stargazers_count}</span>}
                                {project.forks_count! > 0 && <span>⑂ {project.forks_count}</span>}
                            </div>
                        )}
                        <div className={styles.projectLinks}>
                            {project.homepage && (
                                <a href={project.homepage} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                    Project URL
                                </a>
                            )}
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                GitHub
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;