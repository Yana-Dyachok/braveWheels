import styled from "styled-components";

export const SelectionWrapper = styled.div`
  background: ${({ theme }) => theme.gradient};
  padding: 40px;
  & h1 {
    font-size: 60px;
    color: ${({ theme }) => theme.palette.white};
    text-align: center;
  }
`

export const SelectionBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`

export const SelectionForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h3 {
    color: ${({ theme }) => theme.palette.white};
  }
`

export const BikeTypesBox = styled.div`
  display: flex;
  gap: 20px;
`

export const BikeTypeItems = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  & li {
    display: flex;
    align-items: end;
    gap: 10px;
  }
  & button {
    width: 160px;
  }
`

export const WheelTypesBox = styled.div`
  display: flex;
  gap: 20px;
`

export const WheelTypeItems = styled.ul`
  display: flex;
  gap: 20px;
  & li {
    display: flex;
    align-items: end;
    gap: 10px;
  }
`

export const UserHeightBox = styled.div`
  & p {
    color: ${({theme}) => theme.palette.white};
  }
  & div:first-child {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    & input {
      width: 110px;
      padding: 15px;
      font-size: 18px;
      color: ${({theme}) => theme.palette.brown};
    }
    & div:last-child {
      display: flex;
      align-items: end;
      gap: 10px;
    }
  }
`