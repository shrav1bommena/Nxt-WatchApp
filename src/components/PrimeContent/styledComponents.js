import styled from 'styled-components'

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 250px;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`
export const CloseButton = styled.button`
  border: none;
  font-size: 18px;
  background-color: transparent;
  align-self: flex-start;
`
export const BannerImageLogo = styled.img`
  width: 135px;
`
export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 370px;
`
