import {
  fetchTopSalesRequest,
  fetchTopSalesSuccess,
  fetchTopSalesFailed,
  fetchCatalogRequest,
  fetchCatalogCategoriesSuccess,
  fetchCatalogFailed,
  fetchCatalogContentSuccess,
  fetchGetProductRequest,
  fetchGetProductSuccess,
  fetchGetProductFailed,
  fetchPostCartRequest,
  fetchPostCartSuccess,
  fetchPostCartFailed,
} from '../actions/actionCreators';

const url = process.env.REACT_APP_API_URL_BUILD;

export const fetchGetTopSales = () => (dispatch) => {
  dispatch(fetchTopSalesRequest());
  return fetch(`${url}/top-sales`)
    .then((response) => {
      // console.log('fetchGetTopSales_response: ', response);
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Произошла ошибка.');
      }
      return response.json();
    })
    .then((result) => {
      // console.log('fetchGetTopSales_result: ', result);
      dispatch(fetchTopSalesSuccess(result));
    })
    .catch((e) => {
      // console.log('fetchGetTopSales_Error: ', e.message);
      dispatch(fetchTopSalesFailed(e.message));
    });
};

export const fetchGetCatalogCategories = () => (dispatch) => {
  dispatch(fetchCatalogRequest());
  return fetch(`${url}/categories`)
    .then((response) => {
      // console.log('fetchCatalogCategories_response: ', response);
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Произошла ошибка.');
      }
      return response.json();
    })
    .then((result) => {
      // console.log('fetchCatalogCategories_result: ', result);
      dispatch(fetchCatalogCategoriesSuccess(result));
    })
    .catch((e) => {
      // console.log('fetchCatalogCategories_Error: ', e.message);
      dispatch(fetchCatalogFailed(e.message));
    });
};

export const fetchGetCatalogContent = (categoryId, q, offset) => (dispatch) => {
  dispatch(fetchCatalogRequest());
  const apiUrl = `${url}/items`;
  const querry = new URLSearchParams({
    categoryId,
    q,
    offset,
  });
  const fetchUrl =
    ((categoryId || q || offset) && `${apiUrl}?${querry}`) || apiUrl;
  // console.log('fetchUrl', fetchUrl);
  return fetch(fetchUrl)
    .then((response) => {
      // console.log('fetchGetCatalogContent_response: ', response);
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Произошла ошибка.');
      }
      return response.json();
    })
    .then((result) => {
      // console.log('fetchGetCatalogContent_result: ', result);
      dispatch(fetchCatalogContentSuccess(result));
    })
    .catch((e) => {
      // console.log('fetchGetCatalogContent_Error: ', e.message);
      dispatch(fetchCatalogFailed(e.message));
    });
};

export const fetchGetProduct = (id) => (dispatch) => {
  dispatch(fetchGetProductRequest());
  const apiUrl = `${url}/items`;
  const fetchUrl = `${apiUrl}/${id}`;
  return fetch(fetchUrl)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Произошла ошибка.');
      }
      return response.json();
    })
    .then((result) => {
      // console.log('fetchGetProduct_result: ', result);
      dispatch(fetchGetProductSuccess(result));
    })
    .catch((e) => {
      // console.log('fetchGetProduct_Error: ', e.message);
      dispatch(fetchGetProductFailed(e.message));
    });
};

export const fetchPostOrder = (setCart, setOwner) => (dispatch, getState) => {
  const {
    cart: { items, owner },
  } = getState();
  // const {phone, address} = owner;
  // console.log('items, info: ', items, owner);
  dispatch(fetchPostCartRequest());
  return fetch(`${url}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ owner, items }),
  })
    .then((result) => {
      // console.log('fetchPostOrder_result:', result);
      // if (!result.ok) {
      //   console.log(
      //     'fetchPostOrder_result.status+text+body:',
      //     result.status,
      //     result.statusText,
      //   );
      // }
      if (result.status < 200 || result.status >= 300) {
        throw new Error(`Произошла ошибка: ${result.statusText}`);
      }
      dispatch(fetchPostCartSuccess(true));
      setCart(null);
      setOwner(null);
    })
    .catch((e) => {
      // console.log('fetchPostOrder_Error_text: ', e.message);
      dispatch(fetchPostCartFailed(e.message));
    });
};
