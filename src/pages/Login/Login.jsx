import './Login.css'
import { loginFormData } from '../../data/forms'
import submitImg from '../../assets/submit-img.png'
import { FormLogin } from '../../components/FormLogin/FormLogin'

export const Login = () => {
  return (
    <div className='page-div'>
      <div className='login-page-div'>
        <div className='login-card'>
          <div className='black-line' />
          <h1>Welcome to management panel </h1>
          <p>Log in to make changes to the page</p>
        </div>

        <div className='login-form-content'>
          <h3>Login</h3>
          <FormLogin
            dataForm={loginFormData}
            submitImg={submitImg}
          />
        </div>
      </div>

    </div>
  )
}
