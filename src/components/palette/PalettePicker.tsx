import React from "react";
import { Icon } from "@iconify/react";
import styles from "./PalettePicker.module.css";

const palettes = [
    { name: "Classic", value: "", color: "#5e60ce" },
    { name: "Nord", value: "nord", color: "#5e81ac" },
    { name: "Solarized", value: "solarized", color: "#268bd2" },
    { name: "Dark", value: "dark", color: "#232136" }
];

export default function PalettePicker() {
    const [open, setOpen] = React.useState(false);
    const [active, setActive] = React.useState(
        () => typeof window !== "undefined" ? (document.body.getAttribute("data-theme") || "") : ""
    );
    const btnRef = React.useRef<HTMLButtonElement>(null);
    const tooltipRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const saved = localStorage.getItem("theme-palette");
        if (saved && document.body.getAttribute("data-theme") !== saved) {
            if (saved) document.body.setAttribute("data-theme", saved);
            else document.body.removeAttribute("data-theme");
            setActive(saved);
        }
    }, []);

    React.useEffect(() => {
        if (!open) return;
        const close = (e: MouseEvent | KeyboardEvent) => {
            if (e instanceof KeyboardEvent && e.key === "Escape") setOpen(false);
            if (
                e instanceof MouseEvent &&
                btnRef.current &&
                !btnRef.current.contains(e.target as Node) &&
                tooltipRef.current &&
                !tooltipRef.current.contains(e.target as Node)
            ) setOpen(false);
        };
        document.addEventListener("mousedown", close);
        document.addEventListener("keydown", close);
        return () => {
            document.removeEventListener("mousedown", close);
            document.removeEventListener("keydown", close);
        };
    }, [open]);

    const setPalette = (p: string) => {
        if (p) document.body.setAttribute("data-theme", p);
        else document.body.removeAttribute("data-theme");
        localStorage.setItem("theme-palette", p);
        setActive(p);
        setOpen(false);
    };

    return (
        <div className={styles.palettePickerRoot}>
            <button
                ref={btnRef}
                onClick={() => setOpen((o) => !o)}
                className={styles.paletteBtn}
                aria-label="Choose color palette"
                type="button"
            >
                <Icon icon="solar:palette-bold-duotone" width={22} />
                <span className={styles.paletteBtnLabel}>Palette</span>
            </button>
            {open && (
                <div ref={tooltipRef} className={styles.paletteTooltip} role="menu">
                    {palettes.map(({ name, value, color }) => (
                        <button
                            key={name}
                            onClick={() => setPalette(value)}
                            className={`${styles.paletteOption} ${active === value ? styles.active : ""}`}
                            style={{ "--palette-color": color } as React.CSSProperties}
                            aria-pressed={active === value}
                            type="button"
                        >
                            <span className={styles.paletteSwatch} style={{ background: color }} />
                            {name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}