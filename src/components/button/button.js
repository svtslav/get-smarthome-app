import styled, { css } from 'styled-components';
import { font, transition } from '../../components/common/vars';

const Button = styled.button`
  box-sizing: border-box;
  transition: ${transition};
  border: none;
  border-radius: 6px;
  color: #fff;
  background-color: #1700e8;
  font-family: ${font.family.MontserratAlternates};
  font-weight: ${font.weight.bold};
  font-size: ${font.size.m};
  padding: 15px 25px;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;

  ${props => size[props.size]};
  ${props => color[props.color]};


  &:hover {
    background-color: #1b0da2;
  }
  &:active {
    background-color: #160e5f;
  }
`;


const size = {
  small: css`
    font-size: ${font.size.s};
  `,
  medium: css`
    font-size: ${font.size.m};
    padding: 15px 25px;
  `,
  large: css`
    font-size: ${font.size.l};
  `
};

const color = {
  gradient: css`
    background-image: linear-gradient(to right, #4776E6 0%, #6839cf 51%, #4776E6 100%);
  `,
};

export default Button;