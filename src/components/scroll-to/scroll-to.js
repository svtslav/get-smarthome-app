import React from 'react';
import styled from 'styled-components';
import { transition } from '../../components/common/vars';

const handleScrollTo = (to, block, behavior) => (event) => {
  event.preventDefault();
  to.current.scrollIntoView({
    block: block,
    behavior: behavior
  });
};

const StyledScrollTo = styled.button`
  --webkit-appearance: none;
  height: auto;
  width: auto;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: currentColor;
  text-shadow: none;
  font: inherit;
  line-height: inherit;
  transition: ${transition};

  &:focus {
    outline: none;
  }
`;

const ScrollTo = ( { className, to, children } ) => {
  return (
    <StyledScrollTo 
      className = { className } 
      onClick = { handleScrollTo(to, 'start', 'smooth') } >
      { children }
    </StyledScrollTo>
  );
};

export default ScrollTo;