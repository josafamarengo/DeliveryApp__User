export function basket(state = initialState, action) {
  switch (action.type) {
    case '@basket/ADD_SUCCESS': {
      const productIndex = state.findIndex(p => p.id === action.product.id);

      if (productIndex >= 0) {
        state[productIndex].amount += 1;
      } else {
        state.push({
          ...action.product,
          amount: 1,
        });
      }

      return [...state];
    }
    default:
      return state;
  }
}