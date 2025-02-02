import { createReducer, on } from "@ngrx/store";
import { CartState } from "../../models/cart-state.model";
import { close, toggle } from "../actions/cart-state-action";


export const initCartState: CartState = { cartState: false };

export const cartStateReducer = createReducer(
  initCartState,
  on(toggle, (state) => ({ ...state, cartState: !state.cartState })),
  on(close, (state) => ({ ...state, cartState: false }))
)
