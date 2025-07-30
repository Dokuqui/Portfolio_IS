import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { FaDownload, FaClipboard } from "react-icons/fa";
import copy from "copy-to-clipboard";
import Lottie from "lottie-react";
import heroAnimation from "../../../public/hero/Programming Computer.json";
import styles from "./AboutSection.module.css";
import { useTranslation } from "react-i18next";
import "../../i18n";
import PalettePicker from "../palette/PalettePicker";
import CountryFlag from "react-country-flag";

const socialIcons = {
    GitHub: { icon: "skill-icons:github-light", url: "https://github.com/Dokuqui" },
    LinkedIn: { icon: "skill-icons:linkedin", url: "https://linkedin.com/in/illia-semenov-1aa517240" },
    DEV: { icon: "skill-icons:devto-light", url: "https://dev.to/dokuqui" },
};

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
            <header className={styles.header}>
                <h1 className={styles.logo}>SEMENOV_OS</h1>
                <PalettePicker />
                <div className={styles.languageSwitch}>
                    <button
                        className={i18n.language === "fr" ? styles.activeLang : ""}
                        onClick={() => i18n.changeLanguage("fr")}
                        aria-label="Français"
                        type="button"
                    >
                        <CountryFlag countryCode="FR" svg style={{ width: "1.5em", height: "1.5em" }} />
                        <span className={styles.langLabel}>FR</span>
                    </button>
                    <span className={styles.languageDivider}>|</span>
                    <button
                        className={i18n.language === "en" ? styles.activeLang : ""}
                        onClick={() => i18n.changeLanguage("en")}
                        aria-label="English"
                        type="button"
                    >
                        <CountryFlag countryCode="GB" svg style={{ width: "1.5em", height: "1.5em" }} />
                        <span className={styles.langLabel}>EN</span>
                    </button>
                </div>
            </header>


            <motion.div className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className={styles.heroRow}>
                    <div className={styles.heroVisual}>
                        <Lottie animationData={heroAnimation} loop={true} style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div className={styles.heroIntro}>
                        <h2 className={styles.heading}>{t("about.heading")}</h2>
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: t("about.description") }} />
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
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;