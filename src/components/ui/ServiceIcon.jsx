export default function ServiceIcon({ name, className = 'h-8 w-8' }) {
  const shared = { className, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24', 'aria-hidden': true }
  if (name === 'creative') return <svg {...shared}><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M3 8 6 3h15l-3 5M8 3l-3 5m9-5-3 5m8-5-3 5" /><path d="m10 12 5 2.5-5 2.5z" /></svg>
  if (name === 'digital') return <svg {...shared}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>
  return <svg {...shared}><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12c3 2 6 3 9 3s6-1 9-3" /></svg>
}
