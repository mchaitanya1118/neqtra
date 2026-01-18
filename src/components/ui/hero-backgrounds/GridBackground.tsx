import { motion } from "framer-motion";

export function GridBackground() {
    return (
        <div className="absolute inset-0 bg-[#050505] overflow-hidden perspective-[1000px]">
            {/* Fading overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />

            {/* Moving Grid Floor */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center transform-style-3d rotate-x-[60deg]"
            >
                <div
                    className="w-[200vw] h-[200vh] bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [transform-origin:center_top]"
                    style={{
                        animation: 'grid-move 20s linear infinite',
                    }}
                />
            </motion.div>

            {/* Add global style for keyframes if not present, or use Framer Motion for y movement */}
            <style>
                {`
                @keyframes grid-move {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(4rem); }
                }
                `}
            </style>

            {/* Glowing Code Snippets / Floating "Data" */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-green-500/20 w-32 h-[1px] rounded-full blur-[2px]"
                    style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${Math.random() * 50}%`,
                    }}
                    animate={{
                        y: [0, 100],
                        opacity: [0, 1, 0],
                        scaleX: [0.5, 1.5]
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 5,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
}
