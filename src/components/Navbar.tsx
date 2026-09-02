import React, { useState, useEffect } from 'react';
import { Phone, ShoppingBag, Menu as MenuIcon, X, Beer, Calendar, ExternalLink } from 'lucide-react';
import { getBenjaminPubStatus } from '../utils/pubStatus';
import { PUB_INFO } from '../data/pubData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenBooking,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getBenjaminPubStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const timer = setInterval(() => {
      setStatus(getBenjaminPubStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story', id: 'story' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'On Tap', href: '#on-tap', id: 'on-tap', badge: 'Live' },
    { name: 'Games & Vibe', href: '#games-vibe', id: 'games-vibe' },
    { name: 'Events', href: '#events', id: 'events' },
    { name: 'Location & Map', href: '#location', id: 'location' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-200 ${
          isScrolled
            ? 'bg-[#141518]/95 backdrop-blur-md border-b border-[#25262c] shadow-md py-3'
            : 'bg-[#121316]/90 backdrop-blur-sm border-b border-[#25262c]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-[#d97706] flex items-center justify-center font-headline font-bold text-black text-lg">
              B
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline font-bold text-xl text-zinc-100 uppercase tracking-wide group-hover:text-[#d97706] transition-colors">
                  Benjamin's
                </span>
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-[#d97706]/15 text-[#d97706] border border-[#d97706]/30 uppercase font-bold">
                  Est. 1973
                </span>
              </div>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider hidden sm:inline-block">
                Franklin St • Bangor, ME
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`font-headline text-[14px] uppercase tracking-wider transition-colors py-1 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#d97706] font-bold border-b-2 border-[#d97706]'
                      : 'text-zinc-300 hover:text-[#d97706]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[9px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Status pill (desktop) */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#1a1b1f] border border-[#2b2d35] text-[11px] font-mono text-zinc-300">
              <span className={`w-2 h-2 rounded-full ${status.dotColor}`} />
              <span>{status.statusText}</span>
            </div>

            {/* Call Now */}
            <a
              href={`tel:${PUB_INFO.rawPhone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1b1f] hover:bg-[#262830] text-zinc-200 text-xs font-mono uppercase tracking-wider border border-[#2b2d35] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d97706]" />
              <span>{PUB_INFO.phone}</span>
            </a>

            {/* Online Order / Cart Button */}
            <button
              onClick={onOpenCart}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-black font-headline font-bold text-xs uppercase tracking-wider transition-colors"
              aria-label="View Order Tab"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden xs:inline">Order Tab</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-[#d97706] text-[10px] font-mono font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#1a1b1f] text-zinc-200 hover:text-white border border-[#2b2d35]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/90 backdrop-blur-sm pt-20 pb-6 px-5 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <div className="p-3.5 rounded-xl bg-[#1a1b1f] border border-[#2b2d35] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${status.dotColor}`} />
                <div>
                  <div className="text-xs font-mono font-bold text-zinc-200 uppercase">{status.statusText}</div>
                  <div className="text-[10px] text-zinc-400">{status.nextEventText}</div>
                </div>
              </div>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-lg font-headline text-base uppercase tracking-wider text-zinc-200 hover:text-[#d97706] hover:bg-[#1a1b1f] transition-colors"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.2 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#25262c] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-[#1a1b1f] hover:bg-[#24262f] text-zinc-200 font-headline uppercase tracking-wider text-xs flex items-center justify-center gap-2 border border-[#2b2d35]"
              >
                <Calendar className="w-4 h-4 text-[#d97706]" />
                <span>Reserve Space / Inquiry</span>
              </button>

              <a
                href={`tel:${PUB_INFO.rawPhone}`}
                className="w-full py-2.5 px-3 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-black font-headline font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Pub ({PUB_INFO.phone})</span>
              </a>

              <a
                href={PUB_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-[#1877f2]/15 text-[#70a5ff] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#1877f2]/30"
              >
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-xs font-mono text-zinc-500">
            123 Franklin St, Bangor, ME • Est. 1973
          </div>
        </div>
      )}
    </>
  );
};
