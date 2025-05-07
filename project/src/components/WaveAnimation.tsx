import React from 'react';

const WaveAnimation: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
      <svg
        className="relative block w-full h-[60px] min-w-[1000px]"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.5)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.5)" />
          </linearGradient>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>

        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="url(#wave-gradient)"
            opacity="0.7"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="15s"
              calcMode="spline"
              values="-270;-150"
              keyTimes="0;1"
              keySplines="0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="url(#wave-gradient)"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="18s"
              calcMode="spline"
              values="-150;-360"
              keyTimes="0;1"
              keySplines="0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="url(#wave-gradient)"
            opacity="0.3"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="20s"
              calcMode="spline"
              values="-360;-180"
              keyTimes="0;1"
              keySplines="0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill="url(#wave-gradient)"
            opacity="0.2"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="25s"
              calcMode="spline"
              values="-180;-300"
              keyTimes="0;1"
              keySplines="0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>
    </div>
  );
};

export default WaveAnimation;