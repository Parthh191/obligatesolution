"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './button';
import { BookTrialModal } from './book-trial-modal';

export function StickyCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-t border-gray-800/50 py-3 sm:py-4 transform transition-all duration-300 ease-in-out translate-y-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
              <div className="text-center sm:text-left">
                <div className="text-base sm:text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to start your journey?
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Book a free trial session today</p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-800" />
              <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {[
                  { text: '500+ Students', icon: '👥' },
                  { text: '50+ Mentors', icon: '👨‍💻' },
                  { text: '95% Success Rate', icon: '📈' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <span role="img" aria-label="icon" className="text-lg sm:text-xl">
                      {item.icon}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <Button
                size="lg"
                className="relative group overflow-hidden rounded-full px-6 sm:px-8 w-full sm:w-auto hover:cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform group-hover:scale-[1.1] duration-500" />
                <span className="relative">Book Free Trial</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BookTrialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}