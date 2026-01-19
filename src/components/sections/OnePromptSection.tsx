import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Shield, Cpu } from "lucide-react";

const promptFeatures = [
  {
    title: "Deep Context Research",
    description: "neqtra analyzes your entire knowledge base to understand context before generating a single node.",
    icon: Sparkles
  },
  {
    title: "Auto-Generated Logic",
    description: "Complex branching and error handling are written automatically based on your high-level intent.",
    icon: Cpu
  },
  {
    title: "Secure by Design",
    description: "Every generated workflow includes built-in PII protection and enterprise-grade guardrails.",
    icon: Shield
  }
];

export function OnePromptSection() {
  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-60 mix-blend-multiply dark:mix-blend-lighten max-w-[60%]">
        <img
          src="/elements-1.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 leading-[1.1]">
                One Prompt.<br />
                <span className="text-primary">Whole Workflow.</span><br />
                No kidding.
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                While others make you prompt for every step, neqtra is different.
                Describe your vision once and get a full autonomous system with
                logic, memory, and integrations—everything.
              </p>

              <div className="space-y-8">
                {promptFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-foreground/5">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground leading-snug">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="mt-12 h-14 px-10 rounded-full bg-primary text-background font-bold hover:scale-105 transition-transform">
                Try One-Shot Orchestration
              </Button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 p-8 rounded-3xl bg-white border border-foreground/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-foreground/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 h-6 px-3 rounded bg-secondary flex items-center text-[10px] font-mono text-muted-foreground">
                  prompt_engine_v3.0.sh
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">AI</div>
                  <div className="flex-1 p-4 rounded-xl bg-secondary/50 text-sm font-medium border border-foreground/5">
                    "Build a customer support agent that handles returns, checks inventory in Shopify, and escalates high-value cases to Slack."
                  </div>
                </div>

                <div className="pl-12 space-y-3">
                  {[
                    { label: "Researching market context...", width: "w-3/4", color: "bg-blue-400" },
                    { label: "Mapping logic flows...", width: "w-full", color: "bg-purple-400" },
                    { label: "Generating secure nodes...", width: "w-5/6", color: "bg-cyan-400" }
                  ].map((task, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + (i * 0.2), duration: 1 }}
                      className="h-8 flex items-center px-4 rounded bg-white border border-foreground/5 shadow-sm origin-left"
                    >
                      <span className="text-[11px] font-mono opacity-60">{task.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center pt-4">
                  <div className="px-6 py-2 rounded-lg bg-green-50 text-green-700 text-xs font-bold border border-green-100 flex items-center gap-2">
                    <Zap className="w-3 h-3 fill-current" />
                    Workflow Generated Successfully
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/40 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
