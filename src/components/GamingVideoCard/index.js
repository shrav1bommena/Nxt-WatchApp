import {Link} from 'react-router-dom'

import {VideoContainer, VideoTitle, VideoDesc} from './styledComponents'

import './index.css'

const GamingVideoCard = props => {
  const {eachVideo} = props
  const {id, thumbnailUrl, title, viewCount} = eachVideo

  return (
    <Link className="gaming-video-link" to={`/videos/${id}`}>
      <VideoContainer>
        <img
          className="gaming-video-img"
          src={thumbnailUrl}
          alt="video thumbnail"
        />
        <VideoTitle>{title}</VideoTitle>
        <VideoDesc>{viewCount} Watching Worldwide</VideoDesc>
      </VideoContainer>
    </Link>
  )
}

export default GamingVideoCard
