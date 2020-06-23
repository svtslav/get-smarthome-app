import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { orderFormSubmit, orderFormSave } from '../../actions';
import { breakpoints, color, font } from '../../components/common/vars';
import { Input, TextArea } from '../../components/input';
import Button from '../../components/button';
import Link from '../../components/link';

const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const StyledInput = styled(Input)`
  width: 32%;
  margin: 0 0 20px 0;
  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const StyledTextArea = styled(TextArea)`
  width: 100%;
  margin: 0 0 20px 0;
`;

const StyledButton = styled(Button)`
  margin: 20px 0 0 0;
  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const Message = styled.div`
  color: ${color.gray};
  line-height: 1.5;
`;

const Price = styled.div`
  width: 32%;
  margin: 0 0 20px 0;
  font-size: ${font.size.s};
  line-height: 1.5;
  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const Total = styled.div`
  font-weight: 600;
  font-size: ${font.size.m};
`;

const Info = styled.div`
  width: 66%;
  margin: 0 0 20px 0;
  color: ${color.gray};
  line-height: 1.5;
  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const SuccessMessage = styled.div`
  font-size: ${font.size.s};
  line-height: 1.5;
  text-align: center;
`;

const ErrorMessage = styled.div`
  margin: 0 0 20px 0;
  line-height: 1.5;
  color: ${color.error};
`;

const OrderForm = ({ handleOrderChange, handleSubmit, orderComplited, orderError, order }) => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ comment, setComment ] = useState('');

  useEffect(() => {
    const orderFields = {
      name,
      email,
      phone,
      comment,
      price: order.price,
      variant: order.variant,
    };
    handleOrderChange(orderFields);
  }, [handleOrderChange, name, email, phone, comment, order.price, order.variant]);

  if (orderComplited && orderError === null) {
    return (
      <React.Fragment>
        { order.price && <OrderPrice price = { order.price } /> }
        <SuccessMessage>
          { `ваша заявка на бесплатную консультацию отправлена` }
        </SuccessMessage>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      { order.price && <OrderPrice price = { order.price } /> }

      { orderComplited && orderError !== null && <ErrorMessage>{ orderError.message }</ErrorMessage> }

      <form onSubmit = { handleSubmit({ name, email, phone, comment }) }>
        <Group>
          <StyledInput 
            type="text" 
            name="name" 
            value={name} 
            onChange={(event) => setName(event.target.value)}
            placeholder="имя" />
          <StyledInput 
            type="text"
            name="phone" 
            onChange={(event) => setPhone(event.target.value)}
            value={phone} 
            placeholder="телефон" />
          <StyledInput 
            type="text" 
            name="email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)}
            placeholder="e-mail" />
        </Group>
        <Group>
          <StyledTextArea 
            name="comment" 
            placeholder="комментарий (не обязательно)" 
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            rows="4" />
        </Group>
        <Message>
          нажимая кнопку «отправить заявку» вы соглашаетесь на <Link href="#" target="_blank">обработку персональных данных</Link>
        </Message>
        <StyledButton 
          type="submit" >
          отправить заявку
        </StyledButton>
      </form>
    </React.Fragment>
  )
}

const OrderPrice = ({ price }) => {
  return (
    <Group>
      <Price>
        стоимость
        <Total>от { price.toLocaleString() } руб.</Total>
      </Price>
      <Info>указана предварительная стоимость работ. после обсуждения вашего проекта с нашими техническими специалистами мы рассчитаем точную стоимость работ.</Info>
    </Group>
  );
}

const mapStateToProps = ({ orderComplited, orderError, order }) => {
  return {
    orderComplited,
    orderError,
    order
  }
};

const mapDisptchToProps = (dispatch, ownProps) => { 
  return {
    handleSubmit: () => (event) => {
      event.preventDefault();
      // Отправляем форму в Google Forms
      dispatch(orderFormSubmit());
    },
    handleOrderChange: (order) => {
      // Сохраняем данные формы в Redux
      dispatch(orderFormSave(order));
    }
  }
};

export default connect(mapStateToProps, mapDisptchToProps)(OrderForm);