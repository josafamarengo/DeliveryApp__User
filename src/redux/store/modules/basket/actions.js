export function addToBasketRequest(id) {
  return {
    type: '@basket/ADD_REQUEST',
    id,
  };
}

export function addToBasketSuccess(product) {
  return {
    type: '@basket/ADD_SUCCESS',
    product,
  };
}
