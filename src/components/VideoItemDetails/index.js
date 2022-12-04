/* eslint-disable jsx-a11y/img-redundant-alt */
import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContextWithSaved from '../../context/SavedVideosContext'

import Header from '../Header'
import HomeLeftTab from '../HomeLeftTab'

import {
  LikeButton,
  DislikeButton,
  SaveButton,
  VideosContainer,
  VideoTopSection,
  VideoTitle,
  VideoBottomSection,
  VideoDescInChannel,
  VideoDescOutChannel,
  VideoChannelName,
  VideoChannelSubscribers,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

// Todo
// Failure CSS NOT done yet

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    saved: 'false',
    liked: 'initial',
    disliked: 'initial',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      console.log(data)
      const videoDetails = data.video_details
      const updatedVideoDetails = {
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
        description: videoDetails.description,
        videoUrl: videoDetails.video_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }

      this.setState({
        videoDetails: {...updatedVideoDetails},
        saved: (
          <ThemeContextWithSaved.Consumer>
            {value => {
              const {savedVideosList} = value
              const isSaved = savedVideosList.some(
                eachVideo => eachVideo.id === updatedVideoDetails.id,
              )
              console.log(isSaved)
              return isSaved
            }}
          </ThemeContextWithSaved.Consumer>
        ),
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickSave = () => {
    this.setState(prevState => ({saved: !prevState.saved}))
  }

  likeVideo = () => {
    this.setState({liked: true, disliked: false})
  }

  dislikeVideo = () => {
    this.setState({liked: false, disliked: true})
  }

  renderVideoDetails = (darkTheme, saveVideo, removeVideo, savedVideosList) => {
    const {videoDetails, saved, liked, disliked} = this.state
    const {
      id,
      publishedAt,
      thumbnailUrl,
      title,
      viewCount,
      description,
      videoUrl,
      channel,
    } = videoDetails

    const savedVideo = savedVideosList.filter(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    const isSaved = savedVideo.length > 0

    const {name, profileImageUrl, subscriberCount} = channel

    const saveText = isSaved ? 'Saved' : 'Save'

    const onSave = () => {
      if (isSaved) {
        removeVideo(id)
      } else {
        saveVideo(videoDetails)
      }
      this.onClickSave()
    }

    return (
      <>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={videoUrl}
            height="100%"
            width="100%"
          />
        </div>
        <VideoTopSection>
          <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
          <div className="views-and-reaction-div">
            <div className="views-and-date-div">
              <p>{viewCount} views .</p>
              <p>
                {formatDistanceToNow(new Date(publishedAt), {addSuffix: true})}
              </p>
            </div>
            <div>
              <LikeButton onClick={this.likeVideo} liked={liked} type="button">
                <FiThumbsUp /> Like
              </LikeButton>
              <DislikeButton
                onClick={this.dislikeVideo}
                disliked={disliked}
                type="button"
              >
                <FiThumbsDown /> Dislike
              </DislikeButton>
              <SaveButton onClick={onSave} type="button">
                <CgPlayListAdd /> {saveText}
              </SaveButton>
            </div>
          </div>
        </VideoTopSection>
        <VideoBottomSection>
          <div className="video-channel-details">
            <img
              className="video-channel-logo"
              src={profileImageUrl}
              alt="channel logo"
            />
            <div>
              <VideoChannelName darkTheme={darkTheme}>{name}</VideoChannelName>
              <VideoChannelSubscribers>
                {subscriberCount} subscribers
              </VideoChannelSubscribers>
              <VideoDescInChannel darkTheme={darkTheme}>
                {description}
              </VideoDescInChannel>
            </div>
          </div>
          <VideoDescOutChannel darkTheme={darkTheme}>
            {description}
          </VideoDescOutChannel>
        </VideoBottomSection>
      </>
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
      <button type="button" onClick={this.getVideoDetails}>
        Retry
      </button>
    </div>
  )

  renderContentByStatus = (
    darkTheme,
    saveVideo,
    removeVideo,
    savedVideosList,
  ) => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetails(
          darkTheme,
          saveVideo,
          removeVideo,
          savedVideosList,
        )
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
          <ThemeContextWithSaved.Consumer>
            {value => {
              const {darkTheme, savedVideosList, saveVideo, removeVideo} = value

              return (
                <VideosContainer
                  data-testid="videoItemDetails"
                  darkTheme={darkTheme}
                  className="site-layout-content"
                >
                  {this.renderContentByStatus(
                    darkTheme,
                    saveVideo,
                    removeVideo,
                    savedVideosList,
                  )}
                </VideosContainer>
              )
            }}
          </ThemeContextWithSaved.Consumer>
        </div>
      </div>
    )
  }
}

export default VideoItemDetails
