import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import topSalesReducer from '../reducers/serviceList';
import catalogReducer from '../reducers/serviceEdit';
import productReducer from '../reducers/serviceFilter';
import cartReducer from '../reducers/serviceAdd';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  topSales: topSalesReducer,
  catalog: catalogReducer,
  product: productReducer,
  cart: cartReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
