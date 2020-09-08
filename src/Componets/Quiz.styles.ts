import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(90deg, #333533 30%, #081c15 90%);
        margin: 0;

    }
    * {
        box-sizing: border-box;
        font-family: 'Century Gothic', sans-serif;
    }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:50px;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
    margin-bottom:20px;
  }
  h1 {
    font-family: 'century gothic';
    background: linear-gradient(180deg, #ffca3a, #fee440);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #000000);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .titleimage{
    width:500px;
    height:auto;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #a3f7b5, #2f9c95);
    border: 2px solid #09bc8a;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-weight:bold;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    transition: 0.3s ease;
  :hover {
    background: linear-gradient(180deg, #f2c57c, #e3f09b);
    border: 2px solid #f2bb05;

    
  }
  }
  .start {
    max-width: 200px;
  }
`;