import styled from 'styled-components';
import { transparentize } from 'polished';
import { color, transition } from '../../components/common/vars';

const Link = styled.a`
  color: ${ color.link };
  text-decoration: none;
  border-bottom-width: 1px;
  border-bottom-style: ${ props => props.anchor ? 'dashed' : 'solid' };
  border-bottom-color: transparent;
  transition: ${transition};

  &:visited {
    color: ${color.linkVisited};
    border-bottom-color: ${transparentize(0.7, color.linkVisited)};
    &:hover {
      color: ${color.linkHover};
      border-bottom-color: ${transparentize(0.7, color.linkHover)};
    }
  }

  &:hover {
    color: ${color.linkHover};
    border-bottom-color: ${transparentize(0.7, color.linkHover)};
  }
`;

export default Link;