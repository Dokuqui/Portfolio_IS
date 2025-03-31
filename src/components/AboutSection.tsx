import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Switch from "react-switch";
import { FaDownload, FaClipboard } from "react-icons/fa";
import copy from "copy-to-clipboard";

const socialIcons = {
    GitHub: { icon: "skill-icons:github-light", url: "https://github.com/Dokuqui" },
    LinkedIn: { icon: "skill-icons:linkedin", url: "https://linkedin.com/in/illia-semenov-1aa517240" },
    DEV: { icon: "skill-icons:devto-light", url: "https://dev.to/dokuqui" },
};

const AboutSection = () => {
    const [language, setLanguage] = useState<'en' | 'fr'>('fr');
    const [isCopied, setIsCopied] = useState(false);


    const content = language === 'fr' ? {
        heading: "> ABOUT_",
        description: (
            <>
                Je suis un développeur Full-Stack / Back-End passionné et dynamique, avec une solide expérience en Go (Golang), TypeScript, Python et C#. Fort d&apos;une expérience pratique en développement logiciel, DevOps et automatisation des tests, je me spécialise dans la création de solutions efficaces et évolutives.
                Mon parcours m&apos;a conduit à travers diverses industries, de la logistique et la navigation à la cybersécurité et la technologie, où j&apos;ai affiné mon expertise en microservices, pipelines CI/CD et gestion de bases de données.
                Toujours avide d&apos;apprendre et de m&apos;adapter, j&apos;apprécie contribuer à des projets open-source, explorer de nouvelles technologies et repousser les limites de ce qui est possible en développement logiciel.
            </>
        ),        
        buttonText: "Connectons-nous et créons quelque chose d'incroyable ensemble !",
        cvLink: "/documents/CV Semenov Illia Développeur, franç.pdf",
        cvFileName: "CV Semenov Illia Développeur, franç.pdf",
    } : {
        heading: "> ABOUT_",
        description: (
            <>
                I am a passionate and dynamic Full-Stack / Back-End developer with solid experience in Go (Golang), TypeScript, Python, and C#. With practical experience in software development, DevOps, and test automation, I specialize in creating efficient and scalable solutions.
                My journey has taken me through various industries, from logistics and navigation to cybersecurity and technology, where I honed my expertise in microservices, CI/CD pipelines, and database management.
                Always eager to learn and adapt, I enjoy contributing to open-source projects, exploring new technologies, and pushing the boundaries of what&apos;s possible in software development.
            </>
        ),
        buttonText: "Let's connect and build something amazing together!",
        cvLink: "/documents/CV_Semenov_Illia_Developer_english.pdf",
        cvFileName: "CV_Semenov_Illia_Developer_english.pdf",
    };

    const handleCopyEmail = () => {
        const isCopiedSuccessfully = copy("doku_isv@icloud.com");
        if (isCopiedSuccessfully) {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    return (
        <>
            <header className="flex justify-between items-center px-8 py-4 bg-darkBg/80 text-neonGreen">
                <h1 className="text-xl font-pixel tracking-widest">SEMENOV_OS</h1>
                <div className="flex gap-4">
                    <motion.div className="flex gap-4 items-center">
                        <span className="text-sm text-gray-300">FR</span>
                        <Switch
                            onChange={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                            checked={language === 'en'}
                            offColor="#f44336"
                            onColor="#4CAF50"
                            checkedIcon={false}
                            uncheckedIcon={false}
                            width={30}
                            height={15}
                            handleDiameter={8}
                        />
                        <span className="text-sm text-gray-300">EN</span>
                    </motion.div>
                </div>
            </header>

            <motion.section
                id="about"
                className="py-16 relative overflow-hidden bg-darkBg/95"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-darkBg/80 to-neonGreen/10" />
                <div className="absolute inset-0 crt-effect scanline" />

                <h2 className="text-4xl font-pixel text-neonGreen mb-12 relative z-10 tracking-widest uppercase shadow-[0_0_3px_#33ff00] text-center">
                    {content.heading}
                </h2>

                <div className="max-w-3xl mx-auto relative z-10 px-4 text-center text-gray-300 font-mono">
                    <motion.p
                        className="text-sm mb-6 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {content.description}
                    </motion.p>

                    <motion.div
                        className="flex flex-col items-center gap-6 mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className="text-m">{content.buttonText}</p>
                    </motion.div>

                    <motion.div
                        className="flex justify-center gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {Object.entries(socialIcons).map(([name, { icon, url }]) => (
                            <motion.a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Icon icon={icon} width={40} height={40} className="text-neonGreen" />
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div className="flex justify-center items-center gap-6">
                        <motion.button
                            aria-label="Copy Email"
                            onClick={handleCopyEmail}
                            className="text-darkBg px-6 py-3 border border-neonGreen hover:bg-neonGreen/20 transition"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FaClipboard /> {isCopied ? "Copied!" : "Copy Email"}
                        </motion.button>

                        <motion.a
                            href={content.cvLink}
                            download={content.cvFileName}
                            aria-label="Download CV"
                            className="py-3 px-6 bg-neonGreen/20 border border-neonGreen text-neonGreen border-neonGreen hover:bg-neonGreen/20 transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaDownload className="inline mr-2" />
                            Download CV
                        </motion.a>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default AboutSection;
