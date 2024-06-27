import './FormAddProject.css'
import PropTypes from 'prop-types'
import { useContextHook } from '../../hooks/contextHook'
import { uploadImage, addProject } from '../../services/firebase'
import imgIcon from '../../assets/imgIcon.png'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const FormAddProject = ({ submitText, dataForm }) => {
  const { formData, setFormData, fetchProjects } = useContextHook()
  const [selectedFiles, setSelectedFiles] = useState({})

  const onSubmit = async (e) => {
    e.preventDefault()

    const data = e.target

    try {
      const urlImages = await uploadImages(e)
      const requiredFields = ['title', 'description', 'project', 'behanceLink']
      const missingFields = requiredFields.filter(field => !data[field].value.trim())

      if (missingFields.length > 0) {
        toast.error(`Missing fields: ${missingFields.join(', ')}`, {
          position: 'bottom-center',
          theme: 'colored'
        })
        return
      }

      const dataUser = {
        id: '',
        title: data.title.value,
        name: data.title.value.toLowerCase().replace(/\s+/g, ''),
        description: data.description.value,
        project: data.project.value,
        behanceLink: data.project.value,
        images: urlImages,
        categories: {
          uxdesign: data.uxdesign.checked,
          uidesign: data.uidesign.checked,
          frontend: data.frontend.checked
        }
      }

      console.log(dataUser)
      setFormData(dataUser)
      addProject(dataUser)
      setFormData('')
      fetchProjects()
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
    setSelectedFiles(prevState => ({
      ...prevState,
      [name]: files[0].name
    }))
  }

  const uploadImages = async (e) => {
    const data = e.target
    const imageNames = ['image1', 'image2', 'image3', 'image4']
    console.log(data)
    const uploadPromises = imageNames.map(imageName =>
      uploadImage(data[imageName].files[0], data.title.value)
    )

    const urlImages = await Promise.all(uploadPromises)
    console.log('Saved Images URL:', urlImages)
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
        ...prevState.categories,
        [name]: checked
      }
    }))
  }

  return (
    <div className='form-add-project-card'>
      <form onSubmit={onSubmit}>
        <div className='form-add-project-div'>

          <div className='section-form1'>

            <div className='inputs-text-div'>
              <p>Enter the title and description of your project.</p>
              {dataForm.map((field, index) => (
                field.type === 'text'
                  ? (<input
                      key={index}
                      type='text'
                      placeholder={field.placeholder}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={onChangeText}
                      id={'input-' + field.name}
                      className='input-text'
                     />)
                  : null

              )
              )}
            </div>

            <div className='checkbox-div'>
              <p>Choose categories</p>
              <div className='inputs-checkbox-div'>

                {dataForm.map((field, index) => (
                  field.type === 'checkbox'
                    ? (
                      <label
                        key={index}
                        className={`filter-label-b ${field.value ? 'selected' : ''}`}
                      >
                        <input
                          type='checkbox'
                          name={field.name}
                          checked={field.value}
                          onChange={onChangeCheckbox}
                          className='check-input'
                        />
                        {field.label}
                      </label>)
                    : null
                )

                )}
              </div>
            </div>

          </div>

          <div className='section-form2'>
            <div className='inputs-image-div'>
              {dataForm.map((field, index) => (
                field.type === 'image'
                  ? (
                    <div
                      className='container-input'
                      key={index}
                    >
                      <input
                        type='file'
                        name={field.name}
                        id={`file-${index}`}
                        className='inputfile inputfile-5'
                        onChange={onFileChange}
                      />
                      <label htmlFor={`file-${index}`}>
                        <figure>
                          <img src={imgIcon} alt='icon' />
                        </figure>
                        <span className='iborrainputfile'>
                          {selectedFiles[field.name] || `Seleccionar ${field.name}`}
                        </span>
                      </label>
                    </div>
                    )
                  : null
              ))}

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
