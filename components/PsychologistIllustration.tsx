export default function PsychologistIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="100" fill="url(#bgGradient)" />

      {/* Body / blouse */}
      <ellipse cx="100" cy="175" rx="52" ry="38" fill="#e8e0f5" />
      <ellipse cx="100" cy="168" rx="38" ry="30" fill="#f0ebfb" />

      {/* Collar / scarf detail */}
      <path d="M82 148 Q100 158 118 148 L115 165 Q100 172 85 165 Z" fill="#c8bfe7" />

      {/* Neck */}
      <rect x="91" y="128" width="18" height="24" rx="9" fill="#f5cba7" />

      {/* Head */}
      <ellipse cx="100" cy="108" rx="30" ry="33" fill="#f5cba7" />

      {/* Hair */}
      <ellipse cx="100" cy="88" rx="31" ry="20" fill="#5c3d2e" />
      <ellipse cx="100" cy="82" rx="28" ry="16" fill="#6b4423" />
      {/* Hair sides */}
      <ellipse cx="72" cy="105" rx="10" ry="18" fill="#5c3d2e" />
      <ellipse cx="128" cy="105" rx="10" ry="18" fill="#5c3d2e" />
      {/* Hair bun / top */}
      <ellipse cx="100" cy="74" rx="18" ry="12" fill="#6b4423" />
      {/* Hair flowing down */}
      <path d="M70 100 Q65 125 68 145" stroke="#5c3d2e" strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M130 100 Q135 125 132 145" stroke="#5c3d2e" strokeWidth="10" strokeLinecap="round" fill="none"/>

      {/* Ears */}
      <ellipse cx="70" cy="110" rx="5" ry="7" fill="#f0b97d" />
      <ellipse cx="130" cy="110" rx="5" ry="7" fill="#f0b97d" />

      {/* Eyes */}
      <ellipse cx="88" cy="108" rx="5" ry="5.5" fill="white" />
      <ellipse cx="112" cy="108" rx="5" ry="5.5" fill="white" />
      <circle cx="89" cy="109" r="3" fill="#3d2b1f" />
      <circle cx="113" cy="109" r="3" fill="#3d2b1f" />
      <circle cx="90" cy="108" r="1" fill="white" />
      <circle cx="114" cy="108" r="1" fill="white" />

      {/* Eyebrows */}
      <path d="M83 101 Q88 98 93 101" stroke="#5c3d2e" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M107 101 Q112 98 117 101" stroke="#5c3d2e" strokeWidth="2" strokeLinecap="round" fill="none"/>

      {/* Nose */}
      <path d="M98 112 Q100 118 102 112" stroke="#d4956a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

      {/* Smile */}
      <path d="M91 122 Q100 130 109 122" stroke="#c97b5a" strokeWidth="2" strokeLinecap="round" fill="none"/>

      {/* Cheeks blush */}
      <ellipse cx="78" cy="118" rx="7" ry="5" fill="#f4a0a0" opacity="0.35" />
      <ellipse cx="122" cy="118" rx="7" ry="5" fill="#f4a0a0" opacity="0.35" />

      {/* Arms */}
      <path d="M62 155 Q45 165 48 182" stroke="#e8e0f5" strokeWidth="16" strokeLinecap="round" fill="none"/>
      <path d="M138 155 Q155 165 152 182" stroke="#e8e0f5" strokeWidth="16" strokeLinecap="round" fill="none"/>

      {/* Hands holding clipboard */}
      <ellipse cx="49" cy="185" rx="9" ry="8" fill="#f5cba7" />
      <ellipse cx="151" cy="185" rx="9" ry="8" fill="#f5cba7" />

      {/* Clipboard */}
      <rect x="72" y="168" width="56" height="40" rx="4" fill="white" stroke="#c8bfe7" strokeWidth="2"/>
      <rect x="88" y="163" width="24" height="8" rx="3" fill="#b8a9d9" />
      {/* Lines on clipboard */}
      <line x1="80" y1="180" x2="120" y2="180" stroke="#e0d8f5" strokeWidth="2"/>
      <line x1="80" y1="188" x2="115" y2="188" stroke="#e0d8f5" strokeWidth="2"/>
      <line x1="80" y1="196" x2="118" y2="196" stroke="#e0d8f5" strokeWidth="2"/>

      {/* Small heart detail */}
      <path d="M108 176 C108 174 106 173 104 174 C102 173 100 174 100 176 C100 179 104 182 104 182 C104 182 108 179 108 176Z" fill="#f4a0a0" opacity="0.8"/>

      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ede9fe" />
          <stop offset="100%" stopColor="#c8bfe7" />
        </radialGradient>
      </defs>
    </svg>
  );
}
