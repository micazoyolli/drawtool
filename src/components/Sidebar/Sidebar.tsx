import {
  Circle,
  Download,
  Pencil,
  Redo,
  Slash,
  Square,
  Trash2,
  Undo,
} from 'lucide-react'
import styles from './Sidebar.module.scss'
import LogoSvg from '../../assets/logo.svg?react'

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

function Sidebar({
  color,
  lineWidth,
  tool,
  onColorChange,
  onLineWidthChange,
  onClear,
  onSave,
  onUndo,
  onRedo,
  onToolChange,
}: Props) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <LogoSvg aria-label="Logo" />
      </div>

      <div className={styles.section}>
        <span className={styles.sectionTitle}>Herramientas</span>
        <div className={styles.tools}>
          <button
            className={tool === 'freehand' ? styles.active : ''}
            onClick={() => onToolChange('freehand')}
          >
            <Pencil size={20} />
            <span className={styles.tooltip}>Dibujo libre</span>
          </button>
          <button
            className={tool === 'line' ? styles.active : ''}
            onClick={() => onToolChange('line')}
          >
            <Slash size={20} />
            <span className={styles.tooltip}>Línea</span>
          </button>
          <button
            className={tool === 'rectangle' ? styles.active : ''}
            onClick={() => onToolChange('rectangle')}
          >
            <Square size={20} />
            <span className={styles.tooltip}>Rectángulo</span>
          </button>
          <button
            className={tool === 'circle' ? styles.active : ''}
            onClick={() => onToolChange('circle')}
          >
            <Circle size={20} />
            <span className={styles.tooltip}>Círculo</span>
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionTitle}>Estilo</span>
        <div className={styles.settings}>
          <label className={styles.label}>
            Color:
            <input
              type="color"
              value={color}
              onChange={(e) => onColorChange(e.target.value)}
            />
          </label>
          <label className={styles.label}>
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
      </div>

      <div className={styles.section}>
        <span className={styles.sectionTitle}>Acciones</span>
        <div className={styles.actions}>
          <button onClick={onUndo}>
            <Undo size={20} />
            <span className={styles.tooltip}>Deshacer</span>
          </button>
          <button onClick={onRedo}>
            <Redo size={20} />
            <span className={styles.tooltip}>Rehacer</span>
          </button>
          <button onClick={onClear}>
            <Trash2 size={20} />
            <span className={styles.tooltip}>Limpiar</span>
          </button>
          <button onClick={onSave}>
            <Download size={20} />
            <span className={styles.tooltip}>Guardar</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar