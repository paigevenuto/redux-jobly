import productsFile from "./data.json";

const INITIAL_STATE = productsFile.products;

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
