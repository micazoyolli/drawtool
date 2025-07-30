import {
  Circle,
  Pencil,
  Redo,
  Trash2,
  Save,
  Slash,
  Square,
  Undo,
} from 'lucide-react'
import styles from './Toolbar.module.scss'

type Props = {
  color: string
  lineWidth: number
  tool: 'freehand' | 'line' | 'rectangle' | 'circle'
  onColorChange: (color: string) => void
  onLineWidthChange: (width: number) => void
  onClear: () => void
  onSave: () => void
  onUndo: () => void
  onRedo: () => void
  onToolChange: (tool: 'freehand' | 'line' | 'rectangle' | 'circle') => void
}

function Toolbar({
  color,
  lineWidth,
  onColorChange,
  onLineWidthChange,
  onClear,
  onSave,
  onUndo,
  onRedo,
  onToolChange,
  tool,
}: Props) {
  return (
    <div className={styles.toolbar}>
      <div className={styles['toolbar-row']}>
        <label>
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
          />
        </label>
        <label>
          Grosor:
          <input
            type="range"
            min={1}
            max={20}
            value={lineWidth}
            onChange={(e) => onLineWidthChange(parseInt(e.target.value))}
          />
        </label>
      </div>

      <div className={styles['toolbar-row']}>
        <button onClick={onUndo}>
          <Undo size={18} /> Deshacer
        </button>
        <button onClick={onRedo}>
          <Redo size={18} /> Rehacer
        </button>
        <button
          onClick={() => onToolChange('freehand')}
          className={tool === 'freehand' ? styles.active : ''}
        >
          <Pencil size={18} /> Libre
        </button>
      </div>

      <div className={styles['toolbar-row']}>
        <button
          onClick={() => onToolChange('line')}
          className={tool === 'line' ? styles.active : ''}
        >
          <Slash size={18} /> Línea
        </button>
        <button
          onClick={() => onToolChange('rectangle')}
          className={tool === 'rectangle' ? styles.active : ''}
        >
          <Square size={18} /> Rectángulo
        </button>
        <button
          onClick={() => onToolChange('circle')}
          className={tool === 'circle' ? styles.active : ''}
        >
          <Circle size={18} /> Círculo
        </button>
      </div>

      <div className={styles['toolbar-row']}>
        <button onClick={onClear}>
          <Trash2 size={18} /> Limpiar
        </button>
        <button onClick={onSave}>
          <Save size={18} /> Guardar
        </button>
      </div>
    </div>
  )
}

export default Toolbar