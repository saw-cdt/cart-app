import { useReducer, useEffect } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import {
  AddProductCart,
  DeleteProductCart,
  UpdateProductCart,
} from "../reducer/itemsActions";

const initialCartItems = JSON.parse(localStorage.getItem("cart") || "[]");

export const useItemsCart = () => {
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAppProductCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      dispatch({
        type: UpdateProductCart,
        payload: product,
      });
    } else {
      dispatch({
        type: AddProductCart,
        payload: product,
      });
    }
  };

  const handlerDeleteProduct = (id) => {
    dispatch({
      type: DeleteProductCart,
      payload: id,
    });
  };

  return {
    cartItems,
    handlerAppProductCart,
    handlerDeleteProduct,
  };
};
