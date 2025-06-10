"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import { BookTrialModal } from '../ui/book-trial-modal';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-gray-950 py-12 sm:py-20 md:py-28 lg:py-32">
        {/* Background gradient effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6 sm:mb-8 animate-fade-in">
                <span className="relative flex h-2.5 sm:h-3 w-2.5 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 sm:h-3 w-2.5 sm:w-3 bg-indigo-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-300">Transform your coding journey</span>
              </div>

              {/* Main heading */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4 sm:mb-6">
                Learn to Code with Expert 1-on-1 Mentorship
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Get personalized guidance from industry experts and accelerate your journey to becoming a professional developer. Learn at your own pace with real-world projects.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full xs:w-auto cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 hover:from-indigo-500 hover:to-purple-500 active:scale-95"
                >
                  Book a Free Trial
                </button>
                <button className="w-full xs:w-auto cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-gray-700 text-gray-300 font-semibold transition-all duration-300 hover:bg-gray-800 hover:border-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/10 transform hover:translate-x-1 active:scale-95">
                  Explore Curriculum →
                </button>
              </div>

              {/* Social proof */}
              <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <div className="flex -space-x-2">
                  {Array(4).fill(0).map((_, i) => (
                    <div key={i} className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-400">👤</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                    <span className="text-xs sm:text-sm font-medium text-gray-300">500+ Active Students</span>
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-400 text-center xs:text-left">Join our growing community</div>
                </div>
              </div>
            </div>

            {/* Right side image/code section */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-30 blur-2xl animate-pulse" />
                </div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1">
                  <div className="h-[480px] w-full rounded-xl bg-gray-950 p-4 overflow-hidden">
                    <pre className="text-sm text-gray-400">
                      <code>{`// Your journey starts here
function learnToCode() {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Data Structures",
    "Algorithms"
  ];
  
  return skills.map(skill => 
    master(skill)
  );
}

// Start your coding journey
learnToCode();`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookTrialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}