import { motion, AnimatePresence } from "framer-motion";

const Loader = () => (
    <AnimatePresence>
        <motion.div
            className="loader-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(17,24,39,0.92)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999
            }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    color: "#2563eb",
                    fontFamily: "var(--font-heading, Montserrat, sans-serif)",
                    fontSize: "2.3rem",
                    letterSpacing: "0.12em"
                }}
            >
                ILLIA SEMENOV
            </motion.div>
        </motion.div>
    </AnimatePresence>
);

export default Loader;