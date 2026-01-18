import { Navbar } from "@/components/layout/Navbar";
import { GradientMouseTrail } from "@/components/ui/GradientMouseTrail";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Server, Lock, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";


import { SecurityBackground } from "@/components/ui/hero-backgrounds/SecurityBackground";

export default function Enterprise() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
            <GradientMouseTrail />
            <Navbar />
            <main className="pt-24 pb-16">
                <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
                    <SecurityBackground />
                    <div className="container mx-auto px-6 py-20 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                                Enterprise-grade security
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                                Protect your data with advanced encryption, audit logs, and compliance controls.
                            </p>
                            <Button size="lg" className="rounded-full h-12 px-8">
                                Contact Sales
                            </Button>
                        </motion.div>
                    </div>
                </section>

                <section className="container mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: ShieldCheck, title: "SOC 2 Type II", desc: "Compliant with highest industry standards." },
                            { icon: Server, title: "Private Cloud", desc: "Deploy Neqtra in your own VPC." },
                            { icon: Lock, title: "SSO & SAML", desc: "Enforce secure access with your identity provider." },
                            { icon: Fingerprint, title: "Audit Logs", desc: "Track every action and change in your organization." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <item.icon className="w-8 h-8 text-primary mb-4" />
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="container mx-auto px-6 py-20">
                    <div className="rounded-[2rem] bg-white/5 border border-white/10 p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Dedicated Support</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Our team of solution architects and engineers are here to help you scale. Get 24/7 priority support and dedicated Slack channels.
                        </p>
                        <Button variant="outline" className="bg-transparent border-primary/20 text-primary hover:bg-primary/10">
                            View SLA Details
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );

}
