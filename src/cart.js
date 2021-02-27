import _ from "lodash";

const INITIAL_STATE = {};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      let stateCopy = _.cloneDeep(state);
      let productId = action.productId;
      stateCopy[productId] = state[productId] + 1 || 1;
      return stateCopy;
    }
    case "REMOVE_ITEM": {
      let stateCopy = _.cloneDeep(state);
      let productId = action.productId;
      stateCopy[productId] = 0;
      return stateCopy;
    }
    default:
      return state;
  }
}
