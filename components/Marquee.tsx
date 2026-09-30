'use client'

interface MarqueeProps {
  reverse?: boolean
}

const marqueeItems = [
  'Graphic Design',
  'Visual Identity',
  'UI/UX Design',
  'Social Media',
  'Motion Design',
  'Brand Strategy',
  'Typography',
  '3D Design',
  'Creative Direction',
  'Illustration',
]

export default function MarqueeSection({ reverse = false }: MarqueeProps) {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div
      className="marquee-outer overflow-hidden"
      style={{ backgroundColor: reverse ? 'var(--accent)' : 'var(--foreground)' }}
      aria-hidden="true"
    >
      <div
        className="marquee-inner"
        style={{
          animation: `marquee 25s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" style={{ backgroundColor: reverse ? 'var(--foreground)' : 'var(--accent)' }} />
          </span>
        ))}
      </div>
      <div
        className="marquee-inner"
        aria-hidden="true"
        style={{
          animation: `marquee 25s linear infinite ${reverse ? 'reverse' : 'normal'}`,
          animationDelay: '-12.5s',
        }}
      >
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" style={{ backgroundColor: reverse ? 'var(--foreground)' : 'var(--accent)' }} />
          </span>
        ))}
      </div>
    </div>
  )
}
