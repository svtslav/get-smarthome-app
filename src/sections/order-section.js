import React from 'react';
import { color } from '../components/common/vars';
import Section from '../components/section';
import OrderForm from '../components/order-form';

const OrderSection = React.forwardRef((props, ref) => {
  return (
    <Section
      ref = { ref }
      title = "заявка на бесплатную консультацию" 
      theme = { { backgroundColor: color.garyBackground } }>
      <OrderForm />
    </Section>
  );
});

export default OrderSection;