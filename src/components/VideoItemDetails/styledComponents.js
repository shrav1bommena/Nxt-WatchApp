import styled from 'styled-components'

export const VideosContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
`

export const VideoTopSection = styled.div`
  padding: 15px;
  @media screen and (min-width: 768px) {
    padding: 0 25px 25px 25px;
  }
`

export const VideoBottomSection = styled.div`
  padding: 15px;
  border-top: 1px solid gray;
  @media screen and (min-width: 768px) {
    margin-left: 25px;
    margin-right: 25px;
  }
`

export const VideoChannelName = styled.p`
  font-size: 14px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#212121')};
`
export const VideoChannelSubscribers = styled.p`
  font-size: 12px;
  color: #475569;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#ffffff' : '#212121')};
`
export const VideoDescInChannel = styled.p`
  margin-top: 25px;
  line-height: 24px;
  font-size: 15px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#475569')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const VideoDescOutChannel = styled.p`
  line-height: 24px;
  font-size: 14px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#475569')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LikeButton = styled.button`
  color: ${props => {
    if (props.liked === 'initial') {
      return '#64748b'
    }
    if (props.liked) {
      return '#2563eb'
    }
    return '#64748b'
  }};
  background-color: transparent;
  border: none;
  height: 36px;
  font-weight: 600;
`

export const DislikeButton = styled.button`
  color: ${props => {
    if (props.disliked === 'initial') {
      return '#64748b'
    }
    if (props.disliked) {
      return '#2563eb'
    }
    return '#64748b'
  }};
  background-color: transparent;
  border: none;
  height: 36px;
  width: 95px;
  font-weight: 600;
`

export const SaveButton = styled.button`
  color: ${props => {
    if (props.disliked === 'initial') {
      return '#64748b'
    }
    if (props.disliked) {
      return '#2563eb'
    }
    return '#64748b'
  }};
  background-color: transparent;
  border: none;
  height: 36px;
  width: 95px;
  font-weight: 600;
`
export const NoResultsAndFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoResultsAndFailureTitle = styled.h1`
  margin-top: 20px;
  font-size: 26px;
  font-weight: 500;
  font-family: 'Roboto';
  text-align: center
  color: #322b3c;
  @media screen and (max-width: 575px) {
      font-size: 22px;
  }
`
export const NoResultsAndFailureDesc = styled.p`
  color: #6c7582;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-top: 10px;
  text-align: center;
`
export const RetryButton = styled.button`
  height: 40px;
  width: 104px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  border: none;
  border-radius: 3px;
  margin-bottom: 20px;
`
