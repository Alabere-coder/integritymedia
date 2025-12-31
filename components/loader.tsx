import { useEffect, useRef, useState } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [progress, setProgress] = useState(0);

  // Handle Progress Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 4100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onLoadingComplete]);

  // Handle Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    setCanvasSize()

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.04
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      const centerX = width / 2
      const centerY = height / 2

      // --- RESPONSIVE SCALING LOGIC ---
      // We calculate scale based on the smaller dimension (width vs height)
      // 800px is our "design standard". On a 400px screen, scale becomes 0.5.
      const baseDimension = Math.min(width, height)
      const scale = baseDimension < 800 ? baseDimension / 800 : 1
      
      // Clear canvas
      ctx.fillStyle = "rgba(15, 23, 42, 1)"
      ctx.fillRect(0, 0, width, height)

      // Background Glow
      const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 300 * scale)
      bgGradient.addColorStop(0, "rgba(6, 182, 212, 0.15)")
      bgGradient.addColorStop(1, "rgba(15, 23, 42, 0)")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, width, height)

      // Define Rings with scaled radii
      const rings = [
        { radius: 40 * scale, speed: -0.42, color: "#a855f7", glow: "rgba(168, 85, 247, 0.4)" },
        { radius: 65 * scale, speed: 0.35, color: "#06b6d4", glow: "rgba(6, 182, 212, 0.4)" },
        { radius: 90 * scale, speed: 0.55, color: "#3b82f6", glow: "rgba(59, 130, 246, 0.3)" },
        { radius: 120 * scale, speed: -0.25, color: "#a855f7", glow: "rgba(168, 85, 247, 0.2)" },
      ]

      rings.forEach((ring) => {
        ctx.shadowColor = ring.glow
        ctx.shadowBlur = 15 * scale
        ctx.strokeStyle = ring.color
        ctx.lineWidth = 3 * scale
        
        ctx.beginPath()
        ctx.arc(centerX, centerY, ring.radius, time * ring.speed, time * ring.speed + (Math.PI * 0.8))
        ctx.stroke()
      })

      // Orbiting Particles
      const particles = 6
      const orbitRadius = 150 * scale
      for (let i = 0; i < particles; i++) {
        const angle = time * 0.6 + (i / particles) * Math.PI * 2
        const x = centerX + Math.cos(angle) * orbitRadius
        const y = centerY + Math.sin(angle) * orbitRadius

        ctx.shadowBlur = 15 * scale
        ctx.fillStyle = "#06b6d4"
        ctx.beginPath()
        ctx.arc(x, y, 4 * scale, 0, Math.PI * 2)
        ctx.fill()
      }

      // Center Pulsing Orb
      const pulseSize = (10 + Math.sin(time * 3) * 4) * scale
      ctx.shadowColor = "#a855f7"
      ctx.shadowBlur = 30 * scale
      ctx.fillStyle = "#a855f7"
      ctx.beginPath()
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2)
      ctx.fill()

      // Loading Text (Positioned relative to scale)
      ctx.shadowBlur = 0
      ctx.fillStyle = "rgba(6, 182, 212, 0.8)"
      ctx.font = `bold ${Math.max(12, 16 * scale)}px monospace`
      ctx.textAlign = "center"
      ctx.fillText("LOADING...", centerX, centerY + (210 * scale))

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => setCanvasSize()
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950 z-50 overflow-hidden">
      {/* Canvas fills the screen */}
      <canvas ref={canvasRef} className="w-full h-full touch-none" />
      
      {/* Responsive Progress Bar Container */}
      <div className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 w-[70%] max-w-xs">
        <div className="h-1 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-3 px-1">
          <span className="text-[10px] uppercase tracking-widest text-cyan-500/50 font-mono">Loading Data</span>
          <span className="text-cyan-400 text-xs font-mono">{progress}%</span>
        </div>
      </div>
    </div>
  )
}