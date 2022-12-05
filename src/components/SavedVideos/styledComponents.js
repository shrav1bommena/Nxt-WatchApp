import styled from 'styled-components'

export const VideosContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedVideosBanner = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f1f1f1')};
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 30vh;
  max-height: 120px;
  color: ${props => (props.darkTheme ? '#f8fbfc' : '#1c293a')};
`

export const SavedVideosIconContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#e2e8f0')};
  border-radius: 35px;
  height: 70px;
  width: 70px;
  padding: 20px 22px 20px 22px;
  font-size: 28px;
  color: #ff0000;
  margin-right: 16px;
`

export const NoVideosContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`
export const NoVideosHeading = styled.h1`
  color: ${props => (props.darkTheme ? '#f8fbfc' : '#1c293a')};
  font-weight: 500;
  font-family: Roboto;
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 24px;
  text-align: center;
`
export const NoVideosDescription = styled.p`
  color: ${props => (props.darkTheme ? '#94a3b8' : '#616e7c')};
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 400;
  font-family: Roboto;
  font-size: 16px;
  text-align: center;
  max-width: 450px;
`

export const VideoContainer = styled.li`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    width: 100%;
  }
  margin-bottom: 45px;
`

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 240px;
  @media screen and (min-width: 576px) {
    margin-right: 15px;
    max-width: 320px;
    height: 200px;
    max-height: 220px;
  }
`

export const VideoTitle = styled.p`
  margin-top: 5px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f8fbfc' : '#181818')};
`
export const VideosDetailsDesc = styled.p`
  font-size: 15px;
  line-height: 16px;
  margin-top: 0px;
  margin-bottom: 13x;
  font-weight: 400;
  color: #475569;
`
