import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #0a79df;
  color: white;
  cursor: pointer;

  &:hover {
    color: #0a79df;
    background-color: white;
    border: 1px solid #0a79df;
    transition: 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
`;

const getButtonStyles = props => {
  if (props.googleAuth) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  letter-spacing: 2px;
  justify-content: center;
  align-items: center;
  outline: none;

  ${getButtonStyles}
`;
