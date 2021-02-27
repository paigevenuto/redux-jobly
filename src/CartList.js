import React from "react";
import { useSelector, useDispatch } from "react-redux";

function CartList() {
  const products = useSelector((store) => store.products);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const removeItem = (productId) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  };

  return (
    <div className="container">
      <h1>CartList</h1>
      <ul className="list-group">
        {Object.keys(cart).map((product) => (
          <li className=" col-6 align-self-center list-group-item">
            <a href={`/products/${product}`}>
              <h5 className="float-left text-dark">
                {products[product].name}: ${products[product].price}
              </h5>
            </a>
            <div className="float-right">
              <span>
                Qty: {cart[product]}
                <span
                  type="button"
                  className="btn btn-outline-danger mx-1 p-1"
                  onClick={() => removeItem(product)}
                >
                  X
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartList;
