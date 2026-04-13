import './FormAddProject.css'
import PropTypes from 'prop-types'
import { useContextHook } from '../../hooks/contextHook'
import { uploadImage, addProject } from '../../services/firebase'
import { useState, useRef, useLayoutEffect } from 'react'
import { toast } from 'react-toastify'
import { ProjectImageLayoutDiagram } from '../ProjectImageLayoutDiagram/ProjectImageLayoutDiagram'

export const FormAddProject = ({ submitText, dataForm }) => {
  const { formData, setFormData, fetchProjects } = useContextHook()
  const [selectedFiles, setSelectedFiles] = useState({})
  const [rightColumnMaxH, setRightColumnMaxH] = useState(null)
  const leftColumnRef = useRef(null)

  useLayoutEffect(() => {
    const mq = window.matchMedia('(min-width: 700px)')

    const measure = () => {
      if (!mq.matches || !leftColumnRef.current) {
        setRightColumnMaxH(null)
        return
      }
      setRightColumnMaxH(leftColumnRef.current.offsetHeight)
    }

    measure()
    const ro = new ResizeObserver(measure)
    if (leftColumnRef.current) ro.observe(leftColumnRef.current)
    mq.addEventListener('change', measure)
    return () => {
      ro.disconnect()
      mq.removeEventListener('change', measure)
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()

    const data = e.target

    try {
      const requiredFields = ['title', 'description', 'project']
      const missingFields = requiredFields.filter(field => !data[field].value.trim())

      if (missingFields.length > 0) {
        toast.error(`Faltan campos: ${missingFields.join(', ')}`, {
          position: 'bottom-center',
          theme: 'colored'
        })
        return
      }

      const imageNames = ['image1', 'image2', 'image3', 'image4']
      const missingImages = imageNames.filter((name) => !data[name]?.files?.[0])
      if (missingImages.length > 0) {
        toast.error('Sube las 4 imágenes (campos 1–4).', {
          position: 'bottom-center',
          theme: 'colored'
        })
        return
      }

      const urlImages = await uploadImages(e)

      const dataUser = {
        id: '',
        title: data.title.value.trim(),
        name: data.title.value.toLowerCase().replace(/\s+/g, ''),
        description: data.description.value.trim(),
        project: data.project.value.trim(),
        behanceLink: data.behanceLink.value.trim(),
        siteLink: data.siteLink.value.trim(),
        gitLink: data.gitLink.value.trim(),
        images: urlImages,
        categories: {
          uxdesign: data.uxdesign.checked,
          uidesign: data.uidesign.checked,
          frontend: data.frontend.checked
        }
      }

      setFormData(dataUser)
      await addProject(dataUser)
      setFormData('')
      await fetchProjects()
      toast.success('Project added successfully', {
        position: 'bottom-center',
        theme: 'colored'
      })
    } catch (error) {
      console.error('Error uploading images: ', error)
      toast.error('Error uploading images: ' + error.message, {
        position: 'bottom-center',
        theme: 'colored'
      })
    }
  }

  const onFileChange = (e) => {
    const { name, files } = e.target
    if (!files?.[0]) return
    setSelectedFiles(prevState => ({
      ...prevState,
      [name]: files[0].name
    }))
  }

  const uploadImages = async (e) => {
    const data = e.target
    const imageNames = ['image1', 'image2', 'image3', 'image4']
    const uploadPromises = imageNames.map(imageName =>
      uploadImage(data[imageName].files[0], data.title.value)
    )

    const urlImages = await Promise.all(uploadPromises)
    return urlImages
  }

  const onChangeText = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onChangeCheckbox = (e) => {
    const { name, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      categories: {
        ...(prevState.categories || {}),
        [name]: checked
      }
    }))
  }

  return (
    <div className='form-add-project-card'>
      <form onSubmit={onSubmit}>
        <div className='form-add-project-div'>

          <div className='section-form1' ref={leftColumnRef}>

            <div className='inputs-text-div'>
              <p>Datos del proyecto</p>
              {dataForm.map((field, index) => {
                if (field.type === 'text') {
                  return (
                    <input
                      key={index}
                      type='text'
                      placeholder={field.placeholder}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={onChangeText}
                      id={'input-' + field.name}
                      className='input-text'
                    />
                  )
                }
                if (field.type === 'textarea') {
                  return (
                    <textarea
                      key={index}
                      placeholder={field.placeholder}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={onChangeText}
                      id={'input-' + field.name}
                      className='input-text input-text--textarea'
                      rows={4}
                    />
                  )
                }
                return null
              })}
            </div>

            <div className='checkbox-div'>
              <p>Categorías</p>
              <div className='inputs-checkbox-div'>

                {dataForm.map((field, index) => (
                  field.type === 'checkbox'
                    ? (
                      <label
                        key={index}
                        className={`filter-label-b ${formData.categories?.[field.name] ? 'selected' : ''}`}
                      >
                        <input
                          type='checkbox'
                          name={field.name}
                          checked={!!formData.categories?.[field.name]}
                          onChange={onChangeCheckbox}
                          className='check-input'
                        />
                        {field.label}
                      </label>)
                    : null
                ))}

              </div>
            </div>

          </div>

          <div
            className='section-form2 form-add-project__column-right'
            style={rightColumnMaxH != null ? { height: rightColumnMaxH } : undefined}
          >
            <div className='inputs-image'>
              <ProjectImageLayoutDiagram
                onFileChange={onFileChange}
                selectedFiles={selectedFiles}
                bounded={rightColumnMaxH != null}
              />
            </div>

            <input
              className='submit-input-add-project'
              type='submit'
              value={submitText}
              id='submit-desktop'
            />
          </div>

        </div>
        <input
          id='submit-mobile'
          className='submit-input-add-project'
          type='submit'
          value={submitText}
        />
      </form>
    </div>
  )
}
FormAddProject.propTypes = {
  dataForm: PropTypes.array,
  checkboxData: PropTypes.array,
  submitText: PropTypes.string
}
