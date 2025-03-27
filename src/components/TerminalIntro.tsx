"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TerminalIntro = ({ onTerminalExit }: { onTerminalExit: () => void }) => {
    const [logs, setLogs] = useState<string[]>([]);
    const [userInput, setUserInput] = useState("");
    const [showInput, setShowInput] = useState(true);
    const [isTerminalVisible, setIsTerminalVisible] = useState(true);

    const initialLogs = [
        "INITIALIZING SYSTEM...",
        "LOADING CORE MODULES...",
        "CHECKING SYSTEM INTEGRITY...",
        "AWS EC2",
        "PYTHON API",
        "JAVA RUNTIME PREPARATION",
        "KUBERNETES CLUSTERS",
        "ACCESSING MAINFRAME...",
        "WELCOME TO TERMINAL v1.9.5",
        "TYPE 'START' TO CONTINUE..."
    ];

    useEffect(() => {
        const loadMessages = async () => {
            for (const log of initialLogs) {
                await new Promise(resolve => setTimeout(resolve, 800));
                setLogs(prev => [...prev, log]);
            }
        };
        loadMessages();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userInput.trim().toLowerCase() === "start") {
            setLogs(prev => [...prev, `> ${userInput}`, "LAUNCHING INTERFACE..."]);
            setShowInput(false);
            setTimeout(() => {
                setIsTerminalVisible(false);
                onTerminalExit();
            }, 1500);
        } else {
            setLogs(prev => [...prev, `> ${userInput}`, "ERROR: UNRECOGNIZED COMMAND", "TRY: 'START' TO BEGIN"]);
        }
        setUserInput("");
    };

    return (
        isTerminalVisible && (
            <motion.div
                className="inset-0 bg-black/95 flex items-center justify-center font-jetbrains z-50"
                initial={{ opacity: 1 }}
                animate={{ opacity: isTerminalVisible ? 1 : 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="w-[40vw] max-w-2xl h-[100vh] justify-center">
                    <div className="terminal-window border-2 border-neonGreen rounded-lg shadow-neonGlow bg-darkBg p-6">
                        {/* Header */}
                        <div className="terminal-header bg-darkBg p-2 border-b border-neonGreen flex items-center">
                            <div className="flex space-x-2">
                                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-neonGreen text-sm ml-2">SYSTEM TERMINAL</span>
                        </div>

                        {/* Body */}
                        <div className="terminal-body p-4 h-[60vh] overflow-y-auto overflow-x-hidden">
                            <AnimatePresence>
                                {logs.map((log, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neonGreen text-sm mb-2"
                                    >
                                        <span className="text-neonBlue mr-2">{">"}</span>
                                        {log}
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {showInput && (
                                <form onSubmit={handleSubmit} className="mt-4 flex items-center">
                                    <span className="text-neonBlue mr-2">{">>"}</span>
                                    <input
                                        type="text"
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value.toUpperCase())}
                                        className="bg-transparent border-none outline-none text-neonGreen w-full caret-neonBlue placeholder-neonGreen/50"
                                        placeholder="ENTER COMMAND..."
                                        autoFocus
                                    />
                                    <div className="ml-2 w-3 h-5 bg-neonGreen animate-blink"></div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    );
};

export default TerminalIntro;
