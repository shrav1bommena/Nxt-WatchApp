import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import HomeLeftTab from '../HomeLeftTab'
import ThemeContextWithSaved from '../../context/SavedVideosContext'

import VideosContainer from './styledComponents'

import './index.css'

const SavedVideos = () => (
  <>
    <div className="site-layout">
      <Header />
      <div className="site-layout-body">
        <HomeLeftTab />
        <ThemeContextWithSaved.Consumer>
          {value => {
            const {savedVideosList, darkTheme} = value

            const showVideos = savedVideosList.length > 0

            return (
              <VideosContainer
                data-testid="savedVideos"
                darkTheme={darkTheme}
                className="site-layout-content"
              >
                {showVideos ? (
                  <div>
                    <div data-testid="banner">
                      <h1>Saved Videos</h1>
                    </div>
                    <ul>
                      {savedVideosList.map(eachVideo => {
                        const {
                          id,
                          publishedAt,
                          thumbnailUrl,
                          title,
                          viewCount,
                          description,
                          videoUrl,
                          channel,
                        } = eachVideo
                        const {name, profileImageUrl, subscriberCount} = channel

                        return (
                          <Link to={`/videos/${id}`} key={id}>
                            <li>
                              <img src={thumbnailUrl} alt="video thumbnail" />
                              <div>
                                <p>{title}</p>
                                <p>{name}</p>
                                <div>
                                  <p>{viewCount} views .</p>
                                  <p>
                                    {formatDistanceToNow(
                                      new Date(publishedAt),
                                      {addSuffix: true},
                                    )}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </Link>
                        )
                      })}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <h1>No saved videos found</h1>
                    <p>You can save your videos while watching them</p>
                  </div>
                )}
              </VideosContainer>
            )
          }}
        </ThemeContextWithSaved.Consumer>
      </div>
    </div>
  </>
)

export default SavedVideos
