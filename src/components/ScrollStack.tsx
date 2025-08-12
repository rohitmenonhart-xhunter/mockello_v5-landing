import { useLayoutEffect, useRef, useCallback } from "react";

interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({ children, itemClassName = "" }: ScrollStackItemProps) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
}

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
}: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollTopRef = useRef(0);
  const scrollVelocityRef = useRef(0);
  const containerDataRef = useRef<{
    top: number;
    height: number;
    bottom: number;
  } | null>(null);
  const cardDataRef = useRef<Array<{
    top: number;
    height: number;
    element: HTMLElement;
  }>>([]);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value.toString());
  }, []);

  const updateContainerData = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    containerDataRef.current = {
      top: rect.top + scrollTop,
      height: container.offsetHeight,
      bottom: rect.top + scrollTop + container.offsetHeight
    };

    // Cache card positions to avoid repeated getBoundingClientRect calls
    const cards = cardsRef.current;
    cardDataRef.current = cards.map(card => {
      const cardRect = card.getBoundingClientRect();
      return {
        top: cardRect.top + scrollTop,
        height: cardRect.height,
        element: card
      };
    });
  }, []);

  // Smooth interpolation function for reducing jitter
  const lerp = useCallback((start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (isUpdatingRef.current || !cardsRef.current.length) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate scroll velocity for smoothing
    const velocity = scrollTop - lastScrollTopRef.current;
    scrollVelocityRef.current = lerp(scrollVelocityRef.current, velocity, 0.1);
    lastScrollTopRef.current = scrollTop;

    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    
    // Use cached container data
    const containerData = containerDataRef.current;
    const cardData = cardDataRef.current;
    if (!containerData || !cardData.length) return;
    
    const endPoint = containerData.bottom - containerHeight / 2;
    let hasAnyChanges = false;

    cardsRef.current.forEach((card, i) => {
      if (!card || !cardData[i]) return;

      // Use cached card position
      const cardTop = cardData[i].top;
      const triggerStart = cardTop - stackPositionPx - (itemStackDistance * i);
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - (itemStackDistance * i);
      const pinEnd = endPoint;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + (i * itemScale);
      let scale = Math.max(0.1, 1 - scaleProgress * (1 - targetScale));
      
      // Smooth scale based on scroll velocity for reduced jitter
      const lastTransform = lastTransformsRef.current.get(i);
      if (lastTransform && Math.abs(scrollVelocityRef.current) > 1) {
        scale = lerp(lastTransform.scale, scale, 0.8);
      }

      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardData.length; j++) {
          const jCardTop = cardData[j].top;
          const jTriggerStart = jCardTop - stackPositionPx - (itemStackDistance * j);
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }
        
        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      
      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + (itemStackDistance * i);
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + (itemStackDistance * i);
      }

      // Smooth translateY for upward scrolling
      if (lastTransform && Math.abs(scrollVelocityRef.current) > 1) {
        translateY = lerp(lastTransform.translateY, translateY, 0.85);
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      // Tighter threshold for upward scrolling
      const threshold = Math.abs(scrollVelocityRef.current) > 2 ? 1.0 : 0.3;
      const hasChanged = !lastTransform || 
        Math.abs(lastTransform.translateY - newTransform.translateY) > threshold ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.008 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > threshold ||
        Math.abs(lastTransform.blur - newTransform.blur) > threshold;

      if (hasChanged) {
        // Use transform3d for better GPU acceleration
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale3d(${newTransform.scale}, ${newTransform.scale}, 1) rotateZ(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        // Apply transforms with proper timing
        requestAnimationFrame(() => {
          card.style.transform = transform;
          card.style.filter = filter;
        });
        
        lastTransformsRef.current.set(i, newTransform);
        hasAnyChanges = true;
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    lerp,
  ]);

  const handleScroll = useCallback(() => {
    // Cancel previous animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Use requestAnimationFrame for smooth updates
    rafRef.current = requestAnimationFrame(() => {
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  const handleResize = useCallback(() => {
    updateContainerData();
    handleScroll();
  }, [updateContainerData, handleScroll]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".scroll-stack-card")) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translate3d(0, 0, 0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
      // Optimize for compositing
      card.style.isolation = 'isolate';
      card.style.contain = 'layout style paint';
    });

    // Cache container and card data
    updateContainerData();

    // Use passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial transform calculation
    updateCardTransforms();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardDataRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
      containerDataRef.current = null;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    onStackComplete,
    handleScroll,
    handleResize,
    updateCardTransforms,
    updateContainerData,
  ]);

  return (
    <div
      className={`relative w-full ${className}`.trim()}
      ref={containerRef}
      style={{
        // Optimize for GPU acceleration
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        contain: 'layout style paint',
      }}
    >
      <div className="relative">
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end w-full h-[50vh]" />
      </div>
    </div>
  );
};

export default ScrollStack; 