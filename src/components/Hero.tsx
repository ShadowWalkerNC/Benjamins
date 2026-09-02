import React, { useState, useEffect } from 'react';
import { Utensils, Beer, MapPin, ArrowRight, Clock, Award } from 'lucide-react';
import { getBenjaminPubStatus } from '../utils/pubStatus';
import { PUB_INFO } from '../data/pubData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenTap: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenTap }) => {
  const [status, setStatus] = useState(getBenjaminPubStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getBenjaminPubStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] flex items-center justify-center pt-24 pb-16 bg-[#121316] text-[#e3e2e5] border-b border-[#25262c]"
    >
      {/* Authentic Tavern Background with Subtle Warmth */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 filter brightness-90"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&auto=format&fit=crop&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#121316]/80 via-[#121316]/90 to-[#121316]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        
        {/* Status Pill */}
        <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1b1c21] border border-[#2f313a] shadow-sm">
          <span className={`inline-block w-2.5 h-2.5 rounded-full ${status.dotColor}`} />
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-200 font-semibold">
            {status.statusText}
          </span>
          <span className="text-zinc-600">•</span>
          <span className="font-mono text-xs text-[#d97706]">
            {status.nextEventText}
          </span>
        </div>

        {/* Established Tag */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[1px] w-8 bg-[#d97706]" />
          <span className="font-mono text-xs text-[#d97706] uppercase tracking-widest font-semibold">
            Franklin Street, Downtown Bangor • Est. 1973
          </span>
          <div className="h-[1px] w-8 bg-[#d97706]" />
        </div>

        {/* Main Display Headline */}
        <h1 className="font-headline font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight uppercase tracking-tight text-zinc-100 mb-5">
          Bangor's Favorite <br />
          <span className="text-[#d97706]">
            Neighborhood Pub
          </span>
        </h1>

        {/* Feature List */}
        <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-8 flex flex-wrap justify-center items-center gap-x-3 gap-y-2 leading-relaxed">
          <span className="text-zinc-200">Rotating Cold Drafts</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-200">Scratch Pub Fare</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-200">Retro Arcade &amp; Pool</span>
          <span className="text-zinc-600">•</span>
          <span className="font-mono text-[#d97706] text-sm sm:text-base font-medium">Open Wed–Sun from 5 PM</span>
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-lg">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-black font-headline font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4" />
            <span>Food &amp; Drinks Menu</span>
          </button>

          <button
            onClick={onOpenTap}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#1e2026] hover:bg-[#282a33] text-zinc-200 hover:text-[#d97706] border border-[#353844] font-headline font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Beer className="w-4 h-4 text-[#d97706]" />
            <span>What's On Tap</span>
          </button>

          <a
            href={PUB_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-[#1e2026] hover:bg-[#282a33] text-zinc-300 hover:text-white border border-[#353844] font-headline font-semibold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#d97706]" />
            <span>Directions</span>
          </a>
        </div>

        {/* Happy Hour strip */}
        <div className="mt-8 px-4 py-2 rounded-lg bg-[#1a1b1f] border border-[#2b2d35] text-zinc-300 text-xs font-mono">
          <strong className="text-[#d97706]">Happy Hour:</strong> Wed–Fri 5:00 PM – 6:30 PM • $1 Off Drafts &amp; $8 Sliders
        </div>

      </div>
    </section>
  );
};
