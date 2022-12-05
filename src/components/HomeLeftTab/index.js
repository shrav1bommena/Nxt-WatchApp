import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeContextWithSaved from '../../context/SavedVideosContext'

import {
  Sidebar,
  SocialMediaLogo,
  HomeTab,
  TrendingTab,
  SavedVideosTab,
  GamingTab,
  HomeTabText,
  TrendingText,
  GamingText,
  SavedVideosText,
  FooterSection,
} from './styledComponents'

import './index.css'

const TabItemsList = [
  {id: 'Home', tabText: 'Home'},
  {id: 'Trending', tabText: 'Trending'},
  {id: 'Gaming', tabText: 'Gaming'},
  {id: 'SavedVideos', tabText: 'Saved'},
]
// Todo:
// Making Active Tab Item so active tab background will change
// change icon color by using css with className value as variable based on darkTheme and ActiveTab

const HomeLeftTab = props => (
  <ThemeContextWithSaved.Consumer>
    {value => {
      const {darkTheme} = value
      const {location} = props

      return (
        <Sidebar darkTheme={darkTheme} className="site-layout-sidebar">
          <div>
            <Link to="/" className="nav-link">
              <HomeTab
                darkTheme={darkTheme}
                path={location.pathname}
                className="site-tab-item "
              >
                <AiFillHome className="nav-tab-icon" />
                <HomeTabText darkTheme={darkTheme} path={location.pathname}>
                  Home
                </HomeTabText>
              </HomeTab>
            </Link>
            <Link to="/trending" className="nav-link">
              <TrendingTab
                darkTheme={darkTheme}
                path={location.pathname}
                className="site-tab-item "
              >
                <HiFire className="nav-tab-icon" />
                <TrendingText darkTheme={darkTheme} path={location.pathname}>
                  Trending
                </TrendingText>
              </TrendingTab>
            </Link>
            <Link to="/gaming" className="nav-link">
              <GamingTab
                darkTheme={darkTheme}
                path={location.pathname}
                className="site-tab-item "
              >
                <SiYoutubegaming className="nav-tab-icon" />
                <GamingText darkTheme={darkTheme} path={location.pathname}>
                  Gaming
                </GamingText>
              </GamingTab>
            </Link>
            <Link to="/saved-videos" className="nav-link">
              <SavedVideosTab
                darkTheme={darkTheme}
                path={location.pathname}
                className="site-tab-item "
              >
                <CgPlayListAdd className="nav-tab-icon" />
                <SavedVideosText darkTheme={darkTheme} path={location.pathname}>
                  Saved Videos
                </SavedVideosText>
              </SavedVideosTab>
            </Link>
          </div>
          <FooterSection
            darkTheme={darkTheme}
            className="sidebar-bottom-section"
          >
            <p>CONTACT US</p>
            <div className="social-media-logos-container">
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </div>
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </FooterSection>
        </Sidebar>
      )
    }}
  </ThemeContextWithSaved.Consumer>
)

export default withRouter(HomeLeftTab)
