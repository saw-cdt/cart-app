import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = [];
export const CartApp = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handlerAppProductCart = (product) => {
    setCartItems([
      ...cartItems,
      {
        product,
        quantity: 1,
        total: product.price * 1,
      },
    ]);
  };

  return (
    <>
      <div className="container">
        <h3>Cart App</h3>

        <CatalogView handler={handlerAppProductCart} />

        <div className="my-4 w-50">
          <CartView items={cartItems} />
        </div>
      </div>
    </>
  );
};
