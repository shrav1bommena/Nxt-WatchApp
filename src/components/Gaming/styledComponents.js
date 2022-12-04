import styled from 'styled-components'

export const VideosContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingBanner = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f1f1f1')};
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 30vh;
  max-height: 120px;
`

export const GamingIconContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#e2e8f0')};
  border-radius: 35px;
  height: 70px;
  width: 70px;
  padding: 20px 22px 20px 22px;
  font-size: 28px;
  color: #ff0000;
  margin-right: 16px;
`
