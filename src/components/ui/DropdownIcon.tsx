import { useRef, useEffect } from 'react';
import { Lottie, LottieSubscription, type LottieHandle } from 'lottie-react';
import dropdownAnimation from '../../assets/animations/dropdown.json';

interface DropdownIconProps {
  isOpen: boolean;
  size?: number;
  className?: string;
}

/**
 * Animated dropdown toggle icon using Lottie.
 * Animates between plus (+) and minus (−) states.
 * 
 * Animation segments:
 *   0 → 60:  Plus collapses → Minus appears  (opening)
 *  60 → 120: Minus collapses → Plus appears  (closing)
 */
export default function DropdownIcon({ isOpen, size = 24, className = '' }: DropdownIconProps) {
  const lottieRef = useRef<LottieHandle>(null);
  const hasInitialized = useRef(false);
  const prevOpen = useRef(isOpen);

  useEffect(() => {
    const lottie = lottieRef.current;
    if (!lottie) return;

    // After initialization, animate on state change
    if (!hasInitialized.current) return;
    if (prevOpen.current === isOpen) return;

    if (isOpen) {
      // Opening: play from plus to minus (frames 0 → 60)
      lottie.playSegments([0, 60]);
    } else {
      // Closing: play from minus to plus (frames 60, 120)
      lottie.playSegments([60, 120]);
    }

    prevOpen.current = isOpen;
  }, [isOpen]);

  return (
    <Lottie
      src={dropdownAnimation}
      lottieRef={lottieRef}
      autoplay={false}
      loop={false}
      className={`dropdown-icon ${className}`}
      style={{ width: size, height: size, display: 'inline-flex', flexShrink: 0 }}
      subscriptions={{
        [LottieSubscription.ready]: () => {
          const lottie = lottieRef.current;
          if (!lottie) return;
          // Set initial position without animation
          if (isOpen) {
            lottie.seek({ frame: 59 });
          } else {
            lottie.seek({ frame: 0 });
          }
          hasInitialized.current = true;
        }
      }}
    />
  );
}
