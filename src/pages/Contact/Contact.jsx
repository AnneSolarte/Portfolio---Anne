import './Contact.css'
import { contactFormData } from '../../data/forms'
import { FormContact } from '../../components/FormContact/FormContact'

export const Contact = () => {
  return (
    <div className='page-div'>
      <div className='contact-page-div'>
        <div className='contact-card'>
          <div className='black-line' />
          <h1>Get</h1>
          <h1>in Touch</h1>
          <p>Send me a message so we can talk</p>
        </div>
        <div>
          <FormContact
            dataForm={contactFormData}
            submitText='SEND'
          />
        </div>
      </div>

    </div>
  )
}
