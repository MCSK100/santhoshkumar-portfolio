import { useState, useEffect, useRef } from 'react'

interface MousePosition {
  x: number
  y: number
  normalizedX: number
  normalizedY: number
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  })

  const rafRef = useRef<number>(0)
  const positionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = () => {
      setMousePosition({
        x: positionRef.current.x,
        y: positionRef.current.y,
        normalizedX: (positionRef.current.x / window.innerWidth) * 2 - 1,
        normalizedY: -(positionRef.current.y / window.innerHeight) * 2 + 1,
      })
      rafRef.current = 0
    }

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY }
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updatePosition)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return mousePosition
}
