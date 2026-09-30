'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const mousePos = useRef({ x: -100, y: -100 })
  const outerPos = useRef({ x: -100, y: -100 })
  const animFrame = useRef<number>(0)

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if ('ontouchstart' in window) return

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)

      // Inner cursor follows immediately
      if (innerRef.current) {
        innerRef.current.style.left = `${e.clientX}px`
        innerRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverableEnter = () => setIsHovering(true)
    const handleHoverableLeave = () => setIsHovering(false)

    const hoverableSelectors = 'a, button, [data-cursor-hover], .portfolio-card, .skill-card'

    const attachHoverListeners = () => {
      document.querySelectorAll<HTMLElement>(hoverableSelectors).forEach((el) => {
        el.addEventListener('mouseenter', handleHoverableEnter)
        el.addEventListener('mouseleave', handleHoverableLeave)
      })
    }

    attachHoverListeners()

    // Smooth outer cursor animation
    const animate = () => {
      outerPos.current.x += (mousePos.current.x - outerPos.current.x) * 0.12
      outerPos.current.y += (mousePos.current.y - outerPos.current.y) * 0.12

      if (outerRef.current) {
        outerRef.current.style.left = `${outerPos.current.x}px`
        outerRef.current.style.top = `${outerPos.current.y}px`
      }

      animFrame.current = requestAnimationFrame(animate)
    }
    animFrame.current = requestAnimationFrame(animate)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Mutation observer to attach listeners on new elements
    const observer = new MutationObserver(attachHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animFrame.current)
      observer.disconnect()
    }
  }, [isVisible])

  return (
    <>
      <div
        ref={outerRef}
        className={`cursor-outer ${isHovering ? 'is-hovering' : ''}`}
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease, width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1), background-color 0.4s cubic-bezier(0.16,1,0.3,1)' }}
        aria-hidden="true"
      />
      <div
        ref={innerRef}
        className="cursor-inner"
        style={{ opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      />
    </>
  )
}
