import { Link } from "wouter";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-black/20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-xl tracking-tight">neqtra</span>
                    <span className="text-muted-foreground text-sm">© 2026</span>
                </div>

                <div className="flex gap-8 text-sm text-muted-foreground">
                    <Link href="/privacy">
                        <a className="hover:text-primary transition-colors">Privacy</a>
                    </Link>
                    <Link href="/terms">
                        <a className="hover:text-primary transition-colors">Terms</a>
                    </Link>
                    <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                    <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
