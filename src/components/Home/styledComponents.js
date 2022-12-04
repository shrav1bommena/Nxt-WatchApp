import styled from 'styled-components'

const VideosContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  flex-grow: 1;
  overflow-y: auto;
}
`
export default VideosContainer
