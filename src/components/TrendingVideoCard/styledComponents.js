import styled from 'styled-components'

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
  @media screen and (min-width: 576px) {
    max-width: 350px;
    max-height: 220px;
    margin-right: 10px;
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
