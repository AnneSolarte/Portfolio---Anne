import PropTypes from 'prop-types'
import './FormContact.css'
import { useContextHook } from '../../hooks/contextHook'
import { toast } from 'react-toastify'

export const FormContact = ({ dataForm, submitText }) => {
  const { formData, setFormData } = useContextHook()

  const onChangeText = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const requiredFields = ['name', 'email', 'phone', 'message']
    const missingFields = requiredFields.filter(field => !formData[field])

    if (missingFields.length > 0) {
      toast.error(`Missing fields: ${missingFields.join(', ')}`, {
        position: 'bottom-center',
        theme: 'colored'
      })
      return
    }

    console.log(formData)

    e.target.reset()

    toast.success('Message sent', {
      position: 'bottom-center',
      theme: 'colored'
    })
  }

  return (
    <div className='form-contact-card'>
      <form onSubmit={onSubmit}>
        <div className='form-contact-div'>
          {dataForm.map((field, index) => (
            <input
              key={index}
              type='text'
              placeholder={field.placeholder}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={onChangeText}
              id={'input-' + field.name}
            />
          ))}
        </div>

        <input
          className='submit-input-contact'
          type='submit'
          value={submitText}
        />
      </form>
    </div>
  )
}

FormContact.propTypes = {
  dataForm: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired
    })
  ).isRequired,
  submitText: PropTypes.string
}
