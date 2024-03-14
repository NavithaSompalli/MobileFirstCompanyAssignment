import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()

  const handleLogin = e => {
    e.preventDefault()

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!username) {
      setErrorMsg('Enter your username')
    } else if (!password) {
      setErrorMsg('Enter your password')
    } else if (!password.match(passwordRegex)) {
      alert(
        'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long',
      )
    } else if (username === 'Navitha' && password === 'Navi@1234') {
      history.push('/home')
    } else {
      setErrorMsg('Invalid credentials')
    }
  }

  const handleInputChange = () => {
    setErrorMsg('')
  }

  return (
    <div className="container">
      <div className="login-container">
        <div className="credentials">
          <span>Username: Navitha</span>
          <br />
          <span>Password: Navi@1234</span>
        </div>
        <h2 className="login">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={e => {
                setUsername(e.target.value)
                handleInputChange()
              }}
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value)
                handleInputChange()
              }}
              placeholder="Password"
            />
          </div>
          <span className="error-msg">{errorMsg}</span>
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
