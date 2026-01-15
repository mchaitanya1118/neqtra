import { motion } from "framer-motion";
import { 
  Network, 
  BrainCircuit, 
  ShieldCheck, 
  Zap, 
  GitBranch, 
  Database 
} from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Neural Routing",
    description: "Dynamically route requests to the most efficient model based on complexity and cost."
  },
  {
    icon: BrainCircuit,
    title: "Context Memory",
    description: "Persistent long-term memory layer that allows agents to recall past interactions."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Guardrails",
    description: "Built-in PII detection, content filtering, and policy enforcement at the edge."
  },
  {
    icon: Zap,
    title: "Real-time Streaming",
    description: "Sub-millisecond latency for conversational AI with full WebSocket support."
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Git-like branching and merging for prompt engineering and workflow logic."
  },
  {
    icon: Database,
    title: "Vector Database",
    description: "Integrated vector store for semantic search and RAG workflows out of the box."
  }
];

export function FeatureGrid() {
  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Built for the <span className="text-secondary">Next Era</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Everything you need to build production-ready AI applications, 
            from prototype to planetary scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
