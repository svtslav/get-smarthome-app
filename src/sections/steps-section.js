import React from 'react';
import Section from '../components/section';
import Step, { StepWrapper } from '../components/step';
import { steps } from '../data/data';

const StepsSection = (props) => {
  return (
    <Section
      title = "как устроен процесс" >
      <StepWrapper>
        { 
          steps.map(variant => <Step key = { variant.number } { ...variant } />)
        }
      </StepWrapper>
    </Section>
  );
};

export default StepsSection;