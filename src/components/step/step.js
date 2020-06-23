import React from 'react';
import styled from 'styled-components';
import { breakpoints, font } from '../../components/common/vars';

const StepWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  line-height: 1.5;

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin: 10px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Number = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  font-weight: ${font.weight.semibold};
  font-size: 60px;
  line-height: 1;
  text-align: center;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: ${font.size.s};
  font-weight: ${font.weight.semibold};
  text-align: center;
  margin-bottom: 10px;
`;

const Description = styled.div`
  text-align: center;
`;

const Step = (props) => {
  return (
    <StyledStep { ...props }>
      <Number>{ props.number }</Number>
      <Title>{ props.title }</Title>
      <Description>{ props.description }</Description>
    </StyledStep>
  );
} 

export default Step;
export { StepWrapper }