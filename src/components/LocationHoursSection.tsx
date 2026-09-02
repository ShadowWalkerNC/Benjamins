import React from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar, Car, Mail, CheckCircle, ExternalLink, Compass } from 'lucide-react';
import { PUB_INFO } from '../data/pubData';
import { getBenjaminPubStatus } from '../utils/pubStatus';

interface LocationHoursSectionProps {
  onOpenBooking: () => void;
}

export const LocationHoursSection: React.FC<LocationHoursSectionProps> = ({ onOpenBooking }) => {
  const status = getBenjaminPubStatus();

  return (
    <section id="location" className="py-16 lg:py-24 bg-[#121316] text-[#e3e2e5] border-t border-[#25262c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-[#d97706] uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Downtown Bangor, Maine • 123 Franklin St</span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-100 uppercase tracking-tight">
            Find Benjamin's Pub
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Right in the heart of Downtown Bangor. Look for our vintage pub sign and step down into Bangor's coziest neighborhood basement tavern.
          </p>
        </div>

        {/* Bento Grid: Live Map, Hours, Party Inquiries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Column 1: Live Interactive Google Map (6 cols) */}
          <div className="lg:col-span-6 bg-[#1a1b1f] rounded-2xl p-5 sm:p-7 border border-[#2b2d35] flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline font-bold text-xl text-zinc-100 uppercase flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#d97706]" />
                  <span>Live Location &amp; Directions</span>
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                  Live Interactive Map
                </span>
              </div>
              
              {/* LIVE GOOGLE MAP EMBED */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#30333e] bg-[#121315] shadow-inner">
                <iframe
                  title="Benjamin's Pub Live Google Map"
                  src="https://maps.google.com/maps?q=123+Franklin+Street,+Bangor,+ME+04401&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-105"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Address & Parking info */}
              <div className="mt-4 space-y-2.5 text-xs text-zinc-400 font-sans">
                <div className="flex items-start gap-2 bg-[#141518] p-3 rounded-lg border border-[#282931]">
                  <MapPin className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-200 block">Benjamin's Pub</strong>
                    <span>123 Franklin Street, Bangor, ME 04401</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                  <span>
                    <strong>Parking:</strong> Free street parking on Franklin &amp; Central St after 5:00 PM and all weekend.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#282a32] flex flex-col sm:flex-row gap-2.5">
              <a
                href={PUB_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-black font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span>Get Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:${PUB_INFO.rawPhone}`}
                className="py-2.5 px-4 rounded-lg bg-[#25272f] hover:bg-[#2f323c] text-zinc-200 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#383a45] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d97706]" />
                <span>Call ({PUB_INFO.phone})</span>
              </a>
            </div>
          </div>

          {/* Column 2: Hours of Operation (3 cols) */}
          <div className="lg:col-span-3 bg-[#1a1b1f] rounded-2xl p-5 sm:p-7 border border-[#2b2d35] flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#282a32] mb-4">
                <h3 className="font-headline font-bold text-xl text-zinc-100 uppercase flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d97706]" />
                  <span>Pub Hours</span>
                </h3>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                  status.isOpen ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {status.statusText}
                </span>
              </div>

              <ul className="space-y-2.5 font-mono text-xs uppercase">
                {PUB_INFO.hours.map((schedule) => (
                  <li
                    key={schedule.day}
                    className="flex justify-between items-center py-1 border-b border-[#24262d]"
                  >
                    <span className={schedule.isOpen ? 'text-zinc-200' : 'text-zinc-500'}>
                      {schedule.day}
                    </span>
                    <span className={schedule.isOpen ? 'text-[#d97706] font-semibold' : 'text-rose-400'}>
                      {schedule.isOpen ? `${schedule.open} - ${schedule.close}` : 'Closed'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-[#141518] border border-[#262830] text-xs text-zinc-400 font-sans">
              <strong className="text-zinc-200 block mb-0.5">Kitchen Hours:</strong>
              Scratch menu served until 10:30 PM nightly. Late-night drinks and arcade until 11:00 PM.
            </div>
          </div>

          {/* Column 3: Party & Event Bookings (3 cols) */}
          <div className="lg:col-span-3 bg-[#1a1b1f] rounded-2xl p-5 sm:p-7 border border-[#2b2d35] flex flex-col justify-between space-y-5">
            <div>
              <h3 className="font-headline font-bold text-xl text-zinc-100 uppercase mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#d97706]" />
                <span>Gatherings</span>
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-4">
                Planning a birthday, trivia team get-together, or friendly pool tournament? Reserve our basement corner tables.
              </p>
              
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-black font-headline font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Inquire About Space</span>
              </button>
            </div>

            <div className="pt-4 border-t border-[#282a32] space-y-2">
              <div className="font-headline font-bold text-xs text-zinc-300 uppercase">
                Official Channels
              </div>
              <a
                href={PUB_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#70a5ff] hover:underline"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>facebook.com/BenjaminsBangor</span>
              </a>
              <a
                href={`mailto:${PUB_INFO.email}`}
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#d97706]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PUB_INFO.email}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
