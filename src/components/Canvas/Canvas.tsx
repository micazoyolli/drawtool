'use client'
import {
  useRef,
  useEffect,
  useState,
  type RefObject,
  type Dispatch,
  type SetStateAction,
} from 'react'

type Props = {
  color: string
  lineWidth: number
  tool: 'freehand' | 'line' | 'rectangle' | 'circle'
  canvasRef: RefObject<HTMLCanvasElement | null>
  setHistory: Dispatch<SetStateAction<string[]>>
  clearRedoStack: () => void
}

const Canvas = ({ color, lineWidth, tool, canvasRef, setHistory, clearRedoStack }: Props) => {
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const startPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const snapshot = useRef<ImageData | null>(null)
  const hasSavedHistory = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
      ctxRef.current = ctx
    }
  }, [])

  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.strokeStyle = color
      ctxRef.current.lineWidth = lineWidth
    }
  }, [color, lineWidth])

  const getPos = (e: any) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }

    const rect = canvas.getBoundingClientRect()

    if (e.touches?.length) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      }
    } else {
      return {
        x: e.nativeEvent.offsetX ?? e.clientX - rect.left,
        y: e.nativeEvent.offsetY ?? e.clientY - rect.top,
      }
    }
  }

  const startDrawing = (e: any) => {
    const canvas = canvasRef.current
    const ctx = ctxRef.current
    if (!canvas || !ctx) return

    const pos = getPos(e)
    startPos.current = pos
    setIsDrawing(true)

    if (!hasSavedHistory.current) {
      const dataUrl = canvas.toDataURL()
      setHistory((prev) => [...prev, dataUrl])
      clearRedoStack()
      hasSavedHistory.current = true
    }

    if (tool === 'freehand') {
      ctx.beginPath()
      ctx.moveTo(pos.x, pos.y)
    } else {
      snapshot.current = ctx.getImageData(0, 0, canvas.width, canvas.height)
    }
  }

  const drawShape = (ctx: CanvasRenderingContext2D, start: { x: number; y: number }, current: { x: number; y: number }) => {
    switch (tool) {
      case 'line':
        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(current.x, current.y)
        ctx.stroke()
        ctx.closePath()
        break
      case 'rectangle':
        ctx.strokeRect(
          start.x,
          start.y,
          current.x - start.x,
          current.y - start.y
        )
        break
      case 'circle': {
        const radius = Math.sqrt(
          Math.pow(current.x - start.x, 2) + Math.pow(current.y - start.y, 2)
        )
        ctx.beginPath()
        ctx.arc(start.x, start.y, radius, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()
        break
      }
    }
  }

  const draw = (e: any) => {
    if (!isDrawing || !ctxRef.current || !canvasRef.current) return
    const ctx = ctxRef.current
    const pos = getPos(e)

    if (tool === 'freehand') {
      if (e.nativeEvent.pressure) {
        ctx.lineWidth = Math.max(1, lineWidth * e.nativeEvent.pressure)
      }
      ctx.lineTo(pos.x, pos.y)
      ctx.stroke()
    } else if (snapshot.current) {
      ctx.putImageData(snapshot.current, 0, 0)
      drawShape(ctx, startPos.current, pos)
    }
  }

  const stopDrawing = () => {
    if (ctxRef.current && tool === 'freehand') {
      ctxRef.current.closePath()
    }
    setIsDrawing(false)
    hasSavedHistory.current = false
    snapshot.current = null
  }

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={startDrawing}
      onPointerMove={draw}
      onPointerUp={stopDrawing}
      onPointerLeave={stopDrawing}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
    />
  )
}

export default Canvas