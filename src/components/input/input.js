import styled, { css } from 'styled-components';
import { breakpoints, font, transition } from '../../components/common/vars';

const styles = css`
  font-family: ${font.family.MontserratAlternates};
  font-size: 1em;
  line-height: 1.5;
  padding: 10px 15px;
  box-sizing: border-box;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 3px;
  outline: none;
  transition: ${transition};
  -webkit-appearance: none;
  &:focus {
    outline: none;
    border-color: #1700e8;
  }
  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const Input = styled.input`
  ${styles}
`;

const TextArea = styled.textarea`
  ${styles}
`;

export { Input, TextArea };