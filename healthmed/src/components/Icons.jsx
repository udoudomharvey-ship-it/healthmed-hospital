/* ── All custom SVG icons for HealthMed ─────────────────────────────────── */

export const IconStethoscope = ({ size = 16, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
    <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/>
    <circle cx="20" cy="10" r="2"/>
  </svg>
)

export const IconFamilyMedicine = ({ size = 16, color = 'currentColor' }) => (
  <svg viewBox="0 0 28 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    {/* Left adult */}
    <circle cx="5" cy="5" r="2.5"/>
    <path d="M1 22v-3a4 4 0 0 1 4-4"/>
    {/* Child (smaller, center) */}
    <circle cx="14" cy="7" r="2"/>
    <path d="M11 22v-2a3 3 0 0 1 6 0v2"/>
    {/* Right adult */}
    <circle cx="23" cy="5" r="2.5"/>
    <path d="M27 22v-3a4 4 0 0 0-4-4"/>
    {/* Connect adults to child */}
    <path d="M5 15h4M23 15h-4"/>
  </svg>
)

export const IconMaternity = ({ size = 16, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="4" r="2.5"/>
    <path d="M8 22V14a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v3"/>
    <circle cx="12" cy="15" r="3" strokeDasharray="2 1"/>
    <path d="M9 22h6"/>
    <path d="M15 17c1.5 0 3 .5 3 2"/>
  </svg>
)

export const IconChildCare = ({ size = 16, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="6" r="3"/>
    <path d="M8 22v-5a4 4 0 0 1 8 0v5"/>
    <path d="M5 12c0 0 1-2 3-2M19 12c0 0-1-2-3-2"/>
    <path d="M9 10l-2 3M15 10l2 3"/>
  </svg>
)

export const IconMicroscope = ({ size = 16, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <path d="M6 18h8M3 22h18"/>
    <path d="M14 22a7 7 0 1 0 0-14h-1"/>
    <path d="M9 14l.7-3.5 4-1.5"/>
    <path d="M8.7 10.5 7 4l4-1 1.7 6.5"/>
    <circle cx="11" cy="4.5" r=".5" fill={color}/>
  </svg>
)

export const IconPill = ({ size = 16, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/>
  </svg>
)

export const IconScalpel = ({ size = 16, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <path d="M14.5 4 20 9.5l-12 12-5.5-1L2 15Z"/>
    <path d="M15 5 5 15"/>
    <path d="m14.5 4 2-2 5 5-2 2"/>
  </svg>
)

export const IconBrain = ({ size = 16, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.19-4.58A3 3 0 0 1 3 12a3 3 0 0 1 3-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.19-4.58A3 3 0 0 0 21 12a3 3 0 0 0-3-3 2.5 2.5 0 0 0-3.5-6.96Z"/>
  </svg>
)

export const IconEmergency = ({ size = 24, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M12 2v20M2 12h20"/>
  </svg>
)

export const IconLocation = ({ size = 24, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s-8-4.5-8-11.8a8 8 0 0 1 16 0C20 17.5 12 22 12 22z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

export const IconPhone = ({ size = 24, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2L9 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.5 12.8 12.8 0 0 0 2.8.7A2 2 0 0 1 23 17z"/>
  </svg>
)

export const IconClock = ({ size = 24, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 3"/>
  </svg>
)

export const IconCheck = ({ size = 18, color = 'currentColor' }) => (
  <svg viewBox="0 0 18 18" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <circle cx="9" cy="9" r="7"/>
    <path d="M6 9l2 2 4-4"/>
  </svg>
)

export const IconArrow = ({ size = 14, color = 'currentColor' }) => (
  <svg viewBox="0 0 14 14" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M1 7h12M7 1l6 6-6 6"/>
  </svg>
)

export const IconSurgery = ({ size = 24, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
  </svg>
)
