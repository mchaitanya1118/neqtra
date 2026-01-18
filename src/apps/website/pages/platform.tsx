import { Navbar } from "@/components/layout/Navbar";
import { GradientMouseTrail } from "@/components/ui/GradientMouseTrail";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, BarChart3, Globe, Boxes, Lock } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";

export default function Platform() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
            <GradientMouseTrail />
            <Navbar />
            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="container mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
                            The Enterprise AI Platform
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Scale your AI operations with a platform designed for security, observability, and control.
                        </p>
                        <div className="flex justify-center gap-4 pt-4">
                            <Link href="/console">
                                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                                    Start Building <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base bg-white/5 border-white/10 hover:bg-white/10">
                                Contact Sales
                            </Button>
                        </div>
                    </motion.div>
                </section>

                {/* Core Capabilities Grid */}
                <section className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Boxes,
                                title: "Orchestration",
                                description: "Visual workflow builder with over 200+ pre-built nodes for seamless integration."
                            },
                            {
                                icon: BarChart3,
                                title: "Observability",
                                description: "Full visibility into every execution step with detailed logs and performance metrics."
                            },
                            {
                                icon: Shield,
                                title: "Security",
                                description: "Enterprise-grade security with SOC2 compliance, RBAC, and audit logs."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Integration Section */}
                <section className="container mx-auto px-6 py-20 border-t border-white/5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                                <Globe className="w-4 h-4" /> Global Infrastructure
                            </div>
                            <h2 className="text-4xl font-bold">Connect with everything</h2>
                            <p className="text-lg text-muted-foreground">
                                Neqtra integrates with your existing stack. From databases to APIs, we have you covered with secure, managed connectors.
                            </p>
                            <ul className="grid grid-cols-2 gap-4 pt-4">
                                {[
                                    "REST & GraphQL APIs",
                                    "PostgreSQL / MySQL",
                                    "Slack & Discord",
                                    "OpenAI & Anthropic",
                                    "Google Workspace",
                                    "AWS / Azure / GCP"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
                            <div className="relative text-center space-y-2">
                                <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20">200+</div>
                                <div className="text-sm font-medium text-white/50 uppercase tracking-widest">Integrations</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enterprise Section */}
                <section className="container mx-auto px-6 py-20">
                    <div className="bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] border border-white/10 p-12 text-center">
                        <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-8">
                            <Lock className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for Enterprise</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Dedicated support, SLAs, and custom deployment options for mission-critical workloads.
                        </p>
                        <Button size="lg" variant="secondary" className="rounded-full h-12 px-8">
                            Contact Sales
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
