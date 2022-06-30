import {
  FETCH_TOPSALES_FAILED,
  FETCH_TOPSALES_REQUEST,
  FETCH_TOPSALES_SUCCESS,
  FETCH_CATALOG_REQUEST,
  FETCH_CATALOG_FAILED,
  FETCH_CATALOG_CONTENT_SUCCESS,
  FETCH_CATALOG_CATEGORIES_SUCCESS,
  CATALOG_CATEGORY_CHANGE,
  CATALOG_SEARCH_CHANGE,
  CATALOG_OFFSET_CHANGE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED,
  SET_CART_ITEMS,
  SET_CART_OWNER,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILED,
} from './actionTypes';

export function fetchTopSalesRequest() {
  return { type: FETCH_TOPSALES_REQUEST };
}

export function fetchTopSalesSuccess(topSales) {
  return { type: FETCH_TOPSALES_SUCCESS, payload: { topSales } };
}

export function fetchTopSalesFailed(error) {
  return { type: FETCH_TOPSALES_FAILED, payload: { error } };
}

export function fetchCatalogRequest() {
  return { type: FETCH_CATALOG_REQUEST };
}

export function fetchCatalogCategoriesSuccess(categories) {
  return { type: FETCH_CATALOG_CATEGORIES_SUCCESS, payload: { categories } };
}

export function fetchCatalogContentSuccess(content) {
  return { type: FETCH_CATALOG_CONTENT_SUCCESS, payload: { content } };
}

export function fetchCatalogFailed(error) {
  return { type: FETCH_CATALOG_FAILED, payload: { error } };
}

export function catalogCategoryChange(activeCategoryId) {
  return { type: CATALOG_CATEGORY_CHANGE, payload: { activeCategoryId } };
}

export function catalogSearchChange(search) {
  return { type: CATALOG_SEARCH_CHANGE, payload: { search } };
}

export function catalogOffsetChange() {
  return { type: CATALOG_OFFSET_CHANGE };
}

export function fetchGetProductRequest() {
  return { type: FETCH_PRODUCT_REQUEST };
}

export function fetchGetProductSuccess(product) {
  return { type: FETCH_PRODUCT_SUCCESS, payload: { product } };
}

export function fetchGetProductFailed(error) {
  return { type: FETCH_PRODUCT_FAILED, payload: { error } };
}

export function setCartItems(items) {
  return { type: SET_CART_ITEMS, payload: { items } };
}

export function setCartOwner(owner) {
  return { type: SET_CART_OWNER, payload: { owner } };
}

export function fetchPostCartRequest() {
  return { type: FETCH_CART_REQUEST };
}

export function fetchPostCartSuccess(success) {
  return { type: FETCH_CART_SUCCESS, payload: { success } };
}

export function fetchPostCartFailed(error) {
  return { type: FETCH_CART_FAILED, payload: { error } };
}