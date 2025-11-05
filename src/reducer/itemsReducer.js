export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "AddProductCart":
      return [
        ...state,
        {
          product: action.payload,
          quantity: 1,
        },
      ];

    case "UpdateProductCart":
      return state.map((i) => {
        if (i.product.id === action.payload.id) {
          i.quantity = i.quantity + 1;
        }
        return i;
      });

    case "DeleteProductCart":
      let updatedCartItems = [
        ...state.filter((i) => i.product.id !== action.payload),
      ];
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      return updatedCartItems;

    default:
      return state;
  }
};
