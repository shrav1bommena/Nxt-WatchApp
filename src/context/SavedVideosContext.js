import React from 'react'

const ThemeContextWithSaved = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
  savedVideosList: [],
  saveVideo: () => {},
  removeVideo: () => {},
})
export default ThemeContextWithSaved
