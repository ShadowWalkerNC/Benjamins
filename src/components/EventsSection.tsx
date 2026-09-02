import React from 'react';
import { Calendar, Music2, Trophy, Clock, Sparkles } from 'lucide-react';
import { PUB_EVENTS } from '../data/pubData';

interface EventsSectionProps {
  onOpenBooking: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenBooking }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'trivia':
        return <Trophy className="w-4 h-4 text-[#d97706]" />;
      case 'music':
        return <Music2 className="w-4 h-4 text-[#d97706]" />;
      case 'pool':
        return <Sparkles className="w-4 h-4 text-[#d97706]" />;
      default:
        return <Calendar className="w-4 h-4 text-[#d97706]" />;
    }
  };

  return (
    <section id="events" className="py-16 lg:py-24 bg-[#121316] text-[#e3e2e5] border-b border-[#25262c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-8 bg-[#d97706]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#d97706] font-semibold">
                Weekly Happenings
              </span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-100 uppercase tracking-tight">
              Events &amp; Nights
            </h2>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-black font-headline font-bold text-xs uppercase tracking-wider transition-colors self-start md:self-auto flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Table / Private Gathering</span>
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PUB_EVENTS.map((event) => (
            <div
              key={event.id}
              className={`rounded-xl p-5 sm:p-6 flex flex-col justify-between border ${
                event.featured
                  ? 'bg-[#1e2026] border-[#d97706]/50 shadow-sm'
                  : 'bg-[#18191d] border-[#292b33] hover:border-[#383a45]'
              }`}
            >
              <div>
                {/* Event Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#25272f] border border-[#383a46] flex items-center justify-center">
                      {getCategoryIcon(event.category)}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#d97706] uppercase tracking-wide">
                      {event.day}
                    </span>
                  </div>
                  {event.featured && (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#d97706] text-black font-bold uppercase">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="font-headline font-bold text-xl text-zinc-100 uppercase mb-2">
                  {event.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                  {event.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#25262c] flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>{event.time}</span>
                </div>
                <span className="text-[#d97706] font-semibold">No Cover</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
