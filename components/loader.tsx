import { useEffect, useRef, useState } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [progress, setProgress] = useState(0);

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

      // Clear canvas with dark background
      ctx.fillStyle = "rgba(15, 23, 42, 0.95)"
      ctx.fillRect(0, 0, width, height)

      // Draw glowing background gradient
      const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 300)
      bgGradient.addColorStop(0, "rgba(6, 182, 212, 0.15)")
      bgGradient.addColorStop(0.5, "rgba(168, 85, 247, 0.08)")
      bgGradient.addColorStop(1, "rgba(15, 23, 42, 0)")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, width, height)

      // Draw multiple rotating rings with glow
      const rings = [
        { radius: 40, speed: -0.42, length: Math.PI * 1.2, color: "#a855f7", glowColor: "rgba(6, 182, 212, 0.4)" },
        { radius: 60, speed: 0.42, length: Math.PI * 1.6, color: "#06b6d4", glowColor: "rgba(6, 182, 212, 0.4)" },
        { radius: 80, speed: 0.62, color: "#06b6d4", glowColor: "rgba(6, 182, 212, 0.4)" },
        { radius: 100, speed: -0.62, color: "#a855f7", glowColor: "rgba(168, 85, 247, 0.3)" },
        { radius: 140, speed: 0.8, color: "#3b82f6", glowColor: "rgba(59, 130, 246, 0.2)" },
        { radius: 160, speed: -0.8, color: "#3b82f6", glowColor: "rgba(59, 130, 246, 0.2)" },
      ]

      rings.forEach((ring) => {
        ctx.shadowColor = ring.glowColor
        ctx.shadowBlur = 30
        ctx.strokeStyle = ring.color
        ctx.lineWidth = 3
        ctx.globalAlpha = 0.7

        ctx.beginPath()
        ctx.arc(centerX, centerY, ring.radius, time * ring.speed, time * ring.speed + Math.PI / 2)
        ctx.stroke()

        ctx.globalAlpha = 1
        ctx.shadowBlur = 0
      })

      // Draw orbiting particles
      const particles = 8
      for (let i = 0; i < particles; i++) {
        const angle = time * 0.5 + (i / particles) * Math.PI * 2
        const x = centerX + Math.cos(angle) * 120
        const y = centerY + Math.sin(angle) * 120

        ctx.shadowColor = "rgba(6, 182, 212, 0.8)"
        ctx.shadowBlur = 20
        ctx.fillStyle = "#06b6d4"
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fill()

        const trailAngle = time * 0.5 + (i / particles) * Math.PI * 2 - 0.5
        const trailX = centerX + Math.cos(trailAngle) * 120
        const trailY = centerY + Math.sin(trailAngle) * 120

        ctx.strokeStyle = "rgba(6, 182, 212, 0.4)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(trailX, trailY)
        ctx.lineTo(x, y)
        ctx.stroke()
      }

      // Draw center pulsing orb
      ctx.shadowColor = "rgba(168, 85, 247, 1)"
      ctx.shadowBlur = 40
      const pulseSize = 8 + Math.sin(time * 3) * 3
      ctx.fillStyle = "#a855f7"
      ctx.beginPath()
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2)
      ctx.fill()

      // Draw loading text
      ctx.shadowColor = "transparent"
      ctx.shadowBlur = 0
      ctx.fillStyle = "rgba(6, 182, 212, 0.9)"
      ctx.font = "bold 16px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText("LOADING", centerX, centerY + 180)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      setCanvasSize()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-50">
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
      
      {/* Progress bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64">
        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-cyan-400/70 text-sm mt-3 font-mono">{progress}%</p>
      </div>
    </div>
  )
}
