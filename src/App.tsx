import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { OnTapBoard } from './components/OnTapBoard';
import { MenuSection } from './components/MenuSection';
import { GamesAndVibeSection } from './components/GamesAndVibeSection';
import { EventsSection } from './components/EventsSection';
import { FacebookSocialSection } from './components/FacebookSocialSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { OrderCartDrawer } from './components/OrderCartDrawer';
import { PdfMenuModal } from './components/PdfMenuModal';
import { PartyInquiryModal } from './components/PartyInquiryModal';
import { Footer } from './components/Footer';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('benjamins_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('benjamins_cart', JSON.stringify(cartItems));
    } catch {
      // storage error handling
    }
  }, [cartItems]);

  // Section observer for Navbar active indicators
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'story', 'on-tap', 'menu', 'games-vibe', 'events', 'location'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex((ci) => ci.item.id === item.id);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prev, { item, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOnTap = () => {
    const el = document.getElementById('on-tap');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121315] text-[#e3e2e5] flex flex-col selection:bg-amber-500 selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Layout */}
      <main className="flex-1 w-full">
        {/* Hero with WebGL ambient shader */}
        <Hero
          onExploreMenu={scrollToMenu}
          onOpenTap={scrollToOnTap}
        />

        {/* 1973 Heritage & 3D Tactile Medallion */}
        <StorySection />

        {/* Live On Tap Craft Beers Board */}
        <OnTapBoard onAddToCart={handleAddToCart} />

        {/* Scratch Pub Fare Menu */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onOpenPdfMenu={() => setIsPdfModalOpen(true)}
        />

        {/* Games & Vibe (61-Game Arcade, Pool, Sports) */}
        <GamesAndVibeSection />

        {/* Weekly Events (Trivia, Acoustic, Tournaments) */}
        <EventsSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Facebook Community Feed (facebook.com/BenjaminsBangor) */}
        <FacebookSocialSection />

        {/* Location & Operating Hours */}
        <LocationHoursSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals and Drawers */}
      <OrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <PdfMenuModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      <PartyInquiryModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
