import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(90deg, #49b6ff, #d264b6);
  border-radius: 10px;
  border: 2px solid #0085a3;
  font-family:'comic-sans';
  padding: 80px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1.5rem;
  }
  b > p{
    text-shadow: 2px 1px 4px #000000;
    color:white;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.9;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.1rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, #424b54, #21295c)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;