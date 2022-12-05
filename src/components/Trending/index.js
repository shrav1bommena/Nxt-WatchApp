import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import TrendingVideoCard from '../TrendingVideoCard'
import HomeLeftTab from '../HomeLeftTab'
import ThemeContextWithSaved from '../../context/SavedVideosContext'

import {
  VideosContainer,
  TrendingBanner,
  TrendingIconContainer,
  FailureContainer,
  FailureHeading,
  FailureDescription,
  LoadingContainer,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingVideosViews = () => {
    const {trendingVideosList} = this.state

    return (
      <ThemeContextWithSaved.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <VideosContainer
              darkTheme={darkTheme}
              className="site-layout-content"
              data-testid="trending"
            >
              <TrendingBanner darkTheme={darkTheme}>
                <TrendingIconContainer darkTheme={darkTheme}>
                  <HiFire />
                </TrendingIconContainer>
                <h1>Trending</h1>
              </TrendingBanner>
              <ul className="trending-videos-list-container">
                {trendingVideosList.map(eachVideo => (
                  <TrendingVideoCard key={eachVideo.id} eachVideo={eachVideo} />
                ))}
              </ul>
            </VideosContainer>
          )
        }}
      </ThemeContextWithSaved.Consumer>
    )
  }

  renderLoadingView = () => (
    <ThemeContextWithSaved.Consumer>
      {value => {
        const {darkTheme} = value
        const loadingColor = darkTheme ? '#ffffff' : '#000000'

        return (
          <LoadingContainer
            darkTheme={darkTheme}
            className="loader-container"
            data-testid="loader"
          >
            <Loader
              type="ThreeDots"
              color={loadingColor}
              height="50"
              width="50"
            />
          </LoadingContainer>
        )
      }}
    </ThemeContextWithSaved.Consumer>
  )

  renderFailureView = () => (
    <ThemeContextWithSaved.Consumer>
      {value => {
        const {darkTheme} = value
        const failureImageUrl = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer darkTheme={darkTheme}>
            <img
              className="trending-failure-image"
              src={failureImageUrl}
              alt="failure view"
            />
            <FailureHeading darkTheme={darkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription darkTheme={darkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <button
              className="trending-failure-retry-button"
              type="button"
              onClick={this.getTrendingVideosList}
            >
              Retry
            </button>
          </FailureContainer>
        )
      }}
    </ThemeContextWithSaved.Consumer>
  )

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosViews()
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
          {this.renderTrendingVideos()}
        </div>
      </div>
    )
  }
}

export default Trending
