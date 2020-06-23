const reducer = (state, action) => {
  
  if (state === undefined) {
    return {
      orderComplited: false,
      orderSuccess: true,
      orderError: null,
      order: {
        name: '',
        email: '',
        phone: '',
        comment: '',
        variant: null,
        price: null,
      }
    };
  }

  switch(action.type) {
    case 'ORDER_FORM_SAVE':
      return {
        ...state,
        order: {
          ...state.order,
          ...action.payload
        }
      };
    case 'ORDER_FORM_SUBBMIT':
      return {
        ...state
      };
    case 'ORDER_FORM_REQUEST':
      return {
        ...state,
        order: {
          ...state.order,
          ...action.payload
        },
        orderComplited: false,
        orderSuccess: false,
        orderError: null
      };
    case 'ORDER_FORM_SUCCESS':
      return {
        ...state,
        order: {
          ...state.order,
          ...action.payload
        },
        orderComplited: true,
        orderSuccess: true,
        orderError: null
      };
    case 'ORDER_FORM_ERROR':
      return {
        ...state,
        order: {
          ...state.order,
          ...action.payload
        },
        orderComplited: true,
        orderSuccess: false,
        orderError: action.payload
      };
      case 'CHOSE_VARIANT':
        return {
          ...state,
          order: {
            ...state.order,
            variant: action.payload.variant,
            price: action.payload.price
          }
        };
    default:
      return state;
  }
}

export default reducer;