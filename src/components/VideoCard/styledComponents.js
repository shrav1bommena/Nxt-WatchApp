import styled from 'styled-components'

export const VideoContainer = styled.li`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  width: 280px;
  margin-right: 18px;
  margin-bottom: 75px;
  @media screen and (max-width: 767px) {
    width: 250px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    flex-grow: 1;
    margin-right: 0px;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  color: black;
`

export const ChannelLogo = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 15px;
  margin-right: 10px;
`
export const VideoDetailsTitle = styled.p`
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#ffffff' : '#181818')};
`
export const VideosDetailsDesc = styled.p`
  font-size: 15px;
  line-height: 16px;
  margin-top: 0px;
  margin-bottom: 13x;
  font-weight: 400;
  color: #475569;
`
