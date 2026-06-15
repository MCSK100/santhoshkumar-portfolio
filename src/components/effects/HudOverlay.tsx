import { useEffect, useState, useRef } from 'react'
import { useStore } from '../../store/useStore'

export const HudOverlay = () => {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const mousePosition = useStore((s) => s.mousePosition)
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour12: false }))
      setDate(now.toISOString().split('T')[0])
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (spotlightRef.current) {
      const x = ((mousePosition.x / window.innerWidth) * 100).toFixed(1)
      const y = ((mousePosition.y / window.innerHeight) * 100).toFixed(1)
      spotlightRef.current.style.setProperty('--mouse-x', `${x}%`)
      spotlightRef.current.style.setProperty('--mouse-y', `${y}%`)
    }
  }, [mousePosition])

  return (
    <>
      {/* Spotlight mask */}
      <div ref={spotlightRef} className="spotlight-mask fixed inset-0 z-[5]" />

      {/* HUD Top Left - Camera / Signal */}
      <div className="hud-corner hud-tl hidden md:block">
        <div className="hud-label">
          <span className="hud-accent">CAM</span> [REC]
        </div>
        <div className="hud-label mt-1">
          <span className="live-dot mr-1.5" />
          SIGNAL_STRONG
        </div>
      </div>

      {/* HUD Top Right - Timestamp / ISO */}
      <div className="hud-corner hud-tr hidden md:block text-right">
        <div className="hud-value">{time}</div>
        <div className="hud-label mt-1">ISO 100</div>
        <div className="hud-label">{date}</div>
      </div>

      {/* HUD Bottom Left - Live Feed */}
      <div className="hud-corner hud-bl hidden md:block">
        <div className="hud-label flex items-center gap-2">
          <span className="live-dot" />
          LIVE FEED
        </div>
        <div className="hud-label mt-1 opacity-50">
          SYS:OPTIMAL
        </div>
      </div>

      {/* HUD Bottom Right - System Diagnostic */}
      <div className="hud-corner hud-br hidden md:block text-right">
        <div className="hud-label">
          <span className="hud-accent">FPS</span> 60
        </div>
        <div className="hud-label mt-1 opacity-50">
          MEM: OK
        </div>
      </div>

      {/* Ambient blurred blob */}
      <div className="fixed top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-red/[0.03] rounded-full blur-[250px] pointer-events-none z-0 animate-organic-1" />
    </>
  )
}
