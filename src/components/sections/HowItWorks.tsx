import { motion } from "framer-motion";
import { Zap, Target, Rocket, Repeat } from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "Instant Integration",
    description: "Connect your existing data sources and models in seconds. No complex setup required.",
    color: "bg-blue-500"
  },
  {
    icon: Target,
    title: "Precision Execution",
    description: "Define clear objectives and let our engine handle the orchestration with surgical accuracy.",
    color: "bg-purple-500"
  },
  {
    icon: Rocket,
    title: "Scale at Speed",
    description: "Deploy workflows that handle millions of requests without breaking a sweat.",
    color: "bg-cyan-500"
  },
  {
    icon: Repeat,
    title: "Continuous Iteration",
    description: "Real-time monitoring and feedback loops ensure your AI gets smarter over time.",
    color: "bg-green-500"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6"
          >
            How <span className="text-primary">neqtra</span> does it
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            We've simplified the complex world of AI orchestration into a streamlined, high-performance engine.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="mb-6 relative">
                <div className={`w-16 h-16 rounded-2xl ${step.color} bg-opacity-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <step.icon className={`w-8 h-8 text-foreground opacity-80`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-foreground/5 -z-10 translate-x-4" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-sm font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>0{index + 1}</span>
                <div className="h-px w-8 bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
