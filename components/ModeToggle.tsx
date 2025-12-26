'use client'
import React from 'react';
import { useTheme } from 'next-themes';

const CosmicThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <label className="cosmic-toggle">
      <input 
        className="toggle" 
        type="checkbox" 
        checked={isDark}
        onChange={handleToggle}
        aria-label="Toggle theme"
      />
      <div className="slider">
        <div className="cosmos"></div>
        <div className="energy-line"></div>
        <div className="energy-line"></div>
        <div className="energy-line"></div>
        <div className="toggle-orb">
          <div className="inner-orb"></div>
          <div className="ring"></div>
        </div>
        <div className="particles">
          <div style={{ '--angle': '30deg' } as React.CSSProperties} className="particle"></div>
          <div style={{ '--angle': '60deg' } as React.CSSProperties} className="particle"></div>
          <div style={{ '--angle': '90deg' } as React.CSSProperties} className="particle"></div>
          <div style={{ '--angle': '120deg' } as React.CSSProperties} className="particle"></div>
          <div style={{ '--angle': '150deg' } as React.CSSProperties} className="particle"></div>
          <div style={{ '--angle': '180deg' } as React.CSSProperties} className="particle"></div>
        </div>
      </div>

      <style jsx>{`
        .cosmic-toggle {
          position: relative;
          width: 60px;
          height: 30px;
          transform-style: preserve-3d;
          perspective: 500px;
          flex-shrink: 0;
        }

        .toggle {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, oklch(0.967 0.001 286.375), oklch(0.923 0.003 48.717));
          border-radius: 15px;
          transition: 0.5s;
          transform-style: preserve-3d;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 8px rgba(0, 0, 0, 0.02);
          overflow: hidden;
        }

        .cosmos {
          position: absolute;
          inset: 0;
          background: radial-gradient(0.5px 0.5px at 10% 10%, oklch(0.553 0.013 58.071) 100%, transparent),
            radial-gradient(0.5px 0.5px at 20% 20%, oklch(0.553 0.013 58.071) 100%, transparent),
            radial-gradient(1px 1px at 30% 30%, oklch(0.553 0.013 58.071) 100%, transparent),
            radial-gradient(0.5px 0.5px at 40% 40%, oklch(0.553 0.013 58.071) 100%, transparent),
            radial-gradient(1px 1px at 50% 50%, oklch(0.553 0.013 58.071) 100%, transparent),
            radial-gradient(0.5px 0.5px at 60% 60%, oklch(0.553 0.013 58.071) 100%, transparent),
            radial-gradient(1px 1px at 70% 70%, oklch(0.553 0.013 58.071) 100%, transparent),
            radial-gradient(0.5px 0.5px at 80% 80%, oklch(0.553 0.013 58.071) 100%, transparent),
            radial-gradient(0.5px 0.5px at 90% 90%, oklch(0.553 0.013 58.071) 100%, transparent);
          background-size: 200% 200%;
          opacity: 0.1;
          transition: 0.5s;
        }

        .toggle-orb {
          position: absolute;
          height: 26px;
          width: 26px;
          left: 2px;
          bottom: 2px;
          background: linear-gradient(145deg, oklch(0.648 0.2 131.684), oklch(0.768 0.233 130.85));
          border-radius: 50%;
          transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transform-style: preserve-3d;
          z-index: 2;
        }

        .inner-orb {
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: linear-gradient(145deg, oklch(1 0 0), oklch(0.97 0.001 106.424));
          transition: 0.5s;
          overflow: hidden;
        }

        .inner-orb::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(0, 0, 0, 0.05) 10deg,
            transparent 20deg
          );
          animation: patternRotate 10s linear infinite;
        }

        .ring {
          position: absolute;
          inset: -2px;
          border: 1px solid oklch(0.923 0.003 48.717 / 20%);
          border-radius: 50%;
          transition: 0.5s;
        }

        .toggle:checked + .slider {
          background: linear-gradient(45deg, oklch(0.216 0.006 56.043), oklch(0.268 0.007 34.298));
        }

        .toggle:checked + .slider .toggle-orb {
          transform: translateX(30px) rotate(360deg);
          background: linear-gradient(145deg, oklch(0.768 0.233 130.85), oklch(0.648 0.2 131.684));
        }

        .toggle:checked + .slider .inner-orb {
          background: linear-gradient(145deg, oklch(0.648 0.2 131.684), oklch(0.527 0.154 150.069));
          transform: scale(0.9);
        }

        .toggle:checked + .slider .ring {
          border-color: oklch(0.648 0.2 131.684 / 30%);
          animation: ringPulse 2s infinite;
        }

        .energy-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            oklch(0.648 0.2 131.684 / 50%),
            transparent
          );
          transform-origin: left;
          opacity: 0;
          transition: 0.5s;
        }

        .energy-line:nth-child(2) {
          top: 20%;
          transform: rotate(15deg);
        }

        .energy-line:nth-child(3) {
          top: 50%;
          transform: rotate(0deg);
        }

        .energy-line:nth-child(4) {
          top: 80%;
          transform: rotate(-15deg);
        }

        .toggle:checked + .slider .energy-line {
          opacity: 1;
          animation: energyFlow 2s linear infinite;
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: oklch(0.648 0.2 131.684);
          border-radius: 50%;
          opacity: 0;
        }

        .toggle:checked + .slider .particle {
          animation: particleBurst 1s ease-out infinite;
        }

        .particle:nth-child(1) {
          left: 20%;
          animation-delay: 0s;
        }

        .particle:nth-child(2) {
          left: 40%;
          animation-delay: 0.2s;
        }

        .particle:nth-child(3) {
          left: 60%;
          animation-delay: 0.4s;
        }

        .particle:nth-child(4) {
          left: 80%;
          animation-delay: 0.6s;
        }

        .particle:nth-child(5) {
          left: 30%;
          animation-delay: 0.8s;
        }

        .particle:nth-child(6) {
          left: 70%;
          animation-delay: 1s;
        }

        @keyframes ringPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes patternRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes energyFlow {
          0% {
            transform: scaleX(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: scaleX(1) translateX(50%);
            opacity: 1;
          }
          100% {
            transform: scaleX(0) translateX(100%);
            opacity: 0;
          }
        }

        @keyframes particleBurst {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
                calc(cos(var(--angle)) * 25px),
                calc(sin(var(--angle)) * 25px)
              )
              scale(0);
            opacity: 0;
          }
        }

        .slider:hover .toggle-orb {
          filter: brightness(1.2);
          box-shadow: 0 0 10px oklch(0.648 0.2 131.684 / 50%), 0 0 20px oklch(0.648 0.2 131.684 / 30%);
        }

        .slider:hover .cosmos {
          opacity: 0.2;
          animation: cosmosPan 20s linear infinite;
        }

        @keyframes cosmosPan {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 200%;
          }
        }

        .toggle:active + .slider .toggle-orb {
          transform: scale(0.95);
        }

        .cosmic-toggle:hover .slider {
          transform: rotateX(5deg) rotateY(5deg);
        }

        .cosmic-toggle:hover .toggle-orb {
          transform: translateZ(5px);
        }

        .toggle:checked + .slider::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            oklch(0.648 0.2 131.684 / 20%),
            transparent 50%
          );
          opacity: 0;
          animation: glowFollow 2s linear infinite;
        }

        @keyframes glowFollow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </label>
  );
};

export default CosmicThemeToggle;