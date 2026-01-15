import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Cpu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">neqtra</span>
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
