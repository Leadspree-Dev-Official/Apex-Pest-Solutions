import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// Logo of Apex Pest Solutions
export const ApexLogo: React.FC<{ className?: string; textClassName?: string; showTagline?: boolean }> = ({
  className = "w-8 h-8",
  textClassName = "text-slate-900",
  showTagline = true,
}) => (
  <div className="flex items-center gap-2.5 select-none">
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Dynamic geometric "A" with shield and modern leaf cut */}
        <path
          d="M24 4L6 42H16L24 24L32 42H42L24 4Z"
          fill="#133826"
        />
        <path
          d="M24 12L15 32H20L24 22L28 32H33L24 12Z"
          fill="#2d6a4f"
        />
        <circle cx="24" cy="23" r="3" fill="#52b788" />
      </svg>
    </div>
    <div className="flex flex-col leading-tight">
      <span className={`font-extrabold tracking-tight text-lg md:text-xl font-heading ${textClassName}`}>
        Apex Pest
      </span>
      {showTagline && (
        <span className="text-[10px] md:text-xs tracking-wider uppercase font-semibold text-emerald-800/80 -mt-0.5">
          Solutions
        </span>
      )}
    </div>
  </div>
);

// Termite Icon (Detailed bug in circular badge matching Hero Card 1)
export const TermiteIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Antennae */}
    <path d="M9 3C8 4.5 7.5 5.5 8 7" />
    <path d="M15 3C16 4.5 16.5 5.5 16 7" />
    {/* Head & Thorax */}
    <ellipse cx="12" cy="8" rx="2.5" ry="2" />
    <ellipse cx="12" cy="12.5" rx="3.5" ry="2.5" />
    {/* Abdomen with segments */}
    <ellipse cx="12" cy="18" rx="3.5" ry="4" />
    <path d="M9.5 16.5H14.5" />
    <path d="M9 19H15" />
    {/* Legs */}
    <path d="M8.5 11L4 9" />
    <path d="M15.5 11L20 9" />
    <path d="M8.5 13L4 14" />
    <path d="M15.5 13L20 14" />
    <path d="M9 16L5 19" />
    <path d="M15 16L19 19" />
  </svg>
);

// Rodent Icon (Mouse / Rat profile matching Hero Card 2)
export const RodentIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Ears */}
    <path d="M7 6C6 4.5 7.5 3.5 9 4.5C9.8 5.2 9.5 6.5 9 7" />
    <path d="M10 6C9.5 4.5 11 3.5 12 4.5C12.5 5.2 12 6.5 11.5 7" />
    {/* Head & Body profile */}
    <path d="M5 13C4 11 4.5 9 6.5 8.5C8.5 8 10 9 12 8.5C14.5 8 17 9.5 18 12C19 14.5 18 17 15 18C12 19 8 18.5 6 16.5C4.5 15 4 13.5 5 13Z" />
    {/* Snout & Whiskers */}
    <circle cx="5" cy="12" r="0.75" fill="currentColor" />
    <path d="M4 11L1.5 10" />
    <path d="M4 13L1.5 14" />
    {/* Eye */}
    <circle cx="7.5" cy="10.5" r="0.75" fill="currentColor" />
    {/* Tail */}
    <path d="M17.5 16C19.5 16.5 21.5 15.5 22 13C22.3 11.5 21.5 10 20.5 9" />
    {/* Paws */}
    <path d="M8 18.5L8.5 20" />
    <path d="M13 18.5L13.5 20" />
  </svg>
);

// General Pest / Insect Cluster Icon (Matching Hero Card 3)
export const InsectClusterIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Bug 1 (Top Left) */}
    <ellipse cx="8" cy="8" rx="2.5" ry="3" />
    <path d="M6 6L4 5" />
    <path d="M10 6L12 5" />
    <path d="M5.5 8.5L3.5 8.5" />
    <path d="M10.5 8.5L12.5 8.5" />
    <path d="M6 10L4 12" />
    <path d="M10 10L12 12" />

    {/* Bug 2 (Bottom Right) */}
    <ellipse cx="16" cy="15" rx="2.5" ry="3" />
    <path d="M14 13L12 12" />
    <path d="M18 13L20 12" />
    <path d="M13.5 15.5L11.5 15.5" />
    <path d="M18.5 15.5L20.5 15.5" />
    <path d="M14 17L12 19" />
    <path d="M18 17L20 19" />
  </svg>
);

// Cockroach Icon (Long antennae, oval body, side legs)
export const CockroachIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Long curling antennae */}
    <path d="M10 5C8.5 2.5 5 2 3 3.5" />
    <path d="M14 5C15.5 2.5 19 2 21 3.5" />
    {/* Head */}
    <ellipse cx="12" cy="6.5" rx="2" ry="1.5" />
    {/* Main Shield / Body */}
    <path d="M9 8C9 8 7.5 13 8 17C8.5 20 10.5 21.5 12 21.5C13.5 21.5 15.5 20 16 17C16.5 13 15 8 15 8H9Z" />
    <path d="M12 8V21" strokeDasharray="1 2" />
    {/* Legs */}
    <path d="M8 9L4 7" />
    <path d="M16 9L20 7" />
    <path d="M7.5 13L3 13.5" />
    <path d="M16.5 13L21 13.5" />
    <path d="M8 17L4 20" />
    <path d="M16 17L20 20" />
  </svg>
);

// Bed Bug Icon (Apple-seed shaped, flat, segmented)
export const BedBugIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Antennae */}
    <path d="M10 4L8 2" />
    <path d="M14 4L16 2" />
    {/* Small Head */}
    <ellipse cx="12" cy="5.5" rx="2" ry="1.5" />
    {/* Wide thorax */}
    <ellipse cx="12" cy="9" rx="3.5" ry="2" />
    {/* Broad segmented round abdomen */}
    <path d="M7.5 11C6.5 13.5 6.5 17 8.5 19.5C10.5 21.5 13.5 21.5 15.5 19.5C17.5 17 17.5 13.5 16.5 11" />
    {/* Segments */}
    <path d="M8 14H16" />
    <path d="M8.5 17H15.5" />
    {/* Legs */}
    <path d="M8.5 7L4.5 5.5" />
    <path d="M15.5 7L19.5 5.5" />
    <path d="M8 10L4 11" />
    <path d="M16 10L20 11" />
    <path d="M8 15L4.5 17.5" />
    <path d="M16 15L19.5 17.5" />
  </svg>
);

// Ant Icon (Distinct 3-part body, waist, elbowed antennae)
export const AntIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Elbowed antennae */}
    <path d="M10 4L9 2L7 2.5" />
    <path d="M14 4L15 2L17 2.5" />
    {/* Head */}
    <circle cx="12" cy="6" r="2" />
    {/* Slender Waist / Thorax */}
    <ellipse cx="12" cy="10.5" rx="1.5" ry="2" />
    {/* Abdomen */}
    <ellipse cx="12" cy="17" rx="3" ry="4" />
    {/* Multi-jointed legs */}
    <path d="M10.5 9L6 7" />
    <path d="M13.5 9L18 7" />
    <path d="M10.5 11L6 12" />
    <path d="M13.5 11L18 12" />
    <path d="M11 13L7 17" />
    <path d="M13 13L17 17" />
  </svg>
);

// Mosquito Icon (Long proboscis, delicate wings)
export const MosquitoIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Needle proboscis */}
    <path d="M12 1V5" />
    {/* Head & Body */}
    <circle cx="12" cy="6.5" r="1.5" />
    <ellipse cx="12" cy="11" rx="1.5" ry="2.5" />
    <path d="M12 13.5V20" />
    {/* Thin outstretched wings */}
    <path d="M11 9.5C8 6 4 7 3 9C2.5 10 5 11.5 11 11" />
    <path d="M13 9.5C16 6 20 7 21 9C21.5 10 19 11.5 13 11" />
    {/* Long trailing spider legs */}
    <path d="M10.5 11L6 15L4 21" />
    <path d="M13.5 11L18 15L20 21" />
  </svg>
);

// Commercial Pest Services Icon (Modern office building / facility)
export const CommercialBuildingIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21H21" />
    <path d="M5 21V7L13 3V21" />
    <path d="M13 9H19V21" />
    <path d="M8 8H10" />
    <path d="M8 11H10" />
    <path d="M8 14H10" />
    <path d="M8 17H10" />
    <path d="M15 12H17" />
    <path d="M15 15H17" />
    <path d="M15 18H17" />
  </svg>
);

// Preventive Maintenance Icon (Protection briefcase with medical cross)
export const PreventiveBriefcaseIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="7" width="18" height="14" rx="2" />
    <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" />
    <path d="M12 11V17" />
    <path d="M9 14H15" />
  </svg>
);

// Guarantee Seal / Ribbon Award
export const GuaranteeSealIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ribbons */}
    <path d="M17 32L14 44L24 39L34 44L31 32" fill="#1b4332" />
    {/* Medallion outer */}
    <circle cx="24" cy="22" r="18" fill="#2d6a4f" stroke="#d8f3dc" strokeWidth="2" />
    {/* Inner ring */}
    <circle cx="24" cy="22" r="14" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" />
    {/* Checkmark or Star */}
    <path d="M18 22L22 26L30 17" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
