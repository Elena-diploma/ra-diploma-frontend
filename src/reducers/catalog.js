import {
  FETCH_CATALOG_REQUEST,
  FETCH_CATALOG_FAILED,
  FETCH_CATALOG_CONTENT_SUCCESS,
  FETCH_CATALOG_CATEGORIES_SUCCESS,
  CATALOG_CATEGORY_CHANGE,
  CATALOG_SEARCH_CHANGE,
  CATALOG_OFFSET_CHANGE,
} from '../actions/actionTypes';

const initialState = {
  content: [],
  categories: [],
  activeCategoryId: 0,
  search: '',
  offset: 0,
  loading: false,
  error: null,
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATALOG_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CATALOG_CATEGORIES_SUCCESS:
      const { categories } = action.payload;
      return { ...state, loading: false, categories };
    case FETCH_CATALOG_CONTENT_SUCCESS:
      const { content } = action.payload;
      return { ...state, loading: false, content };
    case CATALOG_CATEGORY_CHANGE:
      const { activeCategoryId } = action.payload;
      if (activeCategoryId === 0)
        return {
          ...state,
          activeCategoryId,
          offset: initialState.offset,
          search: initialState.search,
        };
      return { ...state, activeCategoryId, offset: initialState.offset };
    case CATALOG_SEARCH_CHANGE:
      const { search } = action.payload;
      return { ...state, search, offset: initialState.offset };
    case CATALOG_OFFSET_CHANGE:
      return { ...state, offset: state.offset + 6 };
    case FETCH_CATALOG_FAILED:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    default:
      return state;
  }
}
