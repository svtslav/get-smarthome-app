import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { font, breakpoints } from '../../components/common/vars';
import { choseVariant } from '../../actions';

const VariantWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledVariant = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 49%;
  min-height: 220px;
  margin: 10px 0;
  padding: 20px;
  background-color: ${ props => props.selected ? '#fafafa' : '#ffffff' };
  background-repeat: no-repeat;
  background-size: auto 80px;
  background-position: calc(100% - 20px) calc(100% - 20px);
  background-image: url(${ props => props.icon });
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    background-color: #fafafa;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    min-width: auto;
  }
`;

const Title = styled.div`
  font-size: ${font.size.s};
  font-weight: ${font.weight.semibold};
  margin-bottom: 10px;
  line-height: 1.5;
`;

const Description = styled.div`
  line-height: 1.5;
`;

const Content = styled.div`

`;

const Price = styled.div`
  margin-top: 10px;
  font-size: ${font.size.s};
  font-weight: ${font.weight.semibold};
`;

const Variant = (props) => {
  const {
    id,
    title,
    description,
    price,
    icon,
    selected,
    handleVariantClick
  } = props;
  return(
    <StyledVariant id = { id } icon = { icon } selected = { selected } onClick = { handleVariantClick(id, price) }>
      <Content>
        <Title>{ title } { selected && <span role="img" aria-label="выбрано" title="выбранный вариант">✅</span> }</Title>
        <Description>{ description }</Description>
      </Content>
      <Price>{ price } руб.</Price>
    </StyledVariant>
  );
};

const mapStateToProps = ( state, ownProps) => {
  return {
    selected: ownProps.id === state.order.variant
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVariantClick: (variant, price) => (event) => {
      event.preventDefault();
      dispatch(choseVariant({
        variant: variant,
        price: price
      }));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Variant);
export { VariantWrapper };