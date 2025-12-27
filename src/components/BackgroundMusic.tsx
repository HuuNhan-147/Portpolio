import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundMusic from "../assets/nhacnen.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControl, setShowControl] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set low volume for subtle background music
    audio.volume = 0.2;
    audio.loop = true;

    let hasStarted = false;

    // Try auto-play on mount
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          hasStarted = true;
        })
        .catch(() => {
          // Auto-play blocked by browser, will try on first user interaction
          setIsPlaying(false);
        });
    }

    // Auto-play on first user interaction (click, scroll, or keypress)
    const startOnInteraction = () => {
      if (!hasStarted && audio.paused) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            hasStarted = true;
            // Remove listeners after first successful play
            document.removeEventListener('click', startOnInteraction);
            document.removeEventListener('scroll', startOnInteraction);
            document.removeEventListener('keydown', startOnInteraction);
          })
          .catch(err => {
            console.log("Play failed:", err);
          });
      }
    };

    // Add event listeners for auto-play on interaction
    document.addEventListener('click', startOnInteraction);
    document.addEventListener('scroll', startOnInteraction);
    document.addEventListener('keydown', startOnInteraction);

    // Auto-hide control after 5 seconds
    const timer = setTimeout(() => {
      setShowControl(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', startOnInteraction);
      document.removeEventListener('scroll', startOnInteraction);
      document.removeEventListener('keydown', startOnInteraction);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => {
        // Auto-play might be blocked by browser
        console.log("Audio play blocked:", err);
      });
    }
    setIsPlaying(!isPlaying);
    setShowControl(true);

    // Hide control after interaction
    setTimeout(() => setShowControl(false), 3000);
  };

  return (
    <>
      <audio ref={audioRef} src={backgroundMusic} />
      
      <AnimatePresence>
        {showControl && (
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            onClick={togglePlay}
            onMouseEnter={() => setShowControl(true)}
            className="fixed bottom-8 right-8 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Volume2 className="w-6 h-6 animate-pulse" />
            ) : (
              <VolumeX className="w-6 h-6" />
            )}
            <span className="absolute -top-12 right-0 bg-dark-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Always show a small indicator when hidden */}
      {!showControl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          onMouseEnter={() => setShowControl(true)}
          className="fixed bottom-8 right-8 z-[9998] w-3 h-3 rounded-full bg-primary-500 cursor-pointer hover:scale-150 transition-transform"
        />
      )}
    </>
  );
}
