import {
  FETCH_TOPSALES_SUCCESS,
  FETCH_TOPSALES_FAILED,
  FETCH_TOPSALES_REQUEST,
} from '../actions/actionTypes';

const initialState = {
  topSales: [],
  loading: false,
  error: null,
};

export default function topSalesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOPSALES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TOPSALES_SUCCESS:
      const { topSales } = action.payload;
      return { ...state, loading: false, topSales };
    case FETCH_TOPSALES_FAILED:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    default:
      return state;
  }
}
