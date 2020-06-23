export const orderFormSubmit = (orderFormFileds) => {
  return {
    type: 'ORDER_FORM_SUBMIT',
    payload: orderFormFileds
  }
};

export const orderFormSave = (orderFormFileds) => {
  return {
    type: 'ORDER_FORM_SAVE',
    payload: orderFormFileds
  }
};

export const orderFormRequest = () => {
  return {
    type: 'ORDER_FORM_REQUEST',
  }
};

export const orderFormSuccess = () => {
  return {
    type: 'ORDER_FORM_SUCCESS'
  }
};

export const orderFormError = (error) => {
  return {
    type: 'ORDER_FORM_ERROR',
    payload: error
  }
};

export const choseVariant = (variant) => {
  return {
    type: 'CHOSE_VARIANT',
    payload: variant
  }
};
