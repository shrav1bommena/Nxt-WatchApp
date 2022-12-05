import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import HomeLeftTab from '../HomeLeftTab'
import ThemeContextWithSaved from '../../context/SavedVideosContext'

import {
  VideosContainer,
  VideoContainer,
  VideoThumbnail,
  VideoTitle,
  VideosDetailsDesc,
  NoVideosContainer,
  NoVideosHeading,
  NoVideosDescription,
  SavedVideosBanner,
  SavedVideosIconContainer,
} from './styledComponents'

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
                    <SavedVideosBanner darkTheme={darkTheme}>
                      <SavedVideosIconContainer darkTheme={darkTheme}>
                        <HiFire />
                      </SavedVideosIconContainer>
                      <h1>Saved Videos</h1>
                    </SavedVideosBanner>
                    <ul className="saved-videos-list-container">
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
                          <Link
                            key={id}
                            className="link-video"
                            to={`/videos/${id}`}
                          >
                            <VideoContainer>
                              <VideoThumbnail
                                src={thumbnailUrl}
                                alt="video thumbnail"
                              />
                              <div className="saved-video-details-container">
                                <VideoTitle darkTheme={darkTheme}>
                                  {title}
                                </VideoTitle>
                                <VideosDetailsDesc>{name}</VideosDetailsDesc>
                                <div>
                                  <VideosDetailsDesc>
                                    {viewCount} views
                                  </VideosDetailsDesc>
                                  <VideosDetailsDesc>
                                    {formatDistanceToNow(
                                      new Date(publishedAt),
                                      {
                                        addSuffix: true,
                                      },
                                    )}
                                  </VideosDetailsDesc>
                                </div>
                              </div>
                            </VideoContainer>
                          </Link>
                        )
                      })}
                    </ul>
                  </div>
                ) : (
                  <NoVideosContainer darkTheme={darkTheme}>
                    <img
                      className="no-videos-image"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoVideosHeading darkTheme={darkTheme}>
                      No saved videos found
                    </NoVideosHeading>
                    <NoVideosDescription darkTheme={darkTheme}>
                      You can save your videos while watching them
                    </NoVideosDescription>
                  </NoVideosContainer>
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
