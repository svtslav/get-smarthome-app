import React from 'react';
import styled from 'styled-components';
import Feature from '../feature/feature';

const StyledFeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FeatureList = ({ features }) => {
  return (
    <StyledFeatureList>
    {
      features.map(
        (feature) => {
          const theme = {
            size: feature.size,
            backgroundImage: feature.image,
            css: feature.css
          };
          return (
            <Feature 
              key = { feature.id }
              title = { feature.title } 
              description = { feature.description } 
              slider = { feature.slider }
              theme = { theme } />
          )
        }
      )
    }
    </StyledFeatureList>
  )
};

export default FeatureList;