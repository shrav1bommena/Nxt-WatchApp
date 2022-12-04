import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import GamingVideoCard from '../GamingVideoCard'
import HomeLeftTab from '../HomeLeftTab'
import ThemeContextWithSaved from '../../context/SavedVideosContext'

import './index.css'
import {
  VideosContainer,
  GamingBanner,
  GamingIconContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getDataOnRetry = () => {
    this.getTrendingVideosList()
  }

  renderGamingVideosView = () => {
    const {gamingVideosList} = this.state

    return (
      <ThemeContextWithSaved.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <VideosContainer
              data-testid="gaming"
              darkTheme={darkTheme}
              className="site-layout-content"
            >
              <GamingBanner>
                <GamingIconContainer>
                  <SiYoutubegaming />
                </GamingIconContainer>
                <h1>Gaming</h1>
              </GamingBanner>
              <ul className="gaming-videos-list-container">
                {gamingVideosList.map(eachVideo => (
                  <GamingVideoCard key={eachVideo.id} eachVideo={eachVideo} />
                ))}
              </ul>
            </VideosContainer>
          )
        }}
      </ThemeContextWithSaved.Consumer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <button type="button" onClick={this.getDataOnRetry}>
        Retry
      </button>
    </div>
  )

  renderGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="site-layout">
        <Header />
        <div className="site-layout-body">
          <HomeLeftTab />
          {this.renderGamingVideos()}
        </div>
      </div>
    )
  }
}

export default Gaming
