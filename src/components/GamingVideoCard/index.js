import {Link} from 'react-router-dom'

import {VideoContainer, VideoTitle, VideoDesc} from './styledComponents'

import './index.css'
import ThemeContextWithSaved from '../../context/SavedVideosContext'

const GamingVideoCard = props => {
  const {eachVideo} = props
  const {id, thumbnailUrl, title, viewCount} = eachVideo

  return (
    <ThemeContextWithSaved.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Link className="gaming-video-link" to={`/videos/${id}`}>
            <VideoContainer>
              <img
                className="gaming-video-img"
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
              <VideoDesc>{viewCount} Watching Worldwide</VideoDesc>
            </VideoContainer>
          </Link>
        )
      }}
    </ThemeContextWithSaved.Consumer>
  )
}

export default GamingVideoCard
