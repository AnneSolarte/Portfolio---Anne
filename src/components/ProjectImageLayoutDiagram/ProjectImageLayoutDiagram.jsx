import React, { useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './ProjectImageLayoutDiagram.css'

const slots = [
  { name: 'image1', num: 1, classSuffix: '1', variant: 'accent' },
  { name: 'image2', num: 2, classSuffix: '2', variant: 'bordered' },
  { name: 'image3', num: 3, classSuffix: '3', variant: 'bordered' },
  { name: 'image4', num: 4, classSuffix: '4', variant: 'default' }
]

/**
 * Cuadrícula igual que ProjectDetailCard: cada celda incluye el input de la imagen que va ahí.
 * Si bounded es true, la cuadrícula escala para caber en el alto disponible (columna derecha del formulario).
 */
export const ProjectImageLayoutDiagram = ({ onFileChange, selectedFiles, bounded = false }) => {
  const containerRef = useRef(null)
  const gridRef = useRef(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    const grid = gridRef.current
    if (!container || !grid) return

    const fit = () => {
      if (!bounded) {
        grid.style.width = ''
        grid.style.height = ''
        return
      }

      const cw = container.clientWidth
      const ch = container.clientHeight
      if (cw < 8 || ch < 8) return

      const mobile = window.matchMedia('(max-width: 699px)').matches
      const ar = mobile ? 9 / 7 : 10 / 12

      let h = ch
      let w = h * ar
      if (w > cw) {
        w = cw
        h = w / ar
      }
      grid.style.width = `${w}px`
      grid.style.height = `${h}px`
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(container)
    const mq = window.matchMedia('(max-width: 699px)')
    const onMq = () => fit()
    mq.addEventListener('change', onMq)
    return () => {
      ro.disconnect()
      mq.removeEventListener('change', onMq)
    }
  }, [bounded])

  return (
    <div
      ref={containerRef}
      className={
        'project-image-layout-diagram' +
        (bounded ? ' project-image-layout-diagram--bounded' : '')
      }
    >
      <div ref={gridRef} className='project-image-layout-diagram__grid'>
        {slots.map(({ name, num, classSuffix, variant }) => (
          <div
            key={name}
            className={
              'project-image-layout-diagram__slot project-image-layout-diagram__slot--' +
              classSuffix +
              (variant === 'accent' ? ' project-image-layout-diagram__slot--accent' : '') +
              (variant === 'bordered' ? ' project-image-layout-diagram__slot--bordered' : '')
            }
          >
            <input
              type='file'
              name={name}
              id={`project-image-input-${name}`}
              className='project-image-layout-diagram__file'
              accept='image/*'
              onChange={onFileChange}
            />
            <label
              htmlFor={`project-image-input-${name}`}
              className='project-image-layout-diagram__label'
            >
              <span className='project-image-layout-diagram__num'>{num}</span>
              <span className='project-image-layout-diagram__filename'>
                {selectedFiles[name] || 'Elegir'}
              </span>
            </label>
          </div>
        ))}
        <div className='project-image-layout-diagram__slot project-image-layout-diagram__slot--info'>
          Texto en la web
        </div>
      </div>
    </div>
  )
}

ProjectImageLayoutDiagram.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  selectedFiles: PropTypes.object.isRequired,
  bounded: PropTypes.bool
}
