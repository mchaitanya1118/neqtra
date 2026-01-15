import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Network } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 blur-sm rounded-lg group-hover:bg-primary/30 transition-colors" />
              <div className="relative w-full h-full rounded-lg bg-background border border-primary/40 flex items-center justify-center group-hover:border-primary transition-colors overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <Network className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <span className="font-display text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">neqtra</span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Platform", "Solutions", "Developers", "Enterprise"].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium hover:text-white transition-colors">Sign In</a>
          <Button className="bg-primary text-background hover:bg-primary/90 font-bold px-6">
            Launch Console
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-muted-foreground hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/5 bg-background"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {["Platform", "Solutions", "Developers", "Enterprise"].map((item) => (
                <a key={item} href="#" className="text-lg font-medium text-muted-foreground hover:text-primary">
                  {item}
                </a>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <a href="#" className="text-lg font-medium">Sign In</a>
              <Button className="w-full bg-primary text-background font-bold">
                Launch Console
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
