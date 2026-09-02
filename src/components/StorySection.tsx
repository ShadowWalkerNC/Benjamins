import React from 'react';
import { History, Award, Users, ShieldCheck, Clock, Beer, Sparkles } from 'lucide-react';
import { PUB_INFO } from '../data/pubData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 lg:py-24 bg-[#121316] text-[#e3e2e5] border-b border-[#25262c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Framed Tavern Photo & Heritage Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2e303a] bg-[#1a1b1f] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=900&auto=format&fit=crop&q=80"
                alt="Benjamin's Pub Atmosphere"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-80" />

              {/* Inset Photo Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#141518]/90 backdrop-blur border border-[#2b2d35] flex items-center justify-between">
                <div>
                  <span className="font-headline font-bold text-sm text-zinc-100 uppercase block">
                    Downtown Bangor Institution
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400">
                    Franklin Street Basement • Since 1973
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-[#d97706] px-2 py-0.5 rounded bg-[#d97706]/15 border border-[#d97706]/30">
                  50+ Yrs
                </span>
              </div>
            </div>

            {/* Floating Est. 1973 Badge */}
            <div className="absolute -top-3 -left-3 bg-[#1e2026] border border-[#d97706]/60 p-3.5 rounded-xl shadow-lg">
              <span className="font-mono text-[11px] text-[#d97706] uppercase tracking-widest block font-bold">
                ESTABLISHED
              </span>
              <span className="font-headline font-extrabold text-2xl text-zinc-100 leading-none">
                1973
              </span>
            </div>
          </div>

          {/* Right Column: Historical Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#d97706]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#d97706] font-semibold">
                Our Story &amp; Heritage
              </span>
            </div>

            <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-100 uppercase tracking-tight leading-tight">
              50+ Years on <span className="text-[#d97706]">Franklin Street</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
              <p>
                Founded in 1973, <strong className="text-zinc-100">Benjamin's Pub</strong> has been the welcoming cornerstone of Downtown Bangor nightlife for over five decades. It’s an authentic neighborhood sanctuary where the draft beer is poured ice-cold, the pub food is made from scratch, and genuine friendships are made around heavy wooden tables.
              </p>
              <p>
                The legacy began with <strong className="text-[#d97706]">John Parcak</strong>, who built an honest neighborhood tavern for locals. Decades later, that torch was carried forward by <strong className="text-zinc-100">Clarko</strong>, whose warmth and generosity cemented Benjamin's as a community pillar.
              </p>
              <p>
                Today, <strong className="text-zinc-100">Mandy</strong> proudly continues this tradition—preserving the cozy vintage basement vibe while pairing classic rotating Maine craft drafts with a scratch pub menu, pool tables, and Bangor’s favorite retro arcade.
              </p>
            </div>

            {/* Quick Heritage Stat Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#262830]">
              <div className="p-3.5 rounded-xl bg-[#18191d] border border-[#292b33]">
                <div className="font-headline font-bold text-2xl text-[#d97706]">1973</div>
                <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">Founding Year</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#18191d] border border-[#292b33]">
                <div className="font-headline font-bold text-2xl text-zinc-100">61</div>
                <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">Retro Arcade Classics</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#18191d] border border-[#292b33]">
                <div className="font-headline font-bold text-2xl text-emerald-400">8 Taps</div>
                <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">Maine Draft Lines</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
