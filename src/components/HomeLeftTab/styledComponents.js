import styled from 'styled-components'

export const Sidebar = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
`

export const ActiveTab = styled.div`
  background-color: ${props => (props.darkTheme ? `#383838` : `#f1f5f9`)};
  padding-left: 25px;
  margin-left: 0px;
`

export const SocialMediaLogo = styled.img`
  width: 35px;
  margin-right: 10px;
`
