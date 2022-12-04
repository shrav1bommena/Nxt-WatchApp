import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import ThemeContextWithSaved from '../../context/SavedVideosContext'

import {
  VideoContainer,
  VideoThumbnail,
  VideoDetailsContainer,
  ChannelLogo,
  VideoDetailsTitle,
  VideosDetailsDesc,
} from './styledComponents'

import './index.css'

const VideoCard = props => {
  const {eachVideo} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = eachVideo
  const {name, profileImageUrl} = channel

  return (
    <ThemeContextWithSaved.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Link to={`/videos/${id}`} className="link-video">
            <VideoContainer darkTheme={darkTheme}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <div>
                  <VideoDetailsTitle darkTheme={darkTheme}>
                    {title}
                  </VideoDetailsTitle>
                  <VideosDetailsDesc darkTheme={darkTheme}>
                    {name}
                  </VideosDetailsDesc>
                  <div className="views-and-date-div">
                    <VideosDetailsDesc darkTheme={darkTheme}>
                      {viewCount} views
                    </VideosDetailsDesc>
                    <BsDot className="view-dot-icon" />
                    <VideosDetailsDesc darkTheme={darkTheme}>
                      {formatDistanceToNow(new Date(publishedAt))} ago
                    </VideosDetailsDesc>
                  </div>
                </div>
              </VideoDetailsContainer>
            </VideoContainer>
          </Link>
        )
      }}
    </ThemeContextWithSaved.Consumer>
  )
}

export default VideoCard
