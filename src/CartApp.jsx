import { useReducer, useEffect } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./reducer/itemsReducer";
import {
  AddProductCart,
  DeleteProductCart,
  UpdateProductCart,
} from "./reducer/itemsActions";

const initialCartItems = JSON.parse(localStorage.getItem("cart") || "[]");

export const CartApp = () => {
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

  return (
    <>
      <div className="container my-4">
        <h3>Cart App</h3>

        <CatalogView handler={handlerAppProductCart} />

        {cartItems?.length <= 0 || (
          <div className="my-4 w-50">
            <CartView items={cartItems} handlerDelete={handlerDeleteProduct} />
          </div>
        )}
      </div>
    </>
  );
};
