import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../components/common/vars';
import Link from '../../components/link';


const StyledFooterNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column; 
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  margin-left: 50px;
  &:first-child {
    margin-left: 0;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    margin: 10px 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const NavItem = styled.div`
  margin: 5px 0;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const NavLink = styled(Link)`
  color: currentColor;
`;

const FooterNav = ({ navigation }) => {
  return (
    <StyledFooterNav>
      { 
        navigation
        .filter(({ items }) => items.length > 0)
        .map(({ title, items }) => {
          return (
            <Nav key = { title } >
              { title ? <Title>{ title }</Title> : false }
              { 
                items.map(({ link, text, title, anchor }) => {
                  return (
                    <NavItem key = { link }>
                      <NavLink 
                        href = { link } 
                        title = { title } 
                        anchor = { anchor } >
                        { text }
                      </NavLink>
                    </NavItem>
                  );
                })
              }
            </Nav>
          );
        }) 
      }
    </StyledFooterNav>
  );
}

export default FooterNav;