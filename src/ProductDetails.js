import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

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
    <div className="container col-6">
      <div className="card">
        <img
          className="card-img-top"
          style={{
            maxHeight: "500px",
            alignSelf: "center",
            width: "auto",
          }}
          src={products[productId].image_url}
          alt={products[productId].name}
        />
        <div className="card-body">
          <h1 className="card-title">{products[productId].name}</h1>
          <h2>${products[productId].price}</h2>
          <p className="card-text">{products[productId].description}</p>
          {cart[productId] > 0 ? (
            <span>
              Qty: {cart[productId]}
              <span
                type="button"
                className="btn btn-outline-danger mx-1 p-1"
                onClick={() => removeItem(productId)}
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
            onClick={() => addItem(productId)}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
