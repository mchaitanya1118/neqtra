import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";


export default function Privacy() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="container mx-auto px-6 py-24 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-muted-foreground mb-4">Last updated: January 2026</p>
                <div className="space-y-6 text-foreground/80 leading-relaxed">
                    <p>
                        At Neqtra, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 text-foreground">1. Data Collection</h2>
                    <p>
                        We collect information you provide directly to us, such as when you create an account, create a workflow, or contact support. This may include your name, email address, and usage data.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 text-foreground">2. Usage of Data</h2>
                    <p>
                        We use your data to provide, maintain, and improve our services, including processing transactions, authenticating users, and analyzing usage patterns.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 text-foreground">3. Data Protection</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect the security of your personal information.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
