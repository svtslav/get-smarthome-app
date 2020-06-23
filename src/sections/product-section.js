import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import Section from '../components/section';
import FeatureList from '../components/feature-list';
import ScrollTo from '../components/scroll-to';
import Link from '../components/link';
import { color } from '../components/common/vars';
import { productFeatures } from '../data/data';

const ActionButton = styled(ScrollTo)`
  cursor: pointer;
  color: ${color.textBase};
  border-bottom-style: dashed;
  border-bottom-color: ${transparentize(0.7, color.textBase)};
  border-bottom-width: 2px;
  line-height: 1.5;
  &:hover {
    border-bottom-color: ${color.textBase};
  }
`;

const LinkAlice = styled(Link)`
  background: linear-gradient(to right, #6839cf 0%, #6e25ff 51%, #4776E6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${ color.alice };
  border-bottom-width: 2px;
  &:hover, &:visited:hover {
    color: ${ color.alice };
    border-bottom-color: ${transparentize(0.7, color.alice)};
  }
`;

const LinkHomekit = styled(Link)`
  color: ${ color.homekit };
  background: linear-gradient(to left, #777dff 0%, #f154ff 51%, #f0357c 100%), linear-gradient(to right, #777dff 0%, #497ce2 51%, #37bdde 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom-width: 2px;
  &:hover, &:visited:hover {
    color: ${ color.homekit };
    border-bottom-color: ${transparentize(0.7, color.homekit)};
  }
`;

const ProductSection = (props) => {
  return (
    <Section 
      title = "продукт, продуманный до&nbsp;мелочей"  
      description = { 
        <React.Fragment>
          ещё наш умный дом работает с <LinkAlice href="https://yandex.ru/alice/" title="алиса" target="_blank" alice>алисой</LinkAlice> и <LinkHomekit href="https://www.apple.com/ru/ios/home/" title="apple homekit" target="_blank" homekit>apple&nbsp;homekit</LinkHomekit>, 
          <br/>
          а мы готовы <ActionButton to = { props.actionTo }>рассказать</ActionButton> больше об умном доме
        </React.Fragment>
      } >
      <FeatureList features = { productFeatures } />
    </Section>
  )
}

export default ProductSection;