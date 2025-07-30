import { Trans, useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export default function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div>
                <span>{t("footer.copyright", { year })}</span>
                <span className={styles.made}>
                    <Trans i18nKey="footer.made" components={{ 1: <span className={styles.emoji} /> }} />
                </span>
            </div>
        </footer>
    );
}