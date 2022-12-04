import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import ThemeContextWithSaved from './context/SavedVideosContext'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Header from './components/Header'
import HomeLeftTab from './components/HomeLeftTab'

// Replace your code here
class App extends Component {
  state = {savedVideosList: [], darkTheme: false}

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  saveVideo = videoObject => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoObject],
    }))
  }

  removeVideo = id => {
    const {savedVideosList} = this.state

    const filteredVideosList = savedVideosList.filter(
      eachVideo => eachVideo.id !== id,
    )

    this.setState({savedVideosList: filteredVideosList})
  }

  render() {
    const {darkTheme, savedVideosList} = this.state
    return (
      <ThemeContextWithSaved.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
          savedVideosList,
          saveVideo: this.saveVideo,
          removeVideo: this.removeVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContextWithSaved.Provider>
    )
  }
}
export default App
