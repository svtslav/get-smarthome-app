import React from 'react';
import styled from 'styled-components';
import { font } from '../../components/common/vars';
import Container from '../../components/container';
import backgroundImage from './assets/background_1.jpg';

const StyledIntro = styled.header`
  height: 500px;
  background-image: url('${backgroundImage}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: ${font.size.xl};
  font-weight: 800;
  line-height: 1.5;
  margin: 0;
  padding: 20px 0 0 0;
`;

const Intro = ({ title }) => {
  return (
    <StyledIntro>
      <Container>
        <Title dangerouslySetInnerHTML = { { __html: title } }></Title>
      </Container>
    </StyledIntro>
  )
}

export default Intro;