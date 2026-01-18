import { motion } from "framer-motion";




export function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Integration",
      description: "Connect your existing data sources and models in seconds. No complex setup required."
    },
    {
      id: "02",
      title: "Orchestration",
      description: "Define logic with our visual builder. Let the engine handle dependencies and execution flow."
    },
    {
      id: "03",
      title: "Computation",
      description: "Workflows are processed on our high-performance GPU grid for maximum speed."
    },
    {
      id: "04",
      title: "Optimization",
      description: "Real-time feedback loops analyze performance and self-optimize future runs."
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <p className="text-sm font-mono text-muted-foreground mb-4">[ how it works ]</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            Essential building blocks <br />
            of intelligent <span className="text-primary">automation</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative py-12 pr-8 border-b md:border-b-0 border-white/10 md:border-r last:border-r-0 group"
            >
              <div className="mb-12">
                <span
                  className="text-8xl font-bold text-transparent select-none transition-all duration-500 group-hover:text-primary/10"
                  style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}
                >
                  {step.id}
                </span>
                <p className="mt-4 text-sm font-mono text-muted-foreground">[ step ]</p>
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
