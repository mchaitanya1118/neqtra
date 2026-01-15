import { motion } from "framer-motion";
import visualLogicImg from "@assets/generated_images/minimalist_node-based_visual_logic_editor_interface.png";

export function WorkflowVisualizer() {
  return (
    <section className="py-24 border-y border-foreground/5 bg-foreground/[0.02] overflow-hidden relative">
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
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl border border-foreground/10 shadow-2xl overflow-hidden group"
            >
              <img 
                src={visualLogicImg} 
                alt="Visual Logic Editor" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              
              {/* Overlay elements to make it feel interactive */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono text-white/50 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">LIVE_TRACE</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
