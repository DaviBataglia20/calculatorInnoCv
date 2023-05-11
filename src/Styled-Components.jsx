import styled from 'styled-components'


export const Button = styled.button`
    width: 30%;
    border: 0;
    margin-bottom: 2px;
    font-weight: 100;
    font-size: 15px;
    color: white;
    border-radius:4px;
    background-color: transparent;
    background-color: #5b5757;
    &:hover{
        background-color: #393737;
  }
  &:active{
        transform: scale(0.9);
  }
`
export const SymbolButton = styled.button`
    background-color: #393737;
    &:hover{
        background-color: #5b5757;
  }
  &:active{
        transform: scale(0.9);
  }
    border: 0;
    margin-bottom: 2px;
    width: 30%;
    border-radius:4px;
    font-weight: 100;
    font-size:10px;
    color :  white;
`
export const EqualButton = styled.button`
    background-color: #ffc116;
    border: 0;
    width: 30%;
    border-radius:4px;
    margin-bottom: 2px;
    color: white;
    &:hover{
        background-color: #f0b000;
  }
    &:active{
        transform: scale(0.9);
  }
`
export const Text = styled.p`
    text-align: right;
    height: 30px;
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    color: white;
    padding-right: 40px;
`
export const MainContain = styled.div`
    width: 40%;
    border: solid black 5px;
    margin: 0 auto;
    background-color: #262626;
`
export const ButtonsContain = styled.div`
    display: flex;
    padding: 2px;
    gap: 2px;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
`
