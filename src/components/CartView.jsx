import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";

export const CartView = ({ handlerDelete, items }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const onDeleteProduct = (id) => {
    handlerDelete(id);
  };

  const onCatalog = () => {
    navigate("/catalog");
  };

  return (
    <>
      <h3>Shopping Cart</h3>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{`$${item.product.price}`}</td>
              <td>{item.quantity}</td>
              <td>{`$${(item.quantity * item.product.price).toFixed(2)}`}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteProduct(item.product.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              Total
            </td>
            <td colSpan="2" className="text-start fw-bold">
              ${total.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
      <button className="btn btn-success" onClick={onCatalog}>
        Return to catalog!
      </button>
    </>
  );
};
