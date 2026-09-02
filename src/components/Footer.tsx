import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, Beer } from 'lucide-react';
import { PUB_INFO } from '../data/pubData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0e0f12] border-t border-[#25262c] text-zinc-400 font-sans pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#202127]">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#d97706] flex items-center justify-center font-headline font-bold text-black text-sm">
                B
              </div>
              <div>
                <span className="font-headline font-bold text-xl text-zinc-100 uppercase tracking-wider block leading-none">
                  Benjamin's
                </span>
                <span className="font-mono text-[10px] text-[#d97706] uppercase tracking-widest">
                  Est. 1973 • Bangor, Maine
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Downtown Bangor's historic neighborhood basement tavern. Cold drafts on tap, scratch pub fare, 61-game retro arcade, and pool since 1973.
            </p>
            <div className="pt-1">
              <a
                href={PUB_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#70a5ff] hover:underline"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>facebook.com/BenjaminsBangor</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm uppercase text-zinc-200 tracking-wider">
              Explore Pub
            </h4>
            <ul className="space-y-1.5 text-xs font-mono uppercase tracking-wider">
              <li>
                <a href="#story" className="hover:text-[#d97706] transition-colors">Our 1973 Story</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d97706] transition-colors">Scratch Pub Menu</a>
              </li>
              <li>
                <a href="#on-tap" className="hover:text-[#d97706] transition-colors flex items-center gap-1 text-[#d97706]">
                  <Beer className="w-3.5 h-3.5" />
                  <span>On Tap Drafts</span>
                </a>
              </li>
              <li>
                <a href="#games-vibe" className="hover:text-[#d97706] transition-colors">61-Game Arcade &amp; Pool</a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#d97706] transition-colors">Weekly Events</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#d97706] transition-colors">Location &amp; Live Map</a>
              </li>
            </ul>
          </div>

          {/* Weekly Hours */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm uppercase text-zinc-200 tracking-wider">
              Hours of Operation
            </h4>
            <ul className="space-y-1 text-xs font-mono">
              <li className="flex justify-between text-zinc-300">
                <span>Wednesday - Sunday</span>
                <span className="text-[#d97706] font-semibold">5:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-zinc-500">
                <span>Monday &amp; Tuesday</span>
                <span className="text-rose-400">Closed</span>
              </li>
              <li className="text-[11px] text-zinc-500 pt-2 border-t border-[#202127]">
                Happy Hour: Wed-Fri 5:00 PM - 6:30 PM
              </li>
            </ul>
          </div>

          {/* Location & Directions */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm uppercase text-zinc-200 tracking-wider">
              Location
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                <span>123 Franklin Street, Bangor, Maine 04401</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d97706] shrink-0" />
                <a href={`tel:${PUB_INFO.rawPhone}`} className="hover:text-white font-mono">
                  {PUB_INFO.phone}
                </a>
              </div>
            </div>
            <div className="pt-1">
              <a
                href={PUB_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3.5 py-1.5 rounded-lg bg-[#1a1b1f] hover:bg-[#25262f] text-zinc-200 text-xs font-mono uppercase tracking-wider border border-[#2b2d35] transition-colors"
              >
                Open Google Maps →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Benjamin's Pub. All rights reserved. Bangor, ME.
          </div>
          <div className="flex items-center gap-3">
            <span>Bangor Neighborhood Hospitality</span>
            <span>•</span>
            <a href="#hero" className="text-[#d97706] hover:underline">
              Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
