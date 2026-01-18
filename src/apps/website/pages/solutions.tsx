import { Navbar } from "@/components/layout/Navbar";
import { GradientMouseTrail } from "@/components/ui/GradientMouseTrail";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Stethoscope, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";


export default function Solutions() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
            <GradientMouseTrail />
            <Navbar />
            <main className="pt-24 pb-16">
                <section className="container mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                            Solutions for every industry
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Accelerate innovation with AI workflows tailored to your specific business needs.
                        </p>
                    </motion.div>
                </section>

                <section className="container mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Building2,
                                title: "Fintech",
                                description: "Automate fraud detection, loan processing, and customer support with secure, compliant AI workflows.",
                                bg: "bg-blue-500/10",
                                text: "text-blue-500"
                            },
                            {
                                icon: Stethoscope,
                                title: "Healthcare",
                                description: "Streamline patient scheduling, data analysis, and insurance claims while maintaining HIPAA compliance.",
                                bg: "bg-green-500/10",
                                text: "text-green-500"
                            },
                            {
                                icon: ShoppingBag,
                                title: "E-commerce",
                                description: "Personalize shopping experiences, optimize inventory, and automate support tickets.",
                                bg: "bg-purple-500/10",
                                text: "text-purple-500"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors relative overflow-hidden"
                            >
                                <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center mb-6`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {item.description}
                                </p>
                                <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="container mx-auto px-6 py-20">
                    <div className="bg-primary/5 rounded-[2rem] border border-primary/10 p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-bold">Success Stories</h2>
                                <p className="text-lg text-muted-foreground">
                                    See how leading companies are transforming their operations with Neqtra.
                                </p>
                                <div className="space-y-4">
                                    <div className="p-4 rounded-xl bg-background/50 border border-white/5 backdrop-blur-sm">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-orange-500/20" />
                                            <div>
                                                <p className="italic text-muted-foreground">"Neqtra reduced our manual data processing time by 80%."</p>
                                                <p className="text-sm font-semibold mt-2">- Acme Corp, Fintech</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button size="lg" className="rounded-full">
                                    View process <ArrowUpRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="text-muted-foreground">Detailed Case Study Visual</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );

}
