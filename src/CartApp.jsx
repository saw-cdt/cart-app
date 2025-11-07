import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
  const { cartItems, handlerAddProductCart, handlerDeleteProduct } =
    useItemsCart();

  return (
    <>
      <div className="container my-4">
        <h3>Cart App</h3>
        <Navbar />
        <CartRoutes
          cartItems={cartItems}
          handlerAddProductCart={handlerAddProductCart}
          handlerDeleteProduct={handlerDeleteProduct}
        />
      </div>
    </>
  );
};
