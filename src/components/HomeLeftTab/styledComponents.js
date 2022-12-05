import styled from 'styled-components'

export const Sidebar = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
`

export const Tab = styled.div`
  margin-left: 0px;
  display: flex;
  align-items: center;
`

export const HomeTab = styled(Tab)`
  background-color: ${props => {
    const {darkTheme, path} = props
    if (path === '/') {
      if (darkTheme) {
        return '#383838'
      }
      return '#f1f5f9'
    }
    if (darkTheme) {
      return '#212121'
    }
    return '#ffffff'
  }};
  color: ${props => {
    const {path} = props
    if (path === '/') {
      return '#ff0000'
    }

    return '#606060'
  }};
`

export const TrendingTab = styled(Tab)`
  background-color: ${props => {
    const {darkTheme, path} = props
    if (path === '/trending') {
      if (darkTheme) {
        return '#383838'
      }
      return '#f1f5f9'
    }
    if (darkTheme) {
      return '#212121'
    }
    return '#ffffff'
  }};
  color: ${props => {
    const {path} = props
    if (path === '/trending') {
      return '#ff0000'
    }

    return '#606060'
  }};
`
export const GamingTab = styled(Tab)`
  background-color: ${props => {
    const {darkTheme, path} = props
    if (path === '/gaming') {
      if (darkTheme) {
        return '#383838'
      }
      return '#f1f5f9'
    }
    if (darkTheme) {
      return '#212121'
    }
    return '#ffffff'
  }};
  color: ${props => {
    const {path} = props
    if (path === '/gaming') {
      return '#ff0000'
    }

    return '#606060'
  }};
`
export const SavedVideosTab = styled(Tab)`
  background-color: ${props => {
    const {darkTheme, path} = props
    if (path === '/saved-videos') {
      if (darkTheme) {
        return '#383838'
      }
      return '#f1f5f9'
    }
    if (darkTheme) {
      return '#212121'
    }
    return '#ffffff'
  }};
  color: ${props => {
    const {path} = props
    if (path === '/saved-videos') {
      return '#ff0000'
    }

    return '#606060'
  }};
`

export const HomeTabText = styled.p`
  color: ${props => {
    const {darkTheme, path} = props
    if (path === '/') {
      if (darkTheme) {
        return '#f1f5f9'
      }
      return '#383838'
    }
    if (darkTheme) {
      return '#f1f5f9'
    }
    return '#383838'
  }};
  font-weight: ${props => {
    const {path} = props
    if (path === '/') {
      return 500
    }
    return 400
  }};
`

export const SavedVideosText = styled.p`
  color: ${props => {
    const {darkTheme, path} = props
    if (path === '/saved-videos') {
      if (darkTheme) {
        return '#f1f5f9'
      }
      return '#383838'
    }
    if (darkTheme) {
      return '#f1f5f9'
    }
    return '#383838'
  }};
  font-weight: ${props => {
    const {path} = props
    if (path === '/saved-videos') {
      return 500
    }
    return 400
  }};
`

export const TrendingText = styled.p`
  color: ${props => {
    const {darkTheme, path} = props
    if (path === '/trending') {
      if (darkTheme) {
        return '#f1f5f9'
      }
      return '#383838'
    }
    if (darkTheme) {
      return '#f1f5f9'
    }
    return '#383838'
  }};
  font-weight: ${props => {
    const {path} = props
    if (path === '/trending') {
      return 500
    }
    return 400
  }};
`

export const GamingText = styled.p`
  color: ${props => {
    const {darkTheme, path} = props
    if (path === '/gaming') {
      if (darkTheme) {
        return '#f1f5f9'
      }
      return '#383838'
    }
    if (darkTheme) {
      return '#f1f5f9'
    }
    return '#383838'
  }};
  font-weight: ${props => {
    const {path} = props
    if (path === '/gaming') {
      return 500
    }
    return 400
  }};
`

export const SocialMediaLogo = styled.img`
  width: 35px;
  margin-right: 10px;
`
export const FooterSection = styled.div`
  color: ${props => (props.darkTheme ? '#f8fafc' : '#314159')};
  font-family: 'Roboto';
  font-weight: 500;
`
