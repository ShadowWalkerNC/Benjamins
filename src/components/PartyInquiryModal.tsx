import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PUB_INFO } from '../data/pubData';

interface PartyInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartyInquiryModal: React.FC<PartyInquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Pool Table Reservation',
    partySize: '4-6 Guests',
    preferredDate: '',
    preferredTime: '7:00 PM',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#d97706', '#f59e0b', '#ffdcc3'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-lg bg-[#18191c] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9 text-emerald-400" />
            </div>
            <h3 className="font-headline font-bold text-2xl text-zinc-100 uppercase">
              Inquiry Received!
            </h3>
            <p className="font-sans text-sm text-zinc-300 leading-relaxed">
              Thanks <strong>{formData.name}</strong>! Mandy &amp; the Benjamin's team will give you a call or text at <strong>{formData.phone}</strong> to confirm your basement space and answer any questions.
            </p>
            <div className="p-4 rounded-xl bg-[#121315] border border-zinc-800 text-xs font-mono text-zinc-400">
              Need immediate confirmation? Call the pub during open hours: <strong>{PUB_INFO.phone}</strong>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-headline font-bold uppercase tracking-wider text-sm transition-all"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-2xl text-zinc-100 uppercase">
                  Reserve Space / Party
                </h3>
                <p className="font-mono text-xs text-amber-400">
                  Pool Table, Birthday Bash, Trivia Team &amp; Gatherings
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121315] border border-zinc-700 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="(207) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121315] border border-zinc-700 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Occasion / Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121315] border border-zinc-700 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  >
                    <option>Pool Table Reservation</option>
                    <option>Birthday Party</option>
                    <option>Trivia Team Table (Wed)</option>
                    <option>Dart League / Watch Party</option>
                    <option>Full Basement Section Rental</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Party Size</label>
                  <select
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121315] border border-zinc-700 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  >
                    <option>2-4 Guests</option>
                    <option>5-8 Guests</option>
                    <option>9-15 Guests</option>
                    <option>16-30+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121315] border border-zinc-700 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Arrival Time</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121315] border border-zinc-700 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  >
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Notes / Requests (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Special requests, food platters, favorite beers on tap..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#121315] border border-zinc-700 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-black font-headline font-bold uppercase tracking-wider text-sm transition-colors"
              >
                Send Inquiry to Mandy &amp; Staff
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
