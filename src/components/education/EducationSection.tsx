import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { educationKeys } from "@/data/education";
import styles from "./EducationSection.module.css";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();

    return (
        <section id="education" className={styles.educationSection}>
            <div className={styles.card}>
                <h2 className={styles.heading}>{t("education.heading")}</h2>
                <div className={styles.timeline}>
                    <div className={styles.timelineLine}></div>
                    {educationKeys.map((key, index) => {
                        const competences = t(`education.${key}.competences`, { returnObjects: true }) as string[];
                        const { tech, skills } = splitCompetences(Array.isArray(competences) ? competences : []);
                        return (
                            <motion.div
                                key={index}
                                className={styles.eduRow}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.07 }}
                            >
                                <div className={styles.eduDot}></div>
                                <div className={styles.eduCard} tabIndex={0}>
                                    <div className={styles.eduHeader}>{t(`education.${key}.degree`)}</div>
                                    <div>
                                        <span className={styles.eduInstitution}>{t(`education.${key}.institution`)}</span>
                                        {t(`education.${key}.title`) && <span className={styles.eduTitle}>[{t(`education.${key}.title`)}]</span>}
                                    </div>
                                    {t(`education.${key}.level`, { defaultValue: "" }) && (
                                        <div className={styles.eduLevel}>
                                            {t("education.level")}: {t(`education.${key}.level`)}
                                        </div>
                                    )}
                                    <div className={styles.eduPeriod}>{t(`education.${key}.period`)}</div>
                                    {tech.length > 0 && (
                                        <div className={styles.techRow}>
                                            {tech.map((tname, i) => (
                                                <Icon
                                                    key={i}
                                                    icon={techIcons[tname]}
                                                    width={24}
                                                    height={24}
                                                />
                                            ))}
                                        </div>
                                    )}
                                    {skills.length > 0 && (
                                        <div className={styles.competences}>
                                            {skills.join(", ")}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;