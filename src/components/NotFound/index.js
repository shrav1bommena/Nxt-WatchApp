import Header from '../Header'
import HomeLeftTab from '../HomeLeftTab'

const NotFound = () => (
  <div>
    <Header />
    <HomeLeftTab />
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="not found"
      />
      <h1>Page Not Found</h1>
      <p>We are sorry, the page you requested could not be found.</p>
    </div>
  </div>
)

export default NotFound
