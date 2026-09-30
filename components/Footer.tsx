'use client'

import { Instagram, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/arya.pratama_', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/aryapratama', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/aryapratama', Icon: Github },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{ backgroundColor: 'var(--accent)' }}
      aria-label="Site footer"
    >
      {/* Big Typography */}
      <div className="container-main overflow-hidden" aria-hidden="true">
        <div
          className="font-display font-bold uppercase leading-none select-none"
          style={{
            fontSize: 'clamp(5rem, 18vw, 20rem)',
            letterSpacing: '-0.05em',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(245,240,235,0.2)',
            marginBottom: '-0.1em',
            lineHeight: 0.85,
          }}
        >
          THANKS<br />
          FOR<br />
          VISITING.
        </div>
      </div>

      {/* Footer Bar */}
      <div style={{ borderTop: '1px solid rgba(245,240,235,0.2)' }}>
        <div className="container-main py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left */}
            <div>
              <p
                className="font-display font-bold text-xl uppercase tracking-tight mb-1"
                style={{ color: 'var(--background)' }}
              >
                ARYA PRATAMA
              </p>
              <p
                className="font-inter text-xs tracking-widest uppercase"
                style={{ color: 'rgba(245,240,235,0.5)' }}
              >
                Graphic Designer
              </p>
            </div>

            {/* Center — Copyright */}
            <p
              className="font-inter text-xs"
              style={{ color: 'rgba(245,240,235,0.5)' }}
            >
              © {currentYear} Arya Pratama. All rights reserved.
            </p>

            {/* Right — Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border flex items-center justify-center transition-all duration-300 hover:bg-background"
                  style={{
                    borderColor: 'rgba(245,240,235,0.3)',
                    color: 'var(--background)',
                  }}
                  aria-label={label}
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
              <a
                href="mailto:arya@aryapratama.design"
                className="flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest px-4 py-2 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)',
                }}
                aria-label="Email Arya Pratama"
              >
                <span>Email Me</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
