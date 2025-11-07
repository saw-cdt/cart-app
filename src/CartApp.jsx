import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";

export const CartApp = () => {
  const { cartItems, handlerAppProductCart, handlerDeleteProduct } =
    useItemsCart();

  return (
    <>
      <div className="container my-4">
        <h3>Cart App</h3>
        <Navbar />
        <Routes>
          <Route
            path="catalog"
            element={<CatalogView handler={handlerAppProductCart} />}
          />
          <Route
            path="cart"
            element={
              cartItems?.length <= 0 ? (
                <div className="alert alert-warning">
                  The Shopping cart is empty!
                </div>
              ) : (
                <div className="my-4 w-50">
                  <CartView
                    items={cartItems}
                    handlerDelete={handlerDeleteProduct}
                  />
                </div>
              )
            }
          />
          <Route path="/" element={<Navigate to={"/catalog"} />} />
        </Routes>
      </div>
    </>
  );
};
