import { useRef, useState } from 'react'
import Canvas from './components/Canvas/Canvas'
import Toolbar from './components/Toolbar/Toolbar'
import styles from './styles/components/App.module.scss'

type Tool = 'freehand' | 'line' | 'rectangle' | 'circle'

function App() {
  const [color, setColor] = useState('#000000')
  const [lineWidth, setLineWidth] = useState(2)
  const [history, setHistory] = useState<string[]>([])
  const [redoStack, setRedoStack] = useState<string[]>([])
  const [tool, setTool] = useState<Tool>('freehand')

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleClear = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx?.clearRect(0, 0, canvas.width, canvas.height)
    setHistory([])
    setRedoStack([])
  }

  const handleSave = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    link.download = 'dibujo.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const handleUndo = () => {
    if (!canvasRef.current || history.length === 0) return
    setRedoStack((redo) => [...redo, canvasRef.current!.toDataURL()])
    const previous = history[history.length - 1]
    const img = new Image()
    img.src = previous
    img.onload = () => {
      const ctx = canvasRef.current?.getContext('2d')
      if (!ctx) return
      ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height)
      ctx.drawImage(img, 0, 0)
      setHistory((prev) => prev.slice(0, -1))
    }
  }

  const handleRedo = () => {
    if (!canvasRef.current || redoStack.length === 0) return
    setHistory((prev) => [...prev, canvasRef.current!.toDataURL()])
    const next = redoStack[redoStack.length - 1]
    const img = new Image()
    img.src = next
    img.onload = () => {
      const ctx = canvasRef.current?.getContext('2d')
      if (!ctx) return
      ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height)
      ctx.drawImage(img, 0, 0)
      setRedoStack((redo) => redo.slice(0, -1))
    }
  }

  const clearRedoStack = () => setRedoStack([])

  return (
    <main className={styles.app}>
      <Canvas
        color={color}
        lineWidth={lineWidth}
        canvasRef={canvasRef}
        setHistory={setHistory}
        clearRedoStack={clearRedoStack}
        tool={tool}
      />
      <Toolbar
        color={color}
        lineWidth={lineWidth}
        onColorChange={setColor}
        onLineWidthChange={setLineWidth}
        onClear={handleClear}
        onSave={handleSave}
        onUndo={handleUndo}
        onRedo={handleRedo}
        tool={tool}
        onToolChange={setTool}
      />
    </main>
  )
}

export default App