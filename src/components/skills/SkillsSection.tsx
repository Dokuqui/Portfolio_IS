import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { skills } from "@/data/skills";
import styles from "./SkillsSection.module.css";
import { useTranslation } from "react-i18next";

type Skill = {
  name: string;
  icon: string;
  code: string;
  category: string;
};

const groupByCategory = (skills: Skill[]) =>
  skills.reduce((acc: Record<string, Skill[]>, skill: Skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

const SkillsSection = () => {
    const { t } = useTranslation();
    const grouped = groupByCategory(skills);

    return (
        <section id="skills" className={styles.skillsSection}>
            <h2 className={styles.heading}>{t("skills.heading")}</h2>
            {Object.entries(grouped).map(([category, skillsInCategory]) => (
                <div key={category} className={styles.categoryBlock}>
                    <h3 className={styles.categoryTitle}>{category}</h3>
                    <div className={styles.grid}>
                        {skillsInCategory.map((skill, index) => (
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
                </div>
            ))}
        </section>
    );
};

export default SkillsSection;