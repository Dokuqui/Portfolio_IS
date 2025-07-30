import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { FaDownload, FaClipboard } from "react-icons/fa";
import copy from "copy-to-clipboard";
import styles from "./AboutSection.module.css";
import { useTranslation } from "react-i18next";
import "../../i18n";

const socialIcons = {
    GitHub: { icon: "skill-icons:github-light", url: "https://github.com/Dokuqui" },
    LinkedIn: { icon: "skill-icons:linkedin", url: "https://linkedin.com/in/illia-semenov-1aa517240" },
    DEV: { icon: "skill-icons:devto-light", url: "https://dev.to/dokuqui" },
};

function ThemeToggle() {
    const [theme, setTheme] = useState(() =>
        typeof window !== "undefined" && document.body.dataset.theme === "dark" ? "dark" : "light"
    );
    const isDark = theme === "dark";
    const toggleTheme = () => {
        const next = isDark ? "light" : "dark";
        setTheme(next);
        if (typeof window !== "undefined") {
            document.body.dataset.theme = next;
        }
    };
    return (
        <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
        >
            <Icon icon={isDark ? "solar:sun-2-bold" : "solar:moon-bold"} width={22} />
            <span className={styles.themeToggleLabel}>{isDark ? "Light" : "Dark"} mode</span>
        </button>
    );
}

const AboutSection = () => {
    const { t, i18n } = useTranslation();
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyEmail = () => {
        const isCopiedSuccessfully = copy("doku_isv@icloud.com");
        if (isCopiedSuccessfully) {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    return (
        <section id="about" className={styles.aboutSection}>
            <ThemeToggle />
            <header className={styles.header}>
                <h1 className={styles.logo}>SEMENOV_OS</h1>
                <div className={styles.languageSwitch}>
                    <button
                        className={i18n.language === "fr" ? styles.activeLang : ""}
                        onClick={() => i18n.changeLanguage("fr")}
                        aria-label="FR"
                        type="button"
                    >FR</button>
                    <span className={styles.languageDivider}>|</span>
                    <button
                        className={i18n.language === "en" ? styles.activeLang : ""}
                        onClick={() => i18n.changeLanguage("en")}
                        aria-label="EN"
                        type="button"
                    >EN</button>
                </div>
            </header>

            <motion.div className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2 className={styles.heading}>{t("about.heading")}</h2>
                <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: t("about.description") }}
                />
                <div className={styles.socials}>
                    {Object.entries(socialIcons).map(([name, { icon, url }]) => (
                        <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <Icon icon={icon} width={36} height={36} />
                        </a>
                    ))}
                </div>
                <div className={styles.buttons}>
                    <button
                        aria-label={t("about.copyEmail")}
                        onClick={handleCopyEmail}
                        className={styles.copyBtn}
                    >
                        <FaClipboard /> {isCopied ? t("about.copied") : t("about.copyEmail")}
                    </button>
                    <a
                        href={t("about.cvLink")}
                        download={t("about.cvFileName")}
                        className={styles.downloadBtn}
                        aria-label="Download CV"
                    >
                        <FaDownload className={styles.downloadIcon} />
                        Download CV
                    </a>
                </div>
                <p className={styles.connectText}>{t("about.buttonText")}</p>
            </motion.div>
        </section>
    );
};

export default AboutSection;