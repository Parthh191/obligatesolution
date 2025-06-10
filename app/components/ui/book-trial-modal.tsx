"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './button';

interface BookTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookTrialModal({ isOpen, onClose }: BookTrialModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTime: '',
    experience: 'beginner'
  });

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-gray-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-lg bg-gray-900 rounded-2xl shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-2xl blur-sm" />
        
        <div className="relative p-6 sm:p-8">
          <div className="absolute top-6 right-6">
            <button
              onClick={onClose}
              className="rounded-full p-1 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
              aria-label="Close modal"
            >
              <Image
                src="https://www.svgrepo.com/show/499459/close.svg"
                width={24}
                height={24}
                alt=""
                className="text-current"
              />
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-indigo-500/10">
              <Image
                src="https://www.svgrepo.com/show/530235/calendar.svg"
                width={24}
                height={24}
                alt=""
                className="text-indigo-400"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Book Your Free Trial</h2>
              <p className="text-gray-400 text-sm">Schedule a personalized session with our expert mentors</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="flex gap-2 text-sm font-medium text-gray-300 mb-2">
                <Image
                  src="https://www.svgrepo.com/show/530410/user.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="text-indigo-400"
                />
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="flex gap-2 text-sm font-medium text-gray-300 mb-2">
                <Image
                  src="https://www.svgrepo.com/show/530272/mail.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="text-indigo-400"
                />
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="flex gap-2 text-sm font-medium text-gray-300 mb-2">
                <Image
                  src="https://www.svgrepo.com/show/530407/telephone.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="text-indigo-400"
                />
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="flex gap-2 text-sm font-medium text-gray-300 mb-2">
                <Image
                  src="https://www.svgrepo.com/show/530405/stopwatch.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="text-indigo-400"
                />
                Preferred Time Slot
              </label>
              <select
                id="preferredTime"
                required
                className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              >
                <option value="">Select a time slot</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 9 PM)</option>
              </select>
            </div>

            <div>
              <label htmlFor="experience" className="flex gap-2 text-sm font-medium text-gray-300 mb-2">
                <Image
                  src="https://www.svgrepo.com/show/530228/diamond.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="text-indigo-400"
                />
                Coding Experience
              </label>
              <select
                id="experience"
                required
                className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Schedule Trial
              <Image
                src="https://www.svgrepo.com/show/530324/send-2.svg"
                width={20}
                height={20}
                alt=""
                className="ml-2"
              />
            </Button>
          </form>

          {/* Trust badges */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="https://www.svgrepo.com/show/530380/shield-check.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="text-indigo-400"
                />
                <span className="text-xs text-gray-400">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="https://www.svgrepo.com/show/530412/video-camera.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="text-indigo-400"
                />
                <span className="text-xs text-gray-400">Live 1-on-1</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="https://www.svgrepo.com/show/530279/money.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="text-indigo-400"
                />
                <span className="text-xs text-gray-400">Free Trial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}