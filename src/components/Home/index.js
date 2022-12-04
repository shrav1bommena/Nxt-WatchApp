import {Component} from 'react'

import ThemeContextWithSaved from '../../context/SavedVideosContext'

import VideosContainer from './styledComponents'

import Header from '../Header'
import GeneralContent from '../GeneralContent'
import HomeLeftTab from '../HomeLeftTab'
import PrimeContent from '../PrimeContent'

import './index.css'

class Home extends Component {
  state = {showBanner: true}

  hideBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state
    return (
      <ThemeContextWithSaved.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <>
              <Header />
              <div className="site-layout-body">
                <HomeLeftTab />
                <VideosContainer
                  data-testid="home"
                  darkTheme={darkTheme}
                  className="site-layout-content"
                >
                  {showBanner && <PrimeContent hideBanner={this.hideBanner} />}
                  <GeneralContent />
                </VideosContainer>
              </div>
            </>
          )
        }}
      </ThemeContextWithSaved.Consumer>
    )
  }
}

export default Home
