import { motion } from "framer-motion";

export function WorkflowVisualizer() {
  return (
    <section className="py-24 border-y border-white/5 bg-black/20 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Visual Logic. <br />
              <span className="text-primary">Infinite Possibility.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Design complex agent behaviors using our intuitive node-based editor. 
              Drag, drop, and connect pre-built skills or write custom Python/JS 
              logic directly in the browser.
            </p>
            
            <ul className="space-y-4">
              {[
                "Drag-and-drop workflow builder",
                "Live debugging and tracing",
                "One-click deployment to edge"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                  <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_hsl(var(--secondary))]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-video rounded-xl bg-card border border-white/10 shadow-2xl overflow-hidden p-8">
              {/* Abstract Node Graph Animation */}
              <div className="absolute inset-0 bg-grid opacity-30" />
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path 
                  d="M 100 150 C 250 150, 250 100, 400 100"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <motion.path 
                  d="M 100 150 C 250 150, 250 250, 400 250"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </svg>

              {/* Nodes */}
              <motion.div 
                className="absolute top-[130px] left-[60px] p-3 rounded-lg bg-card border border-primary/50 text-xs font-mono shadow-[0_0_15px_-5px_hsl(var(--primary))]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Input: Trigger
              </motion.div>

              <motion.div 
                className="absolute top-[80px] right-[60px] p-3 rounded-lg bg-card border border-primary/50 text-xs font-mono"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                LLM: Analysis
              </motion.div>

              <motion.div 
                className="absolute bottom-[80px] right-[60px] p-3 rounded-lg bg-card border border-secondary/50 text-xs font-mono shadow-[0_0_15px_-5px_hsl(var(--secondary))]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                Action: Database
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
