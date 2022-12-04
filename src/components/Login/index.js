import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import ThemeContextWithSaved from '../../context/SavedVideosContext'

import {
  MainContainer,
  LoginButton,
  Form,
  InputLabel,
  InputField,
} from './styledComponents'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  showSubmitError = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      this.showSubmitError(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  renderUsernameField = darkTheme => {
    const {username} = this.state

    return (
      <>
        <InputLabel darkTheme={darkTheme} htmlFor="username">
          USERNAME
        </InputLabel>
        <InputField
          darkTheme={darkTheme}
          className="login-input-field"
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = darkTheme => {
    const {showPassword, password} = this.state
    const passwordAttribValue = showPassword ? 'text' : 'password'

    return (
      <>
        <InputLabel darkTheme={darkTheme} htmlFor="password">
          PASSWORD
        </InputLabel>
        <InputField
          darkTheme={darkTheme}
          className="login-input-field"
          id="password"
          type={passwordAttribValue}
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
        />
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {
      showPassword,
      username,
      password,
      showSubmitError,
      errorMsg,
    } = this.state

    return (
      <ThemeContextWithSaved.Consumer>
        {value => {
          const {darkTheme} = value

          const loginLogoImageUrl = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <MainContainer darkTheme={darkTheme} className="main-container">
              {/* <div className="login-container"> */}
              <Form
                darkTheme={darkTheme}
                className="form-container"
                onSubmit={this.submitForm}
              >
                <img
                  src={loginLogoImageUrl}
                  alt="website logo"
                  className="login-website-logo-mobile-image"
                />
                <img
                  src={loginLogoImageUrl}
                  alt="website logo"
                  className="login-website-logo-desktop-image"
                />
                <div className="input-container">
                  {this.renderUsernameField(darkTheme)}
                </div>
                <div className="input-container">
                  {this.renderPasswordField(darkTheme)}
                </div>
                <div className="input-checkbox-container">
                  <input
                    className="login-input-checkbox-field"
                    type="checkbox"
                    value="showPassword"
                    id="show-password"
                    onChange={this.onChangeShowPassword}
                  />
                  <label className="input-label" htmlFor="show-password">
                    Show Password
                  </label>
                </div>
                <LoginButton className="login-button" type="submit">
                  Login
                </LoginButton>
                {showSubmitError && (
                  <p className="error-message">*{errorMsg}</p>
                )}
              </Form>
              {/* </div> */}
            </MainContainer>
          )
        }}
      </ThemeContextWithSaved.Consumer>
    )
  }
}

export default Login
