import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#201F1C' : '#ffffff')};
  color: ${props => props.darkTheme && '#ffffff'};
`

export const Form = styled.form`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#ffffff')};
`

export const LoginButton = styled.button`
  color: #ffffff;
`
export const InputLabel = styled.label`
  color: ${props => (props.darkTheme ? '#ffffff' : '#7e858e')};
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
`
export const InputField = styled.input`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#ffffff')};
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  border-color: ${props => (props.darkTheme ? '#475569' : '#d7dfe9')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#64748b')};
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
