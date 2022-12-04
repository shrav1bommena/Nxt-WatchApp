import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import ThemeContextWithSaved from '../../context/SavedVideosContext'

import {
  VideoContainer,
  VideoThumbnail,
  VideoTitle,
  VideosDetailsDesc,
} from './styledComponents'
import './index.css'

const TrendingVideoCard = props => {
  const {eachVideo} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = eachVideo
  const {name, profileImageUrl} = channel

  return (
    <ThemeContextWithSaved.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Link className="link-video" to={`/videos/${id}`}>
            <VideoContainer>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <div>
                <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
                <VideosDetailsDesc>{name}</VideosDetailsDesc>
                <div>
                  <VideosDetailsDesc>{viewCount} views</VideosDetailsDesc>
                  <VideosDetailsDesc>
                    {formatDistanceToNow(new Date(publishedAt), {
                      addSuffix: true,
                    })}
                  </VideosDetailsDesc>
                </div>
              </div>
            </VideoContainer>
          </Link>
        )
      }}
    </ThemeContextWithSaved.Consumer>
  )
}

export default TrendingVideoCard
