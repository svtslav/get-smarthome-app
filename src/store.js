import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './sagas';

const sagaMidellware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMidellware));

sagaMidellware.run(rootSaga);

export default store;