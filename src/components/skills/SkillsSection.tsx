import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { skills } from "@/data/skills";
import styles from "./SkillsSection.module.css";
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
    const { t } = useTranslation();
    
    return (
        <section id="skills" className={styles.skillsSection}>
            <h2 className={styles.heading}>{t("skills.heading")}</h2>
            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className={styles.skillCard}
                        tabIndex={0}
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.04 }}
                    >
                        <Icon
                            icon={skill.icon}
                            width={42}
                            height={42}
                            className={styles.skillIcon}
                        />
                        <span className={styles.skillName}>{skill.name}</span>
                        <div className={styles.codeOverlay}>
                            <span>{skill.code}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;