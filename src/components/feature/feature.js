import React from 'react';
import styled from 'styled-components';
import { breakpoints, font } from '../../components/common/vars';

const StyledFeature = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: ${ props => props.theme.size === 'l' ? '45%' : '26%' };
  min-height: 300px;
  margin: 10px 0;
  padding: 130px 30px 30px 30px;
  background-color: #f4f4f4;
  background-image: url('${ props => props.theme.backgroundImage }');
  background-repeat: no-repeat;
  background-size: auto 70px;
  background-position: 40px 40px;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1.5;
  ${props => props.theme.css ? props.theme.css : '' }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop}) {
    width: 49%;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    min-width: auto;
    min-height: 260px;
  }
`;

const Title = styled.div`
  font-size: ${font.size.s};
  font-weight: ${font.weight.semibold};
  margin-bottom: 10px;
`;

const Description = styled.div``;

const Slide = styled.div`
  margin-top: 30px;
`;

const Feature = (props) => {
  return (
    <StyledFeature { ...props }>
      <Title>{ props.title }</Title>
      <Description>{ props.description }</Description>
      {
        props.slider && props.slider.map(slide => (
          <Slide key = { slide.id }>
            <Title>{ slide.title }</Title>
            <Description>{ slide.description }</Description>
          </Slide>
        ))
      }
    </StyledFeature>
  );
}

export default Feature;