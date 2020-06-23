import React from 'react';
import styled from 'styled-components';
import { font, breakpoints } from '../../components/common/vars';
import Container from '../../components/container';

const StyledSection = styled.section`
  padding: 12px 0;
  background-color: ${ props => props.theme.backgroundColor || '#fff' };
`;

const Title = styled.h2`
  margin: 0 0 10px 0;
  font-weight: ${font.weight.bold};
  font-size: ${font.size.xl};;
  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${font.size.l};
  }
`;

const SubTitle = styled.h3`
  margin: 0 0 10px 0;
  line-height: 1.8;
  font-weight: ${font.weight.semibold};;
  font-size: ${font.size.m};
  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${font.size.s};;
  }
`;

const Header = styled.div`
  margin: 25px 0;
  text-align: center;
`;

const Footer = styled.div`
  margin: 25px 0;
  text-align: center;
`;

const Content = styled.div`
  margin: 50px 0;
`;

const Section = React.forwardRef((props, ref) => { 
  const { title, subtitle, description, theme, children } = props; 
  return (
    <StyledSection ref = { ref } theme = { theme }>
      <Container>
        <Header>
          <Title dangerouslySetInnerHTML={{__html: title}}></Title>
          <SubTitle dangerouslySetInnerHTML={{__html: subtitle}}></SubTitle>
        </Header>
        <Content>
          { children }
        </Content>
        <Footer>
          <SubTitle>{ description }</SubTitle>
        </Footer>
      </Container>
    </StyledSection>
  );
});

export default Section;