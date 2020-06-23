import { put, call, takeLatest, all, select } from 'redux-saga/effects';
import { sendOrderForm } from './services';
import { 
  orderFormRequest, 
  orderFormSuccess, 
  orderFormError
} from './actions';

export const getOrder = (state) => state.order;

export function* orderFormSubmit() {
  // Инициализируем отправку формы
  yield put(orderFormRequest());
  try {
    // Берем информацию о заказе из стейта
    let order = yield select(getOrder);
    // Отправляем информацию о заказе в форму
    yield call(sendOrderForm, order);
    // Сообщаем что все ок
    yield put(orderFormSuccess());
  } 
  catch (error) {
    // Сообщаем что все не ок
    yield put(orderFormError(error));
  }
};

export function* watchOrderFormSubmit() {
  yield takeLatest('ORDER_FORM_SUBMIT', orderFormSubmit);
};

export default function* rootSaga() {
  yield all([
    watchOrderFormSubmit()
  ]);
};
