import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { careerMilestones, useAbbreviateMonth } from "@/data/career";
import styles from "./CareerSection.module.css";
import { useTranslation } from "react-i18next";

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
    const { t, i18n } = useTranslation();
    const abbreviateMonth = useAbbreviateMonth();

    return (
        <section id="experience" className={styles.careerSection}>
            <div className={styles.card}>
                <h2 className={styles.heading}>{t("career.heading")}</h2>
                <div className={styles.timeline}>
                    <div className={styles.timelineLine}></div>
                    {careerMilestones.map((milestone, index) => {
                        const milestoneKey = `career.${milestone.key}`;
                        const skills = t(`${milestoneKey}.skills`, { returnObjects: true }) as string[];
                        return (
                            <motion.div
                                className={styles.milestoneRow}
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.07 }}
                            >
                                <div className={styles.milestoneDates}>
                                    {abbreviateMonth(milestone.from)} - {milestone.till === "Now" ? t("career.present") : abbreviateMonth(milestone.till)}
                                </div>
                                <div className={styles.milestoneDot}></div>
                                <div className={styles.milestoneCard} tabIndex={0}>
                                    <div className={styles.milestoneHeader}>{t(`${milestoneKey}.title`)}</div>
                                    <div>
                                        <span className={styles.milestoneCompany}>{t(`${milestoneKey}.company`)}</span>{" "}
                                        <span className={styles.milestoneContractType}>| {t(`${milestoneKey}.contractType`)}</span>
                                    </div>
                                    {t(`${milestoneKey}.description`) && (
                                        <div className={styles.milestoneDesc}>{t(`${milestoneKey}.description`)}</div>
                                    )}
                                    {milestone.technologies && (
                                        <div className={styles.techRow}>
                                            {milestone.technologies.map((tech, i) => (
                                                <Icon
                                                    key={i}
                                                    icon={techIcons[tech] || "mdi:code"}
                                                    width={24}
                                                    height={24}
                                                />
                                            ))}
                                        </div>
                                    )}
                                    {skills && skills.length > 0 && (
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

export default CareerSection;