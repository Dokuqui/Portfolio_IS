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
        "WELCOME TO TERMINAL v1.9.5",
        "TYPE *START* TO CONTINUE...",
    ];

    useEffect(() => {
        const loadMessages = async () => {
            for (const log of initialLogs) {
                await new Promise((resolve) => setTimeout(resolve, 800));
                setLogs((prev) => [...prev, log]);
            }
        };
        loadMessages();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = userInput.trim().toLowerCase();

        if (trimmedInput === "start") {
            setLogs((prev) => [...prev, "> START", "LAUNCHING INTERFACE..."]);
            setShowInput(false);
            setTimeout(() => {
                setIsTerminalVisible(false);
                onTerminalExit();
            }, 1500);
        } else {
            setLogs((prev) => [
                ...prev,
                `> ${userInput}`,
                "ERROR: UNRECOGNIZED COMMAND",
                "PLEASE TYPE *START* TO PROCEED",
            ]);
        }
        setUserInput("");
    };

    return (
        <AnimatePresence>
            {isTerminalVisible && (
                <motion.div
                    className="top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black/80 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="w-[600px] h-[400px] relative crt-effect">
                        <div className="terminal-window border-2 border-neonGreen rounded-sm bg-darkBg/90 p-4 flex flex-col w-full h-full">
                            <div className="terminal-header bg-darkBg p-2 border-b border-neonGreen flex items-center">
                                <div className="flex space-x-1">
                                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-neonGreen text-xs ml-2 uppercase tracking-wider">
                                    SYSTEM TERMINAL
                                </span>
                            </div>

                            <div className="terminal-body p-3 flex-1 overflow-y-auto overflow-x-hidden">
                                <AnimatePresence>
                                    {logs.map((log, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="text-neonGreen text-xs mb-1 tracking-wide"
                                        >
                                            <span className="text-neonBlue mr-2">{">"}</span>
                                            {/* Only highlight when *START* is explicitly in the log */}
                                            {log.includes("*START*") ? (
                                                <>
                                                    {log.split("*START*")[0]}
                                                    <span className="font-bold text-neonBlue">START</span>
                                                    {log.split("*START*")[1]}
                                                </>
                                            ) : (
                                                log
                                            )}
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {showInput && (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="mt-3 flex items-center"
                                    >
                                        <span className="text-neonBlue mr-2">{">>"}</span>
                                        <input
                                            type="text"
                                            value={userInput}
                                            onChange={(e) => setUserInput(e.target.value.toUpperCase())}
                                            className="bg-transparent border-none outline-none text-neonGreen w-full caret-neonBlue placeholder-neonGreen/70 text-xs tracking-wide font-bold"
                                            placeholder="TYPE 'START' HERE..."
                                            autoFocus
                                        />
                                        <div className="ml-1 w-3 h-5 bg-neonGreen animate-[blink_0.8s_infinite]" />
                                    </form>
                                )}
                            </div>
                        </div>
                        <div className="absolute inset-0 scanline pointer-events-none" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TerminalIntro;