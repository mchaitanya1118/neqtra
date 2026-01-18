import { motion } from "framer-motion";

export function AuroraBackground() {
    return (
        <div className="absolute inset-0 bg-[#0a0a0a] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a] z-10 pointer-events-none" />

            {/* Moving Gradient Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600 blur-[120px] opacity-30 mix-blend-screen"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -50, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#ff6d5a] blur-[150px] opacity-20 mix-blend-screen"
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute bottom-[-20%] left-[20%] w-[70%] h-[70%] rounded-full bg-purple-900 blur-[130px] opacity-30 mix-blend-screen"
            />
        </div>
    );
}
