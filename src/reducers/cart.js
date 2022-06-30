import {
  SET_CART_ITEMS,
  SET_CART_OWNER,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILED,
  FETCH_CART_REQUEST,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  counter: 0,
  owner: { phone: '', address: '' },
  loading: false,
  error: null,
  success: false,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART_ITEMS:
      const { items } = action.payload;
      // console.log('cartContentReducer_items: ', items);
      return { ...state, items, counter: items?.length };
    case SET_CART_OWNER:
      const { owner } = action.payload;
      // console.log('cartContentReducer_owner: ', owner);
      return owner
        ? { ...state, owner }
        : { ...state, owner: initialState.owner };
    case FETCH_CART_REQUEST:
      return { ...state, loading: true, error: false, success: false };
    case FETCH_CART_FAILED:
      const { error } = action.payload;
      return { ...state, loading: false, error, success: false };
    case FETCH_CART_SUCCESS:
      const { success } = action.payload;
      return { ...initialState, success };
    default:
      return state;
  }
}
