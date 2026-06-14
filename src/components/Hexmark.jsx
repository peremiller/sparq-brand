import { useId } from 'react'

export default function Hexmark({ letter = 'M' }) {
  const id = useId()
  const gradId = `hexgrad-${id}`
  return (
    <svg className="hexmark" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <polygon
        points="20,2 36,11 36,29 20,38 4,29 4,11"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text className="hexmark__m" x="20" y="20" textAnchor="middle" dominantBaseline="central">
        {letter}
      </text>
    </svg>
  )
}
