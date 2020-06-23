import React from 'react';
import styled from 'styled-components';
import { color } from '../../components/common/vars';
import Container from '../../components/container';
import FooterNav from '../../components/footer-nav';
import Link from '../../components/link';
import { navigation } from '../../data/data';

const StyledFooter = styled.footer`
  background-color: ${color.garyBackground};
  padding: 50px 0;
`;

const Copyright = styled.div`
  margin-top: 40px;
`;

const SiteLink = styled(Link)`
  color: currentColor;
  
  &:visited {
    color: currentColor;
    border-bottom-color: currentColor;
  }
`;

const Footer = (props) => {
  return (
    <StyledFooter>
      <Container>
        <FooterNav navigation = { navigation } />
        <Copyright>
          <SiteLink 
            href = "/"
            title = "умный дом" >
            умный дом
          </SiteLink> &copy; 2020
        </Copyright>
      </Container>
    </StyledFooter>
  )
}

export default Footer;