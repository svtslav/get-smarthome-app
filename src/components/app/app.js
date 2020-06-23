import React, { useRef } from 'react';


import Intro from '../../components/intro';
import FeaturesSection from '../../sections/features-section';
import ProductSection from '../../sections/product-section';
import VariantSection from '../../sections/variants-section';
import StepsSection from '../../sections/steps-section';
import OrderSection from '../../sections/order-section';
import Footer from '../../components/footer';



const App = () => {

  const refVariants = useRef(null);
  const refOrder = useRef(null);

  return (
    <React.Fragment>
      <Intro title = { `Умный дом, <br/> доступный каждому` } />
      <FeaturesSection actionTo = { refVariants } />
      <ProductSection actionTo = { refOrder } />
      <VariantSection actionTo = { refOrder } ref = { refVariants } />
      <OrderSection ref = { refOrder } />
      <StepsSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;