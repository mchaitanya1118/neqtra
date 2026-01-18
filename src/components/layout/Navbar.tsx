import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/use-auth";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-foreground/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="neqtra logo"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">neqtra</span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Platform", "Solutions", "Developers", "Enterprise", "Pricing"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
            >
              <a className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium cursor-pointer">
                {item}
              </a>
            </Link>
          ))}

        </div>

        <div className="hidden md:flex items-center gap-4">
          {!isAuthenticated ? (
            <Link href="/login">
              <a className="text-sm font-medium hover:text-white transition-colors">Sign In</a>
            </Link>
          ) : (
            <Link href="/console">
              <Button className="bg-primary text-background hover:bg-primary/90 font-bold px-6">
                Launch Console
              </Button>
            </Link>
          )}
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
              {["Platform", "Solutions", "Developers", "Enterprise", "Pricing"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`}>
                  <a className="text-lg font-medium text-muted-foreground hover:text-primary cursor-pointer">
                    {item}
                  </a>
                </Link>
              ))}

              <div className="h-px bg-white/5 my-2" />
              {!isAuthenticated ? (
                <Link href="/login">
                  <a className="text-lg font-medium">Sign In</a>
                </Link>
              ) : (
                <Link href="/console">
                  <Button className="w-full bg-primary text-background font-bold">
                    Launch Console
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
