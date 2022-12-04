import {MdClose} from 'react-icons/md'

import './index.css'

import {
  Banner,
  CloseButton,
  BannerTextContainer,
  BannerImageLogo,
} from './styledComponents'

// Todo:
// * Need to change banner-upi-text color

const PrimeContent = props => {
  const {hideBanner} = props

  const onClickClose = () => {
    hideBanner()
  }

  return (
    <Banner data-testid="banner">
      <BannerTextContainer>
        <div>
          <BannerImageLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />

          <p className="banner-upi-text">
            Buy NXT Watch Premium prepaid plans with UPI
          </p>
        </div>
        <button className="banner-get-it-button" type="button">
          GET IT NOW
        </button>
      </BannerTextContainer>
      <CloseButton data-testid="close" type="button" onClick={onClickClose}>
        <MdClose />
      </CloseButton>
    </Banner>
  )
}

export default PrimeContent
