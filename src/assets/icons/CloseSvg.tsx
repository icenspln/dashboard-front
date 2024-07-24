// src/components/CloseSvg.tsx
import React from 'react';

const CloseSvg: React.FC = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_95_42402)">
        <circle cx="24" cy="24" r="20" fill="#FFF2F2" />
      </g>
      <path
        d="M16 16L32 32"
        stroke="#F25959"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 16L16 32"
        stroke="#F25959"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <filter id="filter0_d_95_42402" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_95_42402" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_95_42402" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default CloseSvg;
