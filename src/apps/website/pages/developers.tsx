import { Navbar } from "@/components/layout/Navbar";
import { GradientMouseTrail } from "@/components/ui/GradientMouseTrail";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Terminal, Book, Github } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";


export default function Developers() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
            <GradientMouseTrail />
            <Navbar />
            <main className="pt-24 pb-16">
                <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/assets/images/hero_developers.png"
                            alt="Background"
                            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90" />
                    </div>
                    <div className="container mx-auto px-6 py-20 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-8"
                        >
                            <Code2 className="w-4 h-4" /> For Developers
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Built for builders
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Extensible, API-first architecture. Integrate Neqtra into your application with just a few lines of code.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="rounded-full h-12 px-8">
                                Read the Docs <Book className="ml-2 w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full h-12 px-8 bg-white/5 border-white/10 hover:bg-white/10">
                                <Github className="mr-2 w-4 h-4" /> View on GitHub
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 py-20">
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl max-w-4xl mx-auto">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="p-6 md:p-8 overflow-x-auto">
                            <pre className="text-sm md:text-base font-mono leading-relaxed text-blue-300">
                                <code>
                                    {`import { NeqtraClient } from '@neqtra/sdk';

const client = new NeqtraClient({
  apiKey: process.env.NEQTRA_API_KEY
});

// Trigger a workflow via API
const run = await client.workflows.trigger('workflow-id', {
  data: {
    userId: '123',
    event: 'signup'
  }
});

console.log('Workflow execution started:', run.id);`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                            <Terminal className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">CLI Tool</h3>
                        <p className="text-muted-foreground">
                            Manage workflows, secrets, and deployments directly from your terminal.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500">
                            <Boxes className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Custom Nodes</h3>
                        <p className="text-muted-foreground">
                            Build your own custom nodes using React and Node.js to extend platform capabilities.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );

}

import { Boxes } from "lucide-react";
