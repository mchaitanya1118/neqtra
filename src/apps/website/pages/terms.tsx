import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";


export default function Terms() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="container mx-auto px-6 py-24 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <p className="text-muted-foreground mb-4">Last updated: January 2026</p>
                <div className="space-y-6 text-foreground/80 leading-relaxed">
                    <p>
                        By accessing or using Neqtra, you agree to be bound by these Terms of Service.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 text-foreground">1. Acceptance of Terms</h2>
                    <p>
                        Please read these Terms carefully before using our services. If you do not agree to these Terms, you may not access or use our services.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 text-foreground">2. User Responsibilities</h2>
                    <p>
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree not to use our services for any illegal or unauthorized purpose.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 text-foreground">3. Service Availability</h2>
                    <p>
                        We strive to ensure our services are available 24/7, but we do not guarantee uninterrupted access. We reserve the right to modify or discontinue services at any time.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
