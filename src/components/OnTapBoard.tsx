import React, { useState } from 'react';
import { Beer, Star, ExternalLink, Plus, Check, Search, Droplets, Thermometer, Sparkles, SlidersHorizontal, Image as ImageIcon } from 'lucide-react';
import { ON_TAP_BEERS, PUB_INFO } from '../data/pubData';
import { TapBeer, MenuItem } from '../types';

interface OnTapBoardProps {
  onAddToCart: (item: MenuItem) => void;
}

export const OnTapBoard: React.FC<OnTapBoardProps> = ({ onAddToCart }) => {
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [addedTapId, setAddedTapId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'compact'>('cards');

  const styles = [
    { id: 'all', label: 'All Drafts (8)' },
    { id: 'ipa', label: 'IPAs & Hazy' },
    { id: 'lager', label: 'Lagers & Amber' },
    { id: 'dark', label: 'Stout & Porter' },
    { id: 'wheat', label: 'Wheat & Witbier' },
  ];

  const filteredBeers = ON_TAP_BEERS.filter((beer) => {
    const matchesSearch =
      beer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      beer.brewery.toLowerCase().includes(searchQuery.toLowerCase()) ||
      beer.style.toLowerCase().includes(searchQuery.toLowerCase()) ||
      beer.breweryCity.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (selectedStyle === 'all') return true;
    if (selectedStyle === 'ipa') return beer.style.toLowerCase().includes('ipa');
    if (selectedStyle === 'lager') return beer.style.toLowerCase().includes('lager') || beer.style.toLowerCase().includes('red');
    if (selectedStyle === 'dark') return beer.style.toLowerCase().includes('porter') || beer.style.toLowerCase().includes('stout');
    if (selectedStyle === 'wheat') return beer.style.toLowerCase().includes('wheat') || beer.style.toLowerCase().includes('witbier');
    return true;
  });

  const handleAddBeer = (beer: TapBeer, size: 'pint' | 'taster' | 'imperial' = 'pint') => {
    let price = beer.price16oz;
    let sizeLabel = '16oz Pint';
    if (size === 'taster' && beer.priceTaster) {
      price = beer.priceTaster;
      sizeLabel = '5oz Taster';
    } else if (size === 'imperial' && beer.price20oz) {
      price = beer.price20oz;
      sizeLabel = '20oz Imperial';
    }

    const menuItem: MenuItem = {
      id: `${beer.id}-${size}`,
      name: `${beer.name} (${sizeLabel})`,
      description: `${beer.brewery} • ${beer.style} • ${beer.abv}% ABV`,
      price: price,
      category: 'drinks',
      badge: 'LOCAL',
    };
    onAddToCart(menuItem);
    setAddedTapId(`${beer.id}-${size}`);
    setTimeout(() => {
      setAddedTapId(null);
    }, 1200);
  };

  return (
    <section id="on-tap" className="py-16 lg:py-24 bg-[#141518] text-[#e3e2e5] border-t border-b border-[#25262c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* OnTapt / Untappd Style Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#2a2b32]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 rounded bg-[#ffc107]/15 text-[#ffc107] border border-[#ffc107]/30 text-[11px] font-mono font-bold tracking-wider uppercase">
                Untappd Verified Venue
              </span>
              <span className="text-zinc-500 text-xs font-mono">•</span>
              <span className="text-zinc-400 text-xs font-mono">
                Updated Daily from Cold Room Manifold
              </span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-100 uppercase tracking-tight">
              On Tap at Benjamin's
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl mt-1">
              Live digital draft board. Explore flavor profiles, Untappd ratings, brewing locations, and pour sizes.
            </p>
          </div>

          {/* Quick Stats / View Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center bg-[#1c1d22] border border-[#2a2b32] rounded-lg p-1">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors ${
                  viewMode === 'cards'
                    ? 'bg-[#d97706] text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Cards View
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors ${
                  viewMode === 'compact'
                    ? 'bg-[#d97706] text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                List View
              </button>
            </div>

            <a
              href="https://untappd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25272f] hover:bg-[#2e313b] text-zinc-200 hover:text-[#ffc107] border border-[#373943] text-xs font-mono uppercase tracking-wider transition-colors"
            >
              <span>Untappd Venue</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Style Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors border ${
                  selectedStyle === style.id
                    ? 'bg-[#d97706] text-black font-bold border-[#d97706]'
                    : 'bg-[#1b1c20] text-zinc-300 hover:text-white border-[#2c2e35] hover:border-zinc-600'
                }`}
              >
                {style.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search beer, brewery, city..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#1b1c20] border border-[#2c2e35] text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#d97706]"
            />
          </div>
        </div>

        {/* CARDS VIEW: Rich OnTapt Style Cards */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredBeers.map((beer) => {
              const pintAdded = addedTapId === `${beer.id}-pint`;
              return (
                <div
                  key={beer.id}
                  className="bg-[#1a1b1f] rounded-xl border border-[#2b2d35] hover:border-[#40434e] transition-colors flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Bar: Tap Number & Badge */}
                  <div className="p-4 pb-0 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#272830] text-[#d97706] border border-[#383a45] font-headline font-bold text-xs">
                        #{beer.tapNumber}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wide">
                        {beer.servingType || 'CO2 Draft'}
                      </span>
                    </div>

                    {beer.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#d97706]/15 text-[#d97706] border border-[#d97706]/30 font-bold uppercase tracking-wider">
                        {beer.badge}
                      </span>
                    )}
                  </div>

                  {/* Beer Image Holder Container (Holding images now & ready for custom uploaded images later) */}
                  <div className="px-4 pt-3">
                    <div className="relative aspect-[16/10] w-full rounded-lg bg-[#121315] border border-[#282a32] overflow-hidden group">
                      {beer.imageUrl ? (
                        <img
                          src={beer.imageUrl}
                          alt={beer.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            // Fallback if image fails
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600">
                          <ImageIcon className="w-8 h-8 mb-1 opacity-50" />
                          <span className="text-[10px] font-mono uppercase tracking-wider">Beer Art</span>
                        </div>
                      )}

                      {/* Color swatch indicator pill */}
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur border border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-white/20"
                          style={{ backgroundColor: beer.colorHex }}
                        />
                        <span>{beer.temp || '38°F'}</span>
                      </div>

                      {/* Untappd Rating Score Pill */}
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur border border-[#ffc107]/40 flex items-center gap-1 text-[10px] font-mono font-bold text-[#ffc107]">
                        <Star className="w-3 h-3 fill-[#ffc107]" />
                        <span>{beer.untappdRating.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Beer Info */}
                  <div className="p-4 space-y-2">
                    <div>
                      <div className="flex items-baseline justify-between gap-1">
                        <span className="text-[11px] font-mono text-zinc-400">
                          {beer.breweryCity}, {beer.breweryState}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {beer.untappdRatingCount} ratings
                        </span>
                      </div>
                      <h4 className="font-headline font-bold text-lg text-zinc-100 uppercase tracking-tight leading-snug line-clamp-1">
                        {beer.name}
                      </h4>
                      <div className="text-xs text-[#d97706] font-medium line-clamp-1">
                        {beer.brewery}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                        {beer.style}
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans pt-1">
                      {beer.description}
                    </p>
                  </div>

                  {/* Specs & Pricing Footer */}
                  <div className="p-4 pt-0 space-y-3">
                    {/* Technical Specs Bar */}
                    <div className="flex items-center justify-between text-xs font-mono py-2 border-t border-b border-[#282a32] text-zinc-300">
                      <div>
                        <strong className="text-zinc-100 font-bold">{beer.abv}%</strong> ABV
                      </div>
                      {beer.ibu && (
                        <div>
                          <strong className="text-zinc-100 font-bold">{beer.ibu}</strong> IBU
                        </div>
                      )}
                      <div className="text-[#d97706] font-bold text-sm">
                        ${beer.price16oz.toFixed(2)}
                      </div>
                    </div>

                    {/* Keg Level */}
                    <div>
                      <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-1">
                        <span>Keg Fill</span>
                        <span>{beer.remainingPercent}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#121315] overflow-hidden border border-[#282a32]">
                        <div
                          className={`h-full rounded-full ${
                            beer.remainingPercent > 50
                              ? 'bg-[#d97706]'
                              : beer.remainingPercent > 20
                              ? 'bg-amber-600'
                              : 'bg-rose-500'
                          }`}
                          style={{ width: `${beer.remainingPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Action Buttons: Add to Tab & Untappd Check-in */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => handleAddBeer(beer, 'pint')}
                        className={`py-2 px-2.5 rounded-lg font-headline text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-colors ${
                          pintAdded
                            ? 'bg-emerald-500 text-black font-bold'
                            : 'bg-[#d97706] hover:bg-[#b45309] text-black font-bold'
                        }`}
                      >
                        {pintAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        <span>{pintAdded ? 'Added' : 'Order Pint'}</span>
                      </button>

                      {beer.priceTaster ? (
                        <button
                          onClick={() => handleAddBeer(beer, 'taster')}
                          className="py-2 px-2 rounded-lg bg-[#25272f] hover:bg-[#30333d] text-zinc-200 font-mono text-[11px] uppercase tracking-wider border border-[#383a45] transition-colors"
                        >
                          Taster ${beer.priceTaster.toFixed(2)}
                        </button>
                      ) : (
                        <a
                          href={beer.untappdUrl || "https://untappd.com"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-2 rounded-lg bg-[#25272f] hover:bg-[#30333d] text-zinc-300 hover:text-[#ffc107] font-mono text-[11px] uppercase tracking-wider border border-[#383a45] flex items-center justify-center gap-1 transition-colors"
                        >
                          <span>Untappd</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* COMPACT LIST VIEW: OnTapt style Table Layout */}
        {viewMode === 'compact' && (
          <div className="bg-[#1a1b1f] rounded-xl border border-[#2b2d35] overflow-hidden divide-y divide-[#282a32]">
            {filteredBeers.map((beer) => {
              const isAdded = addedTapId === `${beer.id}-pint`;
              return (
                <div
                  key={beer.id}
                  className="p-4 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 hover:bg-[#202128] transition-colors"
                >
                  {/* Left: Tap # + Thumbnail image + Beer Name */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-9 h-9 rounded-lg bg-[#25262f] border border-[#383a46] flex items-center justify-center font-headline font-bold text-[#d97706] text-sm shrink-0">
                      #{beer.tapNumber}
                    </div>

                    {/* Image slot thumbnail */}
                    <div className="w-14 h-14 rounded-lg bg-[#121315] border border-[#2c2e36] overflow-hidden shrink-0 hidden sm:block">
                      {beer.imageUrl ? (
                        <img
                          src={beer.imageUrl}
                          alt={beer.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-600">
                          <Beer className="w-5 h-5 opacity-40" />
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-headline font-bold text-lg text-zinc-100 uppercase tracking-tight">
                          {beer.name}
                        </h4>
                        {beer.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-[#d97706]/15 text-[#d97706] border border-[#d97706]/30 font-bold uppercase">
                            {beer.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-zinc-400 font-sans">
                        <strong className="text-[#d97706] font-medium">{beer.brewery}</strong> • {beer.breweryCity}, {beer.breweryState} • <span className="font-mono text-zinc-300">{beer.style}</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 max-w-2xl font-sans line-clamp-1">
                        {beer.description}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Specs & Untappd Rating */}
                  <div className="flex items-center gap-6 text-xs font-mono text-zinc-300 shrink-0">
                    <div className="flex items-center gap-1.5 text-[#ffc107]">
                      <Star className="w-4 h-4 fill-[#ffc107]" />
                      <span className="font-bold">{beer.untappdRating.toFixed(2)}</span>
                      <span className="text-[10px] text-zinc-500">({beer.untappdRatingCount})</span>
                    </div>

                    <div>
                      <strong className="text-zinc-100">{beer.abv}%</strong> ABV
                    </div>

                    {beer.ibu && (
                      <div className="hidden sm:block">
                        <strong className="text-zinc-100">{beer.ibu}</strong> IBU
                      </div>
                    )}

                    <div className="font-headline font-bold text-base text-[#d97706]">
                      ${beer.price16oz.toFixed(2)}
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-2 shrink-0 w-full lg:w-auto justify-end">
                    <button
                      onClick={() => handleAddBeer(beer, 'pint')}
                      className={`py-2 px-4 rounded-lg font-headline text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
                        isAdded
                          ? 'bg-emerald-500 text-black font-bold'
                          : 'bg-[#d97706] hover:bg-[#b45309] text-black font-bold'
                      }`}
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{isAdded ? 'Added' : 'Order Pint'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty state */}
        {filteredBeers.length === 0 && (
          <div className="text-center py-12 bg-[#1a1b1f] rounded-xl border border-[#2b2d35] text-zinc-400 font-mono text-xs">
            No draft beers found matching "{searchQuery}". Try searching for "IPA", "Maine", or "Stout".
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-[#25262c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            Keg inventory synced live • 32oz Crowlers &amp; 64oz Growler fills available to-go
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>Flight of 4 (5oz each): $13.00</span>
          </div>
        </div>

      </div>
    </section>
  );
};
