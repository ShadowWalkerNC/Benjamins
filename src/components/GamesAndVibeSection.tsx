import React, { useState } from 'react';
import { Gamepad2, Trophy, Music, Tv, ChevronRight, X } from 'lucide-react';
import { ARCADE_GAMES } from '../data/pubData';
import { ArcadeGame } from '../types';

export const GamesAndVibeSection: React.FC = () => {
  const [arcadeModalOpen, setArcadeModalOpen] = useState(false);

  return (
    <section id="games-vibe" className="py-16 lg:py-24 bg-[#141518] text-[#e3e2e5] border-b border-[#25262c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-8 bg-[#d97706]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#d97706] font-semibold">
                Pub Atmosphere &amp; Analog Fun
              </span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-100 uppercase tracking-tight">
              Games &amp; Vibe
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
            Unwind in our downtown basement. Play a game of 8-ball on felt tables, drop quarters in the arcade cabinet, or pick tunes on the TouchTunes jukebox.
          </p>
        </div>

        {/* 3 Atmosphere Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: 61-Game Retro Arcade */}
          <div
            onClick={() => setArcadeModalOpen(true)}
            className="bg-[#1a1b1f] rounded-xl overflow-hidden border border-[#2b2d35] hover:border-[#40434e] transition-colors flex flex-col justify-between cursor-pointer group"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121315]">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80"
                alt="Retro Arcade Cabinet"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200"
              />
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-[#d97706] border border-[#d97706]/40 font-bold">
                25¢ CREDITS
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#d97706]">
                  <Gamepad2 className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">61-in-1 Cabinet</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-zinc-100 uppercase mb-1">
                  Retro Arcade Games
                </h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-3">
                  Pac-Man, Galaga, Donkey Kong, Centipede, Street Fighter II, and 56 more classic titles.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-xs text-[#d97706] hover:underline">
                View All 61 Games &amp; High Scores <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Pool & Jukebox */}
          <div className="bg-[#1a1b1f] rounded-xl overflow-hidden border border-[#2b2d35] hover:border-[#40434e] transition-colors flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121315]">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80"
                alt="Pool Table & Tavern Jukebox"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-emerald-400 border border-emerald-800/40 font-bold">
                FREE CUES
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#d97706]">
                  <Music className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Billiards &amp; Music</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-zinc-100 uppercase mb-1">
                  Pool &amp; Digital Jukebox
                </h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  Tournament-grade felt tables under warm pendant lighting. Control the tavern soundtrack from the TouchTunes digital jukebox.
                </p>
              </div>
              <span className="font-mono text-xs text-zinc-500 pt-2">
                Thursday 8-Ball Tournaments
              </span>
            </div>
          </div>

          {/* Card 3: Sports & Cold Beer */}
          <div className="bg-[#1a1b1f] rounded-xl overflow-hidden border border-[#2b2d35] hover:border-[#40434e] transition-colors flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121315]">
              <img
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&auto=format&fit=crop&q=80"
                alt="Sports & Cold Beer Drafts"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-zinc-300 border border-zinc-700 font-bold">
                HD SCREENS
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#d97706]">
                  <Tv className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Game Day Headquarters</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-zinc-100 uppercase mb-1">
                  Sports &amp; Cold Pints
                </h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  Red Sox, Celtics, Bruins, and NFL game broadcasts with local draft specials and half-price wings on Sundays.
                </p>
              </div>
              <span className="font-mono text-xs text-zinc-500 pt-2">
                Live audio on major game nights
              </span>
            </div>
          </div>

        </div>

        {/* High Score Leaderboard Strip */}
        <div className="p-5 rounded-xl bg-[#1a1b1f] border border-[#2b2d35]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#282a32]">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#d97706]" />
              <span className="font-headline font-bold text-base uppercase text-zinc-100">
                Arcade Hall of Fame Top Records
              </span>
            </div>
            <button
              onClick={() => setArcadeModalOpen(true)}
              className="font-mono text-xs text-[#d97706] hover:underline uppercase"
            >
              View Full 61-Game List →
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {ARCADE_GAMES.slice(0, 4).map((game) => (
              <div key={game.id} className="p-3 rounded-lg bg-[#141518] border border-[#25262c]">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-400 mb-0.5">
                  <span className="text-zinc-200 font-semibold">{game.title}</span>
                  <span className="text-[#d97706] font-bold">{game.highScore.initials}</span>
                </div>
                <div className="font-mono font-bold text-sm text-amber-300">
                  {game.highScore.score.toLocaleString()} PTS
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 61-Game Arcade Modal */}
      {arcadeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#1a1b1f] border border-[#3b3e4a] rounded-2xl p-6 shadow-2xl my-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#282a32] mb-5">
              <div>
                <h3 className="font-headline font-bold text-2xl text-zinc-100 uppercase">
                  Benjamin's 61-in-1 Retro Arcade
                </h3>
                <p className="font-mono text-xs text-[#d97706]">
                  25¢ Per Credit • Authentic CRT Display • Downtown Bangor
                </p>
              </div>
              <button
                onClick={() => setArcadeModalOpen(false)}
                className="p-1.5 rounded-lg bg-[#25272f] hover:bg-[#30333e] text-zinc-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List of games */}
            <div className="space-y-2.5 max-h-[55vh] overflow-y-auto pr-2 divide-y divide-[#24262d]">
              {ARCADE_GAMES.map((game, idx) => (
                <div
                  key={game.id}
                  className="pt-2.5 first:pt-0 flex flex-col sm:flex-row justify-between sm:items-center gap-2"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#d97706] font-bold">#{idx + 1}</span>
                      <h4 className="font-headline font-bold text-base text-zinc-200 uppercase">
                        {game.title} ({game.year})
                      </h4>
                      <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-[#25262f] text-zinc-400">
                        {game.genre}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-zinc-400 mt-0.5">
                      {game.description}
                    </p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <div className="font-mono text-[11px] text-zinc-500">Record: {game.highScore.initials}</div>
                    <div className="font-mono text-xs font-bold text-[#d97706]">
                      {game.highScore.score.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-[#282a32] flex justify-between items-center text-xs font-mono text-zinc-400">
              <span>Drop a quarter on Franklin Street!</span>
              <button
                onClick={() => setArcadeModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-black font-bold uppercase text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
