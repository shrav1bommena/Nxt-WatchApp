import styled from 'styled-components'

export const HeaderNav = styled.nav`
  background-color: ${props => (props.darkTheme ? '#212121' : '#fffffc')};
`

export const LogoutContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#fffffc')};
`

export const LogoutText = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#212121')};
`

export const LogoutConfirmButton = styled.button`
  height: 36px;
  border: 1px solid gray;
  color: gray;
  background-color: ${props => (props.darkTheme ? '#212121' : '#fffffc')};
  margin-right: 5px;
`
export const LogoutCancelButton = styled.button`
  height: 36px;
  border: none;
  background-color: blue;
  color: #ffffff;
`
