import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";


export function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Neurons and Layers",
      description: "A neural network consists of interconnected nodes called neurons. Neurons are organized into layers."
    },
    {
      id: "02",
      title: "Activation Function",
      description: "Each neuron applies an activation function to the weighted sum of its inputs and produces an output"
    },
    {
      id: "03",
      title: "Feedforward Process",
      description: "The inputs are multiplied by their respective weights, summed up, and passed through the activation function."
    },
    {
      id: "04",
      title: "Optimization",
      description: "And passed through the activation function. The inputs are multiplied by their respective weights, summed up"
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-4xl">
            <p className="text-sm font-mono text-muted-foreground mb-4">[ how it works ]</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Essential building blocks <br />
              of artificial intelligence <br />
              <span className="text-primary">(AI)</span> systems
            </motion.h2>
          </div>

          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group">
              <ArrowLeft className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
            </button>
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group">
              <ArrowRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
            </button>
          </div>
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
                  className="text-8xl font-bold text-transparent select-none transition-all duration-500"
                  style={{
                    WebkitTextStroke: '1px #a78bfa', // Light purple/blue outline
                    textShadow: '0 0 20px rgba(167, 139, 250, 0.1)'
                  }}
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
