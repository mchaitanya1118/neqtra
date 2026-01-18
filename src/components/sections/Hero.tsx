import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/generated_images/abstract_glowing_neural_network_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col gap-20">

        {/* Top Section: Split Layout */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          {/* Left: Headline */}
          <div className="flex-1 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter leading-[0.9] text-foreground"
            >
              Orchestrate <br />
              <span className="text-primary/90">Intelligence</span> <br />
              features
            </motion.h1>
          </div>

          {/* Right: Description & CTA */}
          <div className="flex-1 max-w-md lg:pb-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              The enterprise-grade engine for autonomous AI workflows.
              Highlight the potential benefits of Neural Networks, such as improved decision-making and automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/signup">
                <Button size="lg" className="h-14 px-10 text-lg bg-primary text-white hover:bg-primary/90 rounded-full font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  Start Building Free
                  <ArrowRight className="ml-2 w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-background border border-white/10 group"
        >
          {/* Banner Background Image */}
          <div className="absolute inset-0 opacity-60 mix-blend-screen">
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
            <img src={heroBg} className="w-full h-full object-cover grayscale opacity-50 contrast-125" alt="Background" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-12 flex flex-col justify-between">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white/90">
                Elevate your business with our innovative solutions
              </h3>
            </div>

            <div className="flex items-end justify-between">
              {/* Giant Text */}
              <span className="text-[12rem] md:text-[16rem] leading-none font-bold tracking-tighter text-white/5 select-none absolute -bottom-16 left-0 pointer-events-none">
                neqtra
              </span>

              {/* Watch Video Button */}
              <div className="ml-auto relative z-10">
                <Button variant="outline" className="h-14 px-8 rounded-full bg-white/10 border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition-all gap-3">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                    <Play className="w-4 h-4 ml-0.5 fill-current" />
                  </div>
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
