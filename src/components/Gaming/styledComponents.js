import styled from 'styled-components'

export const VideosContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingBanner = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f1f1f1')};
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 30vh;
  max-height: 120px;
  color: ${props => (props.darkTheme ? '#f8fbfc' : '#1c293a')};
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

export const FailureContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 92vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 90vh;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.darkTheme ? '#f8fbfc' : '#1c293a')};
  font-weight: 500;
  font-family: Roboto;
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 24px;
  text-align: center;
`
export const FailureDescription = styled.p`
  color: ${props => (props.darkTheme ? '#94a3b8' : '#616e7c')};
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 400;
  font-family: Roboto;
  font-size: 18px;
  text-align: center;
  max-width: 450px;
`
export const LoadingContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  height: 92vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 90vh;
  }
`
