import { Navbar } from "@/components/layout/Navbar";
import { GradientMouseTrail } from "@/components/ui/GradientMouseTrail";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";


export default function Pricing() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
            <GradientMouseTrail />
            <Navbar />
            <main className="pt-24 pb-16">
                <section className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        Simple, transparent pricing
                    </h1>
                    <p className="text-xl text-muted-foreground">Start for free, scale as you grow.</p>
                </section>

                <section className="container mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Starter",
                                price: "$0",
                                desc: "For hobbyists and side projects.",
                                features: ["3 Active Workflows", "100 Executions / mo", "Community Support", "Basic Nodes"]
                            },
                            {
                                name: "Pro",
                                price: "$29",
                                period: "/month",
                                desc: "For growing teams and startups.",
                                features: ["Unlimited Workflows", "10,000 Executions / mo", "Priority Email Support", "Advanced AI Nodes", "Collaboration Tools"],
                                highlight: true
                            },
                            {
                                name: "Enterprise",
                                price: "Custom",
                                desc: "For large organizations.",
                                features: ["Unlimited Executions", "Private Cloud Deployment", "SSO & SAML", "Dedicated Success Manager", "SLA guarantees"]
                            }
                        ].map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`p-8 rounded-3xl border flex flex-col ${plan.highlight ? 'bg-primary/5 border-primary/20 relative' : 'bg-white/5 border-white/10'}`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-primary text-background text-sm font-bold">
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-4">{plan.desc}</p>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm">
                                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-primary" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button className={`w-full ${plan.highlight ? 'bg-primary text-background' : 'bg-white/10 hover:bg-white/20'}`}>
                                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );

}
