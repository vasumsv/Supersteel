import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OpeningAnimation({ onComplete }: { onComplete: () => void }) {
  const [showSkip, setShowSkip] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [logoIntroComplete, setLogoIntroComplete] = useState(false);

  useEffect(() => {
    const logoIntroTimer = setTimeout(() => setLogoIntroComplete(true), 4000);
    const skipTimer = setTimeout(() => setShowSkip(true), 6000);
    const logoTimer = setTimeout(() => setShowLogo(true), 10000);
    const completeTimer = setTimeout(() => onComplete(), 12000);

    return () => {
      clearTimeout(logoIntroTimer);
      clearTimeout(skipTimer);
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-[#e0e5ea] flex items-center justify-center"
    >
      <AnimatePresence>
        {!logoIntroComplete && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            animate={{ scale: [1, 1, 1.15] }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 3.5, times: [0, 0.75, 1], ease: [0.22, 1, 0.36, 1] }
            }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#d5dce3] via-[#e0e5ea] to-[#dae0e6] z-50 overflow-hidden"
          >
            {[...Array(60)].map((_, i) => {
              const size = Math.random() * 6 + 2;
              const isGold = Math.random() > 0.4;
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: isGold
                      ? `radial-gradient(circle, #f4d03f 0%, #f7dc6f 40%, transparent 70%)`
                      : `radial-gradient(circle, #fff 0%, #e8e8e8 40%, transparent 70%)`,
                    boxShadow: isGold
                      ? `0 0 ${size * 2}px rgba(244, 208, 63, 0.8), 0 0 ${size * 4}px rgba(244, 208, 63, 0.4)`
                      : `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`,
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{
                    opacity: [0, 1, 0.9, 0.7, 0],
                    scale: [0, 1.5, 1.8, 1.2, 0],
                    rotate: [0, 180, 360],
                    x: [(Math.random() - 0.5) * 150, (Math.random() - 0.5) * 300],
                    y: [(Math.random() - 0.5) * 150, (Math.random() - 0.5) * 300],
                  }}
                  transition={{
                    duration: 1.5 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2.5,
                    ease: "easeOut"
                  }}
                />
              );
            })}

            {[...Array(20)].map((_, i) => {
              const angle = (i / 20) * Math.PI * 2;
              const distance = 150 + Math.random() * 100;
              return (
                <motion.div
                  key={`star-${i}`}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: '3px',
                    height: '3px',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0, 2, 1.5, 0],
                    x: [0, Math.cos(angle) * distance],
                    y: [0, Math.sin(angle) * distance],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: 2.3 + (i * 0.05),
                    ease: "easeOut"
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: 'radial-gradient(circle, #f4d03f 0%, #f7dc6f 50%, transparent 80%)',
                      boxShadow: '0 0 12px rgba(244, 208, 63, 0.9), 0 0 24px rgba(244, 208, 63, 0.5)',
                    }}
                  />
                </motion.div>
              );
            })}

            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0.6, 0.5, 0] }}
              transition={{
                duration: 4,
                times: [0, 0.3, 0.5, 0.8, 1],
                ease: "easeInOut"
              }}
              style={{
                background: 'radial-gradient(circle at center, rgba(244, 208, 63, 0.15) 0%, rgba(200, 170, 80, 0.1) 40%, transparent 70%)',
              }}
            />

            <motion.div
              style={{ perspective: '2000px' }}
              className="relative z-10"
            >
              <motion.div
                initial={{ y: '120vh', rotateY: 0, scale: 0.5 }}
                animate={{ y: 0, rotateY: 720, scale: [0.5, 1.3, 1.4, 1.4] }}
                transition={{
                  duration: 3.5,
                  ease: [0.22, 1, 0.36, 1],
                  times: [0, 0.6, 0.75, 1],
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.img
                  src="/logo.png"
                  alt="Super Steels"
                  className="h-40 md:h-52 object-contain"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.2)) brightness(1.1)',
                    backfaceVisibility: 'visible',
                  }}
                  animate={{
                    filter: [
                      'drop-shadow(0 25px 50px rgba(0,0,0,0.2)) brightness(1.1)',
                      'drop-shadow(0 35px 70px rgba(244, 208, 63, 0.6)) brightness(1.4)',
                      'drop-shadow(0 30px 60px rgba(244, 208, 63, 0.4)) brightness(1.25)',
                      'drop-shadow(0 30px 60px rgba(244, 208, 63, 0.4)) brightness(1.25)',
                    ]
                  }}
                  transition={{ duration: 3.5, times: [0, 0.5, 0.7, 1] }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.8, 0.7, 0] }}
              transition={{
                duration: 3.5,
                times: [0, 0.45, 0.65, 0.85, 1],
                ease: "easeInOut"
              }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2"
                  style={{
                    background: 'radial-gradient(circle, rgba(244, 208, 63, 0.9) 0%, rgba(247, 220, 111, 0.6) 30%, transparent 70%)',
                    boxShadow: '0 0 20px rgba(244, 208, 63, 0.8)',
                  }}
                  initial={{ scale: 0, x: '-50%', y: '-50%' }}
                  animate={{ scale: [0, 35, 60, 65], opacity: [0.9, 0.5, 0.3, 0] }}
                  transition={{ duration: 3, delay: 0.4 + (i * 0.12), ease: "easeOut" }}
                />
              ))}
            </motion.div>

            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              return (
                <motion.div
                  key={`beam-${i}`}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: '4px',
                    height: '200px',
                    background: 'linear-gradient(to bottom, rgba(244, 208, 63, 0.8) 0%, transparent 100%)',
                    transformOrigin: 'top center',
                    rotate: `${(angle * 180) / Math.PI}deg`,
                  }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: [0, 0.8, 0.6, 0], scaleY: [0, 1.5, 2, 2.2] }}
                  transition={{ duration: 2, delay: 2.3, ease: "easeOut" }}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full h-full relative bg-[#e0e5ea]">
        {/* Grid background matching original scene */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(to right, #c0c4c8 1px, transparent 1px), linear-gradient(to bottom, #c0c4c8 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.35,
        }} />
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <motion.img
            src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/building%20logo%20remove.png"
            alt="Super Steels Office"
            className="max-w-[70%] max-h-[65%] w-auto h-auto object-contain drop-shadow-2xl"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: logoIntroComplete ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-8 left-4 md:bottom-12 md:left-16 text-left pointer-events-none z-10 max-w-[85%] md:max-w-none"
        >
          <h1 className="text-2xl md:text-5xl font-black text-[#222] tracking-tight mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontStretch: 'condensed' }}>
            SUPER STEELS
          </h1>
          <p className="text-xs md:text-base text-[#555] font-medium tracking-wide">
            Structural Steel Supply Since 2003
          </p>
          <p className="text-[10px] md:text-sm text-[#777] font-normal mt-1">
            Mangalore | Udupi | Uttara Kannada
          </p>
        </motion.div>

        <AnimatePresence>
          {showLogo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 1 }}
              className="absolute bottom-6 right-4 md:bottom-12 md:right-16 pointer-events-none z-20"
            >
              <img
                src="/logo.png"
                alt="Super Steels"
                className="h-12 md:h-24 object-contain opacity-90"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSkip && (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleSkip}
              className="absolute top-4 right-4 md:top-8 md:right-8 px-4 py-1.5 md:px-6 md:py-2 bg-white/90 hover:bg-white text-[#222] text-xs md:text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-30 backdrop-blur-sm border border-gray-200"
            >
              Skip
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
