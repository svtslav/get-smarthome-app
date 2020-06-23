import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import Section from '../components/section';
import Variant, { VariantWrapper } from '../components/variant';
import ScrollTo from '../components/scroll-to';
import { color } from '../components/common/vars';
import { variants } from '../data/data';

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

const VariantsSection = React.forwardRef((props, ref) => {
  return (
    <Section
      ref = { ref }
      title = "выберите свой умный дом"
      subtitle = "мы разработали несколько вариантов умных домов <br/> для разных целей и бюджета"
      description = { 
        <React.Fragment>
          готовы <ActionButton to = { props.actionTo }>обсудить</ActionButton> ваш индивидуальный проект
        </React.Fragment>
       } >
      <VariantWrapper>
        { 
          variants.map(variant => <Variant key = { variant.id } { ...variant } />)
        }
      </VariantWrapper>
    </Section>
  );
});

export default VariantsSection;