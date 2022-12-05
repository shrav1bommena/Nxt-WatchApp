import styled from 'styled-components'

export const VideoContainer = styled.li`
  width: 160px;
  margin-right: 15px;
  margin-bottom: 55px;
  @media screen and (min-width: 576px) {
    width: 220px;
  }
  @media screen and (min-width: 768px) {
    width: 220px;
  }
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const VideoDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: gray;
`
