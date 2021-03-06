import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import topSalesReducer from '../reducers/topSales';
import catalogReducer from '../reducers/catalog';
import productReducer from '../reducers/product';
import cartReducer from '../reducers/cart';
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
