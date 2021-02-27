import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ProductsList() {
  const products = useSelector((store) => store.products);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const addItem = (productId) => {
    dispatch({ type: "ADD_ITEM", productId });
  };

  const removeItem = (productId) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <ul className="list-group">
        {Object.keys(products).map((product) => (
          <li className=" col-6 align-self-center list-group-item">
            <a href={`/products/${product}`}>
              <h5 className="float-left text-dark">
                {products[product].name}: ${products[product].price}
              </h5>
            </a>
            <div className="float-right">
              {cart[product] > 0 ? (
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
              ) : (
                ""
              )}
              <div
                type="button"
                className="btn btn-primary mx-1"
                onClick={() => addItem(product)}
              >
                Add to Cart
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
