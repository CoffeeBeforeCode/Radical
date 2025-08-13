import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('pc-cookie-consent');
    if (!cookieChoice) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pc-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('pc-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        aria-hidden="true"
      />
      
      {/* Cookie Banner */}
      <div className="fixed inset-x-0 bottom-0 z-50 transition-transform duration-500 ease-out">
        <div className="bg-[#1A365D] border-t-4 border-[#F96E1E] shadow-2xl">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 items-center">
              
              {/* Content Section - Takes up 2/3 on desktop */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-['Waiting_for_the_Sunrise'] text-xl font-bold text-white">
                  We value your privacy
                </h3>
                <p className="text-sm leading-relaxed text-[#F8F5EB]">
                  This website uses cookies to improve your browsing experience and 
                  help us understand how you interact with our content. We use 
                  essential cookies for website functionality and optional analytics 
                  cookies to help us improve our services.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link 
                    href="/legal/cookies" 
                    className="text-[#F96E1E] underline transition-colors hover:text-white"
                  >
                    Cookie Policy
                  </Link>
                  <span className="text-[#F8F5EB]">•</span>
                  <Link 
                    href="/legal/privacy" 
                    className="text-[#F96E1E] underline transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              {/* Action Buttons - Takes up 1/3 on desktop */}
              <div className="flex flex-col gap-3 lg:items-end">
                <button
                  onClick={handleAccept}
                  className="w-full rounded-lg bg-[#F96E1E] px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#E55A0F] focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2 focus:ring-offset-[#1A365D] lg:w-auto"
                >
                  Accept All Cookies
                </button>
                <div className="flex w-full gap-3 lg:w-auto">
                  <button
                    onClick={handleDecline}
                    className="flex-1 rounded-lg border border-[#F8F5EB] bg-transparent px-4 py-2 text-sm font-medium text-[#F8F5EB] transition-colors duration-200 hover:bg-[#F8F5EB] hover:text-[#1A365D] focus:outline-none focus:ring-2 focus:ring-[#F8F5EB] focus:ring-offset-2 focus:ring-offset-[#1A365D] lg:flex-none"
                  >
                    Essential Only
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 rounded-lg bg-transparent px-4 py-2 text-sm font-medium text-[#F8F5EB] transition-colors duration-200 hover:bg-[#F8F5EB]/10 focus:outline-none focus:ring-2 focus:ring-[#F8F5EB] focus:ring-offset-2 focus:ring-offset-[#1A365D] lg:flex-none"
                  >
                    Customize
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
