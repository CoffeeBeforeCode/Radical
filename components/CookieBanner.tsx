import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('pc-cookie-consent');
    if (!cookieChoice) {
      setIsVisible(true);
    } else {
      setIsAccepted(cookieChoice === 'accepted');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pc-cookie-consent', 'accepted');
    setIsAccepted(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('pc-cookie-consent', 'declined');
    setIsAccepted(false);
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
      <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-out">
        <div className="bg-[#1A365D] border-t-4 border-[#F96E1E] shadow-2xl">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 items-center">
              
              {/* Content Section - Takes up 2/3 on desktop */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-bold text-white font-['Waiting_for_the_Sunrise']">
                  We value your privacy
                </h3>
                <p className="text-[#F8F5EB] text-sm leading-relaxed">
                  This website uses cookies to improve your browsing experience and 
                  help us understand how you interact with our content. We use 
                  essential cookies for website functionality and optional analytics 
                  cookies to help us improve our services.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a 
                    href="/legal/cookies" 
                    className="text-[#F96E1E] hover:text-white underline transition-colors"
                  >
                    Cookie Policy
                  </a>
                  <span className="text-[#F8F5EB]">•</span>
                  <a 
                    href="/legal/privacy" 
                    className="text-[#F96E1E] hover:text-white underline transition-colors"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>

              {/* Action Buttons - Takes up 1/3 on desktop */}
              <div className="flex flex-col gap-3 lg:items-end">
                <button
                  onClick={handleAccept}
                  className="w-full lg:w-auto bg-[#F96E1E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#E55A0F] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2 focus:ring-offset-[#1A365D]"
                >
                  Accept All Cookies
                </button>
                <div className="flex gap-3 w-full lg:w-auto">
                  <button
                    onClick={handleDecline}
                    className="flex-1 lg:flex-none bg-transparent border border-[#F8F5EB] text-[#F8F5EB] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#F8F5EB] hover:text-[#1A365D] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F8F5EB] focus:ring-offset-2 focus:ring-offset-[#1A365D]"
                  >
                    Essential Only
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 lg:flex-none bg-transparent text-[#F8F5EB] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#F8F5EB]/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F8F5EB] focus:ring-offset-2 focus:ring-offset-[#1A365D]"
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
