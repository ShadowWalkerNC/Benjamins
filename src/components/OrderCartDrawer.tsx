import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem } from '../types';
import { PUB_INFO } from '../data/pubData';

interface OrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const OrderCartDrawer: React.FC<OrderCartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderType, setOrderType] = useState<'dine-in' | 'pickup'>('dine-in');
  const [tableOrName, setTableOrName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialNote, setSpecialNote] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // Maine state dining tax ~8%
  const total = subtotal + tax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d97706', '#f59e0b', '#ffdcc3', '#ffffff'],
    });
  };

  const handleReset = () => {
    setOrderPlaced(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#18191c] border-l border-zinc-800 shadow-2xl flex flex-col justify-between p-6 sm:p-8">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-xl text-zinc-100 uppercase tracking-wide">
                  Your Pub Tab / Order
                </h3>
                <span className="font-mono text-xs text-amber-400">Benjamin's Pub Bangor</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {orderPlaced ? (
            /* Order Success State */
            <div className="my-auto py-8 text-center space-y-5 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9 text-emerald-400" />
              </div>
              <h4 className="font-headline font-extrabold text-3xl text-zinc-100 uppercase">
                Tab Confirmed!
              </h4>
              <p className="font-sans text-sm text-zinc-300 max-w-xs mx-auto leading-relaxed">
                Your order is sent straight to the Benjamin's basement kitchen. 
                {orderType === 'dine-in' ? (
                  <span className="block mt-2 font-mono text-amber-400 text-xs">
                    Staff will bring it to Table / Bar: <strong>{tableOrName || 'Bar Seat'}</strong>
                  </span>
                ) : (
                  <span className="block mt-2 font-mono text-amber-400 text-xs">
                    Estimated Pickup: <strong>15–20 Mins</strong> at 123 Franklin St.
                  </span>
                )}
              </p>
              <div className="p-4 rounded-2xl bg-[#121315] border border-zinc-800 text-left font-mono text-xs text-zinc-400 space-y-1">
                <div className="flex justify-between text-zinc-200 font-bold">
                  <span>Total Billed:</span>
                  <span className="text-amber-400">${total.toFixed(2)}</span>
                </div>
                <div>Questions? Call bartender: {PUB_INFO.phone}</div>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-headline font-bold uppercase tracking-wider text-sm transition-all"
              >
                Close &amp; Return to Pub
              </button>
            </div>
          ) : (
            /* Cart Items & Checkout */
            <>
              <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <ShoppingBag className="w-12 h-12 text-zinc-600 mx-auto" />
                    <p className="font-headline text-lg uppercase text-zinc-400">
                      Your Tab is Empty
                    </p>
                    <p className="font-sans text-xs text-zinc-500 max-w-xs mx-auto">
                      Explore our scratch pub fare, smash burgers, and fresh local cold drafts on tap!
                    </p>
                  </div>
                ) : (
                  cartItems.map((cartItem, idx) => (
                    <div
                      key={`${cartItem.item.id}-${idx}`}
                      className="p-3.5 rounded-2xl bg-[#121315] border border-zinc-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="font-headline font-bold text-base text-zinc-200 uppercase leading-snug">
                          {cartItem.item.name}
                        </div>
                        <div className="font-mono text-xs text-amber-400">
                          ${cartItem.item.price.toFixed(2)} each
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-[#18191c] px-2 py-1 rounded-xl border border-zinc-800">
                        <button
                          onClick={() => onUpdateQuantity(idx, -1)}
                          className="p-1 text-zinc-400 hover:text-white"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono text-xs font-bold text-zinc-200 w-4 text-center">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, 1)}
                          className="p-1 text-zinc-400 hover:text-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="p-1.5 text-zinc-500 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <form onSubmit={handleCheckout} className="pt-4 border-t border-zinc-800 space-y-4">
                  {/* Order Type Toggle */}
                  <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-[#121315] border border-zinc-800">
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                        orderType === 'dine-in'
                          ? 'bg-amber-500 text-black font-bold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Dine-In / Bar Tab
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('pickup')}
                      className={`py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                        orderType === 'pickup'
                          ? 'bg-amber-500 text-black font-bold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Curbside / Takeout
                    </button>
                  </div>

                  {/* Customer Details */}
                  <div className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder={orderType === 'dine-in' ? 'Table Number or Bar Stool Name' : 'Your Name for Pickup'}
                      value={tableOrName}
                      onChange={(e) => setTableOrName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121315] border border-zinc-700 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (for ready alerts)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121315] border border-zinc-700 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-1.5 font-mono text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ME State Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-amber-400 pt-1 border-t border-zinc-800">
                      <span className="font-headline uppercase">Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-black font-headline font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Order to Kitchen &amp; Bar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
};
