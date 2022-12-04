import styled from 'styled-components'

export const VideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  padding-left: 20px;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 575px) {
    padding-left: 0px;
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`

export const SearchVideoInputContainer = styled.div`
  display: flex;
  margin: auto;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`
export const SearchVideoInput = styled.input`
  height: 36px;
  width: 400px;
  border: 1px solid #cccccc;
  outline: none;
  font-size: 14px;
  line-height: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #606060;
  padding: 8px 14px 8px 14px;
`
export const SearchVideoButton = styled.button`
  height: 36px;
  width: 75px;
  font-size: 18px;
  padding: 8px;
  background-color: #f4f4f4;
  border: 1px solid #cccccc;
  color: #606060;
  font-size: 16px;
  font-weight: 400;
`
export const NoResultsAndFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoResultsAndFailureTitle = styled.h1`
  margin-top: 20px;
  font-size: 26px;
  font-weight: 500;
  font-family: 'Roboto';
  text-align: center
  color: #322b3c;
  @media screen and (max-width: 575px) {
      font-size: 22px;
  }
`
export const NoResultsAndFailureDesc = styled.p`
  color: #6c7582;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-top: 10px;
  text-align: center;
`
export const RetryButton = styled.button`
  height: 40px;
  width: 104px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  border: none;
  border-radius: 3px;
  margin-bottom: 20px;
`
