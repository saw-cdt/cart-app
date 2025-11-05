export const itemsReducer = (state = [], action) => {
  switch(action.type) {
    case 'AddProductCart':

      return [
        ...state, 
        { 
          product: action.payload, 
          quantity: 1,
        }
      ];

    case 'UpdateProductCart':

      return [
        state.map((i) => {
          if (i.action.payload.id === action.payload.id) {
            i.quantity = i.quantity + 1;
          }
          return i;
        })
      ];

    case 'DeletePrdouctCart':
      return [
          ...state.filter((i) => i.product.id !== action.payload)
      ];

    default:
      return state;
  }
}