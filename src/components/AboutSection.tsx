import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <motion.section
            id="about"
            className="py-8 relative overflow-hidden" // Reduced from min-h-screen py-16
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 crt-effect scanline" />
            <h2 className="text-4xl font-pixel text-neonGreen mb-6 relative z-10 tracking-wide uppercase shadow-[0_0_10px_#39ff14]">
        > PROFILE_
            </h2>
            <motion.div
                className="font-mono text-gray-300 text-xl leading-relaxed relative z-10 max-w-2xl space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <p>
                    I’m a backend developer with a passion for building robust systems.
                    Inspired by retro games and 50s Americana, I blend old-school vibes
                    with modern tech. Think neon-lit diners and pixelated adventures—let’s
                    code something timeless.
                </p>
                <p>
                    With years of experience in server-side logic, I’ve tackled everything
                    from RESTful APIs to database optimization. My toolkit includes
                    Node.js, Python, and a knack for turning coffee into code.
                </p>
            </motion.div>
        </motion.section>
    );
};

export default AboutSection;