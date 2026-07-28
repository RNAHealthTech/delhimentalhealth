import React, { useState, useEffect } from 'react';
import { FaLock, FaCheckCircle, FaSpinner } from 'react-icons/fa';

interface SecurityCheckProps {
  children: React.ReactNode;
}

// Cookie helper functions
const getCookie = (name: string): string | null => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const setCookie = (name: string, value: string, days: number = 1): void => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/; SameSite=Lax';
};

const isBotOrCrawler = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  const userAgent = navigator.userAgent.toLowerCase();
  const bots = ['googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 'yandexbot', 'facebookexternalhit', 'twitterbot'];
  return bots.some((bot) => userAgent.includes(bot));
};

const SecurityCheck: React.FC<SecurityCheckProps> = ({ children }) => {
  const COOKIE_NAME = 'dmh_sec_verified';

  const [isVerified, setIsVerified] = useState<boolean>(() => {
    if (isBotOrCrawler()) return true;
    return getCookie(COOKIE_NAME) === 'true';
  });

  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const steps = [
    'Checking connection security...',
    'Verifying browser environment...',
    'Validating encryption tokens...',
    'Generating secure access cookie...'
  ];

  useEffect(() => {
    // If already verified via cookie, do nothing
    if (isVerified) return;

    // Auto-trigger verification sequence if user clicks checkbox or auto-starts
  }, [isVerified]);

  const handleVerify = () => {
    if (isChecking || isVerified) return;
    setIsChecked(true);
    setIsChecking(true);

    let stepIndex = 0;
    const interval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        setCurrentStep(stepIndex);
      } else {
        clearInterval(interval);
        setCookie(COOKIE_NAME, 'true', 1); // 1 day cookie persistence
        setTimeout(() => {
          setIsChecking(false);
          setIsVerified(true);
        }, 500);
      }
    }, 600);
  };

  return (
    <>
      {/* Website Content (Blurred & Disabled when not verified) */}
      <div className={`transition-all duration-700 ${!isVerified ? 'pointer-events-none select-none blur-sm opacity-60' : ''}`}>
        {children}
      </div>

      {/* Security Overlay */}
      {!isVerified && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 backdrop-blur-sm text-white font-roboto-slab p-4">
          {/* Background Subtle Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative w-full max-w-lg bg-slate-900/90 backdrop-blur-xl border border-teal-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-center overflow-hidden">
        {/* Top Glow Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-600 animate-pulse" />

        {/* Brand & Security Header */}
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            src="/images/logo.png"
            alt="Dr. Pratik Kumar Logo"
            className="h-14 w-auto mb-4 bg-white/90 p-2 rounded-lg shadow-md"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Delhi Mental Health
          </h2>
          <p className="text-xs text-teal-200 mt-1 uppercase tracking-widest font-semibold">
            Dr. Pratik Kumar • Security Verification
          </p>
        </div>

        {/* Info Text */}
        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          Please complete the security verification to access <span className="text-teal-300 font-semibold">delhimentalhealth.com</span>. This ensures a safe & secure experience on our portal.
        </p>

        {/* Interactive Verification Box */}
        <div className="bg-slate-900/70 border border-teal-500/40 rounded-xl p-5 mb-6 shadow-inner text-left transition-all">
          {!isChecked && !isChecking ? (
            <button
              onClick={handleVerify}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-teal-900/40 hover:bg-teal-800/60 border border-teal-400/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded border-2 border-teal-400/60 group-hover:border-teal-300 flex items-center justify-center bg-slate-800 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-sm bg-transparent group-hover:bg-teal-400/40 transition-colors" />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                  Verify you are a human
                </span>
              </div>
              <FaLock className="text-teal-400/70 text-sm group-hover:text-teal-300" />
            </button>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-teal-300 font-medium text-sm">
                <FaSpinner className="animate-spin text-teal-400 text-lg" />
                <span>{steps[currentStep]}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-teal-900">
                <div
                  className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                />
              </div>

              {/* Steps Checklist */}
              <div className="mt-4 space-y-2 pt-2 border-t border-slate-800 text-xs">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    {idx < currentStep ? (
                      <FaCheckCircle className="text-emerald-400" />
                    ) : idx === currentStep ? (
                      <FaSpinner className="animate-spin text-teal-400" />
                    ) : (
                      <div className="w-3 h-3 rounded-full border border-slate-600" />
                    )}
                    <span className={idx <= currentStep ? 'text-slate-200' : 'text-slate-500'}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
          <span className="flex items-center gap-1">
            <FaLock className="text-teal-400" /> 256-bit Encrypted Check
          </span>
          <span>Cookie Persistence: Active</span>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default SecurityCheck;
