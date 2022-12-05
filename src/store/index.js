import { createStore, combineReducers } from 'redux';

import widgetReducer from '../reducers/widgetReducer';

const reducer = combineReducers({
  widget: widgetReducer,
})

const store = createStore(reducer);
export default store;