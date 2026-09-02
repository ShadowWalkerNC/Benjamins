import React, { useState } from 'react';
import { Download, Plus, Check, Flame, Star, Utensils } from 'lucide-react';
import { MENU_ITEMS } from '../data/pubData';
import { MenuItem, MenuCategory } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenPdfMenu: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onOpenPdfMenu }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Fare' },
    { id: 'starters', label: 'Starters & Shareables' },
    { id: 'mains', label: 'Burgers & Mains' },
    { id: 'drinks', label: 'Cocktails & House Drinks' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleAddItem = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => {
      setAddedItemId(null);
    }, 1200);
  };

  return (
    <section id="menu" className="py-16 lg:py-24 bg-[#121316] text-[#e3e2e5] border-b border-[#25262c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2026] border border-[#2e303c] text-[#d97706] font-mono text-xs uppercase tracking-widest">
            <Utensils className="w-3.5 h-3.5" />
            Scratch Kitchen Open 5 PM – 10:30 PM
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-100 uppercase tracking-tight">
            Scratch Pub Fare
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Honest pub comfort food, cooked to order. From our 1973 smash burger to fresh Maine haddock fish &amp; chips.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="menu-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-colors border ${
                activeCategory === cat.id
                  ? 'bg-[#d97706] text-black font-bold border-[#d97706]'
                  : 'bg-[#1a1b1f] text-zinc-300 hover:text-white border-[#2b2d35] hover:border-zinc-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8" id="menu-grid">
          {filteredItems.map((item) => {
            const isAdded = addedItemId === item.id;
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between border-b border-[#25262c] pb-6 hover:border-[#3a3d48] transition-colors"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 pr-2">
                    {/* Item Title & Badges */}
                    <div className="flex items-center flex-wrap gap-2 mb-1">
                      <h3 className="font-headline font-bold text-lg sm:text-xl text-zinc-100 uppercase tracking-tight">
                        {item.name}
                      </h3>
                      {item.badge === 'HOT' && (
                        <span className="inline-flex items-center gap-0.5 bg-red-950 text-red-400 text-[10px] px-1.5 py-0.2 rounded font-mono font-bold border border-red-800/40">
                          <Flame className="w-2.5 h-2.5" /> SPICY
                        </span>
                      )}
                      {item.badge === 'FAV' && (
                        <span className="inline-flex items-center gap-0.5 bg-[#d97706]/15 text-[#d97706] text-[10px] px-1.5 py-0.2 rounded font-mono font-bold border border-[#d97706]/30">
                          <Star className="w-2.5 h-2.5 fill-[#d97706]" /> POPULAR
                        </span>
                      )}
                      {item.badge === 'HOUSE' && (
                        <span className="bg-[#24262f] text-zinc-300 text-[10px] px-1.5 py-0.2 rounded font-mono border border-[#363844]">
                          HOUSE
                        </span>
                      )}
                      {item.badge === 'LOCAL' && (
                        <span className="bg-emerald-950 text-emerald-300 text-[10px] px-1.5 py-0.2 rounded font-mono border border-emerald-800/40">
                          MAINE
                        </span>
                      )}
                    </div>

                    {/* Item Description */}
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Allergens */}
                    {item.allergens && item.allergens.length > 0 && (
                      <div className="mt-2 text-[11px] font-mono text-zinc-500">
                        Contains: {item.allergens.join(', ')}
                      </div>
                    )}
                  </div>

                  {/* Price & Action */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="font-mono text-base sm:text-lg font-bold text-[#d97706]">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddItem(item)}
                      aria-label={`Add ${item.name} to order`}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                        isAdded
                          ? 'bg-emerald-500 text-black font-bold'
                          : 'bg-[#25272f] hover:bg-[#d97706] text-zinc-200 hover:text-black border border-[#383a46] hover:border-[#d97706]'
                      }`}
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{isAdded ? 'Added' : 'Add'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Download PDF Menu Option */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenPdfMenu}
            className="inline-flex items-center gap-2 text-[#d97706] hover:text-amber-400 font-mono text-xs uppercase tracking-wider border-b border-[#d97706]/40 hover:border-[#d97706] pb-1 cursor-pointer transition-colors"
          >
            <span>Download Full Print Menu &amp; Specials (PDF)</span>
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
