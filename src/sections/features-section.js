import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import FeatureList from '../components/feature-list';
import ScrollTo from '../components/scroll-to';
import { font, transition } from '../components/common/vars';
import { features } from '../data/data';

const ActionButton = styled(ScrollTo)`
  box-sizing: border-box;
  cursor: pointer;
  transition: ${transition};
  border: none;
  border-radius: 6px;
  color: #fff;
  background-color: #1700e8;
  font-family: ${font.family.MontserratAlternates};
  font-weight: ${font.weight.bold};
  font-size: ${font.size.s};
  padding: 10px 40px;
  margin-top: 74px;
`;

const FeaturesSection = (props) => {
  return (
    <Section 
      title = "сделайте ваш дом умным" 
      subtitle = "без ремонта и пыли"
      description = {
        <React.Fragment>
          свет, системы безопасности – всё под контроллем
          <br/>
          <ActionButton to = { props.actionTo }>выбрать умный дом</ActionButton>
        </React.Fragment>
      }
      theme = { { backgroundColor: '' } }>
      <FeatureList features = { features } />   
    </Section>
  )
}

export default FeaturesSection;