import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function MouseFollower() {
  const [isClicked, setIsClicked] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Layer 1: Core dot - Ultra fast
  const springCore = { damping: 30, stiffness: 800 };
  const coreX = useSpring(cursorX, springCore);
  const coreY = useSpring(cursorY, springCore);

  // Layer 2: Inner ring - Fast
  const springInner = { damping: 40, stiffness: 400 };
  const innerX = useSpring(cursorX, springInner);
  const innerY = useSpring(cursorY, springInner);

  // Layer 3: Outer glow - Slow/Lazy
  const springOuter = { damping: 60, stiffness: 200 };
  const outerX = useSpring(cursorX, springOuter);
  const outerY = useSpring(cursorY, springOuter);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="hidden md:block">
      {/* Layer 3: Outer Glow - Slowest */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          translateX: outerX,
          translateY: outerY,
          x: "-50%",
          y: "-50%"
        }}
      >
        <motion.div 
          className="w-16 h-16 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(147,51,234,0.08) 50%, transparent 70%)",
          }}
          animate={{
            scale: isClicked ? 0.7 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Layer 2: Inner Ring - Medium Speed */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          translateX: innerX,
          translateY: innerY,
          x: "-50%",
          y: "-50%"
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full border-2"
          style={{
            borderImage: "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(147,51,234,0.6)) 1",
            boxShadow: "0 0 20px rgba(59,130,246,0.4), inset 0 0 20px rgba(147,51,234,0.2)",
          }}
          animate={{
            scale: isClicked ? 0.85 : 1,
            rotate: isClicked ? 90 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Layer 1: Core Dot - Fastest */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          translateX: coreX,
          translateY: coreY,
          x: "-50%",
          y: "-50%"
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(59,130,246,1) 100%)",
            boxShadow: "0 0 15px rgba(59,130,246,0.9), 0 0 5px rgba(255,255,255,0.8)",
          }}
          animate={{
            scale: isClicked ? 1.5 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </div>
  );
}
