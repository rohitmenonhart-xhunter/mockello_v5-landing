import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface IntroVideoProps {
  onVideoEnd: () => void;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ onVideoEnd }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log('IntroVideo component mounted');
    const video = videoRef.current;
    if (!video) {
      console.error('Video element not found');
      return;
    }

    console.log('Setting up video event listeners');

    const handleLoadedData = () => {
      console.log('Video loaded successfully');
      setIsVideoLoaded(true);
      setVideoError(null);
      // Auto-play the video once loaded
      video.play().catch((error) => {
        console.error('Auto-play failed:', error);
        setVideoError('Auto-play failed. Click to play manually.');
        // If auto-play fails, still show the video with play button
        setIsVideoLoaded(true);
      });
    };

    const handleCanPlay = () => {
      console.log('Video can play');
      setIsVideoLoaded(true);
      setVideoError(null);
    };

    const handleEnded = () => {
      console.log('Video playback ended');
      setIsVideoEnded(true);
      // Start transition after a brief delay
      setTimeout(() => {
        setIsTransitioning(true);
        // Complete the transition and notify parent
        setTimeout(() => {
          console.log('Calling onVideoEnd');
          onVideoEnd();
        }, 1000); // 1 second transition duration
      }, 500); // 0.5 second delay before starting transition
    };

    const handleError = (error: any) => {
      console.error('Video failed to load:', error);
      console.log('Video element error:', video.error);
      setVideoError(`Video load failed: ${video.error?.message || 'Unknown error'}`);
      console.log('Video error occurred, but not auto-skipping');
      // Don't immediately skip - let user choose
    };

    const handleLoadStart = () => {
      console.log('Video load started');
      setVideoError(null);
    };

    const handlePlay = () => {
      console.log('Video started playing');
    };

    const handlePause = () => {
      console.log('Video paused');
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Try to load the video
    console.log('Loading video from: /introvideo/intro.mp4');
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [onVideoEnd]);

  // Manual play handler if auto-play fails
  const handleManualPlay = () => {
    console.log('Manual play button clicked');
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
  };

  // Skip button handler
  const handleSkip = () => {
    console.log('Skip button clicked');
    setIsTransitioning(true);
    setTimeout(() => {
      onVideoEnd();
    }, 1000);
  };

  console.log('IntroVideo render - isVideoLoaded:', isVideoLoaded, 'videoError:', videoError, 'isTransitioning:', isTransitioning);

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center transition-all duration-1000",
        isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
      )}
      style={{
        background: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(59,130,246,0.1) 100%)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xl" />
      
      {/* Video container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Circular video frame */}
        <div 
          className={cn(
            "relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl transition-all duration-1000",
            isVideoLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0",
            "ring-4 ring-white/30 ring-offset-4 ring-offset-transparent"
          )}
        >
          {/* Video element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
            controls={false}
            style={{
              filter: 'brightness(1.2) contrast(1.1) saturate(1.1)',
              backgroundColor: '#1a1a1a'
            }}
          >
            <source src="/introvideo/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video overlay for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Loading overlay */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-pulse-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4 mx-auto"></div>
                <p className="text-white font-medium">
                  {videoError ? videoError : 'Loading intro video...'}
                </p>
                <button 
                  onClick={() => onVideoEnd()}
                  className="mt-4 px-4 py-2 bg-white/20 text-white text-sm rounded-lg hover:bg-white/30 transition-colors"
                >
                  Skip to Website
                </button>
                {videoError && (
                  <p className="text-white/60 text-xs mt-2">
                    Video path: /introvideo/intro.mp4
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Manual play button if needed */}
          {isVideoLoaded && videoRef.current?.paused && !isVideoEnded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                onClick={handleManualPlay}
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 border border-white/30"
              >
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Skip button */}
        {isVideoLoaded && !isVideoEnded && (
          <button
            onClick={handleSkip}
            className={cn(
              "absolute top-8 right-8 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full",
              "hover:bg-white/20 transition-all duration-200 text-sm font-medium",
              "border border-white/20 hover:border-white/30"
            )}
          >
            Skip Intro
          </button>
        )}

        {/* Progress indicator */}
        {isVideoLoaded && !isVideoEnded && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-white/50 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroVideo; 