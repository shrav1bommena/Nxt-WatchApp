import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContextWithSaved from '../../context/SavedVideosContext'
import {
  HeaderNav,
  LogoutContainer,
  LogoutText,
  LogoutButton,
  LogoutCancelButton,
  LogoutConfirmButton,
} from './styledComponents'
import 'reactjs-popup/dist/index.css'

import './index.css'

class Header extends Component {
  state = {showMobileMenu: false}

  onClickMobileMenu = () => {
    this.setState(prevState => ({showMobileMenu: !prevState.showMobileMenu}))
  }

  logoutUser = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  renderMobileMenuPopup = darkTheme => (
    <div>
      <div>
        <button type="button" onClick={this.onClickMobileMenu}>
          <MdClose />
        </button>
      </div>
      <div>
        <Link to="/" className="nav-link">
          <div className="site-tab-item ">
            <AiFillHome className="nav-tab-icon" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/trending" className="nav-link">
          <div className="site-tab-item">
            <HiFire className="nav-tab-icon" />
            <p>Trending</p>
          </div>
        </Link>
        <Link to="/gaming" className="nav-link">
          <div className="site-tab-item">
            <SiYoutubegaming className="nav-tab-icon" />
            <p>Gaming</p>
          </div>
        </Link>
        <Link to="/saved-videos" className="nav-link">
          <div className="site-tab-item">
            <CgPlayListAdd className="nav-tab-icon" />
            <p>Saved Videos</p>
          </div>
        </Link>
      </div>
    </div>
  )

  render() {
    const {showMobileMenu} = this.state

    return (
      <ThemeContextWithSaved.Consumer>
        {value => {
          const {darkTheme, changeTheme} = value

          const themeIcon = darkTheme ? (
            <BsFillBrightnessHighFill className="bright-icon" />
          ) : (
            <FaMoon className="moon-icon" />
          )

          const mobileThemeHamburgerIcon = darkTheme
            ? 'hamburger-icon-night-theme'
            : 'hamburger-icon-light-theme'

          const themeImageUrl = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const onClickTheme = () => {
            changeTheme()
          }

          return showMobileMenu ? (
            <>{this.renderMobileMenuPopup()}</>
          ) : (
            <HeaderNav className="nav-header" darkTheme={darkTheme}>
              <div className="nav-content">
                <Link to="/">
                  <img
                    className="website-logo"
                    src={themeImageUrl}
                    alt="website logo"
                  />
                </Link>
                <ul className="nav-menu">
                  <li className="nav-menu-item">
                    <button
                      className="nav-theme-button"
                      data-testid="theme"
                      type="button"
                      onClick={onClickTheme}
                    >
                      {themeIcon}
                    </button>
                  </li>
                  <li className="nav-menu-item">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                      className="nav-profile-icon"
                    />
                  </li>
                  <li className="nav-menu-item">
                    <Popup
                      modal
                      trigger={
                        <LogoutButton
                          darkTheme={darkTheme}
                          className="nav-logout-button"
                          type="button"
                        >
                          Logout
                        </LogoutButton>
                      }
                    >
                      {close => (
                        <LogoutContainer
                          darkTheme={darkTheme}
                          className="logout-container"
                        >
                          <LogoutText darkTheme={darkTheme}>
                            Are you sure, you want to logout?
                          </LogoutText>
                          <div className="logout-button-container">
                            <LogoutConfirmButton
                              darkTheme={darkTheme}
                              onClick={this.logoutUser}
                              type="button"
                            >
                              Confirm
                            </LogoutConfirmButton>
                            <LogoutCancelButton
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </LogoutCancelButton>
                          </div>
                        </LogoutContainer>
                      )}
                    </Popup>
                  </li>
                </ul>
              </div>
              <div className="nav-menu-mobile">
                <ul className="nav-menu-list-mobile">
                  <li className="nav-menu-item">
                    <button
                      className="nav-theme-button"
                      data-testid="theme"
                      type="button"
                      onClick={onClickTheme}
                    >
                      {themeIcon}
                    </button>
                  </li>
                  <li className="nav-menu-item">
                    <button
                      className="hamburger-menu"
                      type="button"
                      onClick={this.onClickMobileMenu}
                    >
                      <GiHamburgerMenu className={mobileThemeHamburgerIcon} />
                    </button>
                  </li>
                  <li className="nav-menu-item pop-content">
                    <Popup
                      modal
                      trigger={
                        <button className="hamburger-menu" type="button">
                          <FiLogOut className={mobileThemeHamburgerIcon} />
                        </button>
                      }
                    >
                      {close => (
                        <LogoutContainer
                          darkTheme={darkTheme}
                          className="logout-container"
                        >
                          <LogoutText darkTheme={darkTheme}>
                            Are you sure, you want to logout?
                          </LogoutText>
                          <div className="logout-button-container">
                            <LogoutConfirmButton
                              darkTheme={darkTheme}
                              onClick={this.logoutUser}
                              type="button"
                            >
                              Confirm
                            </LogoutConfirmButton>
                            <LogoutCancelButton
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </LogoutCancelButton>
                          </div>
                        </LogoutContainer>
                      )}
                    </Popup>
                  </li>
                </ul>
              </div>
            </HeaderNav>
          )
        }}
      </ThemeContextWithSaved.Consumer>
    )
  }
}

export default withRouter(Header)
