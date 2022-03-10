import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../action/types";

const intialState = {
  product: {},
};

export const productDetailsReducer = (state = intialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
