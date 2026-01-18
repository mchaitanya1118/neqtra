import { motion } from "framer-motion";

export function SecurityBackground() {
    return (
        <div className="absolute inset-0 bg-[#0b0f19] overflow-hidden flex items-center justify-center">
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0b0f19_70%)] z-10 pointer-events-none" />

            {/* Rotating Shields/Rings */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[800px] h-[800px] border border-blue-500/10 rounded-full border-dashed"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-[600px] h-[600px] border border-blue-400/10 rounded-full border-dotted"
            />
            <motion.div
                animate={{ rotate: 180 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px] border-2 border-[#ff6d5a]/10 rounded-full opacity-50"
            />

            {/* Hexagon Pattern Grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23ffffff' fill='none'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Scanning Line */}
            <motion.div
                className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
}
