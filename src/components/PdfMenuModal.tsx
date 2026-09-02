import React from 'react';
import { X, Printer, Download, Sparkles, Beer } from 'lucide-react';
import { MENU_ITEMS, ON_TAP_BEERS, PUB_INFO } from '../data/pubData';

interface PdfMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfMenuModal: React.FC<PdfMenuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-4xl bg-[#18191c] border border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl my-8">
        
        {/* Controls Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-8 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-amber-400 uppercase tracking-wider">
              Benjamin's Pub • Official Menu Sheet
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-headline font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Vintage Menu Printable Paper */}
        <div className="bg-[#121315] border border-amber-500/30 rounded-2xl p-6 sm:p-10 text-zinc-200 font-sans space-y-8 print:border-none print:p-0">
          {/* Header */}
          <div className="text-center pb-6 border-b-2 border-amber-500/40 space-y-2">
            <div className="font-mono text-xs text-amber-400 uppercase tracking-widest">
              ★ ESTABLISHED 1973 • BANGOR, MAINE ★
            </div>
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl text-zinc-100 uppercase tracking-tight">
              BENJAMIN'S PUB
            </h1>
            <p className="font-mono text-xs text-zinc-400">
              123 Franklin Street • Bangor, ME 04401 • Tel: (207) 307-7545
            </p>
          </div>

          {/* Starters & Shareables */}
          <div>
            <h3 className="font-headline font-bold text-2xl text-amber-400 uppercase tracking-wider border-b border-zinc-800 pb-2 mb-4">
              Starters &amp; Scratch Shareables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {MENU_ITEMS.filter((i) => i.category === 'starters').map((item) => (
                <div key={item.id} className="flex justify-between items-baseline gap-2">
                  <div className="flex-1">
                    <div className="font-headline font-bold text-base text-zinc-100 uppercase">
                      {item.name}
                    </div>
                    <div className="text-xs text-zinc-400 leading-snug">{item.description}</div>
                  </div>
                  <div className="font-mono font-bold text-amber-400 shrink-0">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Burgers & Mains */}
          <div>
            <h3 className="font-headline font-bold text-2xl text-amber-400 uppercase tracking-wider border-b border-zinc-800 pb-2 mb-4">
              Burgers &amp; Pub Mains
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {MENU_ITEMS.filter((i) => i.category === 'mains').map((item) => (
                <div key={item.id} className="flex justify-between items-baseline gap-2">
                  <div className="flex-1">
                    <div className="font-headline font-bold text-base text-zinc-100 uppercase">
                      {item.name}
                    </div>
                    <div className="text-xs text-zinc-400 leading-snug">{item.description}</div>
                  </div>
                  <div className="font-mono font-bold text-amber-400 shrink-0">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* On Tap & Cocktails */}
          <div>
            <h3 className="font-headline font-bold text-2xl text-amber-400 uppercase tracking-wider border-b border-zinc-800 pb-2 mb-4 flex items-center gap-2">
              <Beer className="w-5 h-5" />
              <span>Cold Drafts &amp; House Cocktails</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {ON_TAP_BEERS.slice(0, 6).map((beer) => (
                <div key={beer.id} className="flex justify-between items-baseline gap-2">
                  <div className="flex-1">
                    <div className="font-headline font-bold text-base text-zinc-100 uppercase">
                      #{beer.tapNumber} {beer.name} — {beer.brewery}
                    </div>
                    <div className="text-xs text-zinc-400">{beer.style} • {beer.abv}% ABV • {beer.breweryCity}, {beer.breweryState}</div>
                  </div>
                  <div className="font-mono font-bold text-amber-400 shrink-0">
                    ${beer.price16oz.toFixed(2)}
                  </div>
                </div>
              ))}
              {MENU_ITEMS.filter((i) => i.category === 'drinks').slice(0, 2).map((item) => (
                <div key={item.id} className="flex justify-between items-baseline gap-2">
                  <div className="flex-1">
                    <div className="font-headline font-bold text-base text-zinc-100 uppercase">
                      {item.name}
                    </div>
                    <div className="text-xs text-zinc-400 leading-snug">{item.description}</div>
                  </div>
                  <div className="font-mono font-bold text-amber-400 shrink-0">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h3 className="font-headline font-bold text-2xl text-amber-400 uppercase tracking-wider border-b border-zinc-800 pb-2 mb-4">
              Desserts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {MENU_ITEMS.filter((i) => i.category === 'desserts').map((item) => (
                <div key={item.id} className="flex justify-between items-baseline gap-2">
                  <div className="flex-1">
                    <div className="font-headline font-bold text-base text-zinc-100 uppercase">
                      {item.name}
                    </div>
                    <div className="text-xs text-zinc-400 leading-snug">{item.description}</div>
                  </div>
                  <div className="font-mono font-bold text-amber-400 shrink-0">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-6 border-t border-zinc-800 font-mono text-xs text-zinc-500">
            Open Wednesday through Sunday 5:00 PM to 11:00 PM • Closed Monday &amp; Tuesday
          </div>
        </div>

      </div>
    </div>
  );
};
