import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {MdSearch} from 'react-icons/md'

import {
  VideosContainer,
  SearchVideoInputContainer,
  NoResultsAndFailureContainer,
  NoResultsAndFailureTitle,
  NoResultsAndFailureDesc,
  RetryButton,
  SearchVideoInput,
  SearchVideoButton,
} from './styledComponent'

import VideoCard from '../VideoCard'
import './index.css'

// console.log(formatDistanceToNow(new Date(2021, 8, 20)))

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class GeneralContent extends Component {
  state = {
    searchVideo: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGeneralVideosList()
  }

  getGeneralVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchVideo} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchVideo}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
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
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  updateSearch = event => {
    this.setState({searchVideo: event.target.value})
  }

  getSearchResults = () => {
    this.getGeneralVideosList()
  }

  renderNoResultsView = () => (
    <NoResultsAndFailureContainer>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        className="failure-and-no-results-img"
      />
      <NoResultsAndFailureTitle>
        No Search results found
      </NoResultsAndFailureTitle>
      <NoResultsAndFailureDesc>
        Try different key words or remove search filter
      </NoResultsAndFailureDesc>
      <RetryButton onClick={this.getGeneralVideosList} type="button">
        Retry
      </RetryButton>
    </NoResultsAndFailureContainer>
  )

  renderAllVideosView = () => {
    const {videosList} = this.state
    const showVideos = videosList.length > 0

    return showVideos ? (
      <VideosContainer>
        {videosList.map(eachVideo => (
          <VideoCard key={eachVideo.id} eachVideo={eachVideo} />
        ))}
      </VideosContainer>
    ) : (
      this.renderNoResultsView()
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <NoResultsAndFailureContainer>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="failure-and-no-results-img"
      />
      <NoResultsAndFailureTitle>
        Oops! Something Went Wrong
      </NoResultsAndFailureTitle>
      <NoResultsAndFailureDesc>
        We are having some trouble to complete your request. Please try again.
      </NoResultsAndFailureDesc>
      <RetryButton type="button" onClick={this.getGeneralVideosList}>
        Retry
      </RetryButton>
    </NoResultsAndFailureContainer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAllVideosView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchVideo} = this.state
    return (
      <div>
        <SearchVideoInputContainer>
          <SearchVideoInput
            type="search"
            value={searchVideo}
            placeholder="Search"
            onChange={this.updateSearch}
          />
          <SearchVideoButton
            data-testid="searchButton"
            type="button"
            onClick={this.getSearchResults}
          >
            <MdSearch />
          </SearchVideoButton>
        </SearchVideoInputContainer>
        {this.renderAllVideos()}
      </div>
    )
  }
}

export default GeneralContent
