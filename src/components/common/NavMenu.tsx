"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Cpu, Atom, Code2, User, GraduationCap, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
    const { t } = useTranslation();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const menuItems = [
        { id: "about", label: t("nav.profile"), icon: <User size={22} /> },
        { id: "skills", label: t("nav.skills"), icon: <Cpu size={22} /> },
        { id: "projects", label: t("nav.projects"), icon: <Code2 size={22} /> },
        { id: "experience", label: t("nav.career"), icon: <Atom size={22} /> },
        { id: "education", label: t("nav.education"), icon: <GraduationCap size={22} /> },
    ];

    const handleLinkClick = () => setDrawerOpen(false);

    return (
        <>
            <button
                className={styles.hamburger}
                aria-label="Open navigation"
                onClick={() => setDrawerOpen(true)}
            >
                <Menu size={28} />
            </button>

            <div className={`${styles.drawerOverlay} ${drawerOpen ? styles.open : ""}`} onClick={handleLinkClick} />
            <aside className={`${styles.drawer} ${drawerOpen ? styles.open : ""}`} aria-label="Section navigation">
                <button
                    className={styles.closeButton}
                    aria-label="Close navigation"
                    onClick={() => setDrawerOpen(false)}
                >
                    ×
                </button>
                <nav>
                    {menuItems.map((item) => (
                        <ScrollLink
                            key={item.id}
                            to={item.id}
                            smooth
                            duration={500}
                            offset={item.id === "about" ? 0 : -80}
                            onClick={handleLinkClick}
                            className={styles.drawerItem}
                            tabIndex={0}
                            aria-label={item.label}
                        >
                            <span className={styles.icon}>{item.icon}</span>
                            <span className={styles.label}>{item.label}</span>
                        </ScrollLink>
                    ))}
                </nav>
            </aside>

            <nav className={styles.topNav} aria-label="Section navigation">
                {menuItems.map((item) => (
                    <ScrollLink
                        key={item.id}
                        to={item.id}
                        smooth
                        duration={500}
                        offset={item.id === "about" ? 0 : -80}
                        className={styles.topNavItem}
                        tabIndex={0}
                        aria-label={item.label}
                    >
                        <span className={styles.icon}>{item.icon}</span>
                        <span className={styles.label}>{item.label}</span>
                    </ScrollLink>
                ))}
            </nav>
        </>
    );
}