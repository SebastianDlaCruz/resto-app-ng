import { createReducer, on } from "@ngrx/store";
import { Cart } from "../../models";
import { addData, addDish, calculateItems, deleteDish, resteItems } from "../actions/cart.action";


export const initStateCart: Cart = {
  id: '',
  idUser: '',
  dishes: [],
  total: 0,
  items: 0
}

let total = 0;

export const cartReducer = createReducer(
  initStateCart,
  on(addDish, (state, { dish }) => {


    const updatedDishes = [...state.dishes, dish];
    const newTotal = updatedDishes.reduce((acc, currentDish) => acc + (currentDish.count * currentDish.dishes.amount), 0);

    return {
      ...state,
      dishes: updatedDishes,
      total: newTotal
    };
  }

  ),

  on(deleteDish,
    (state, { idDish }) => {

      const updateDishes = state.dishes.filter(item => item.id !== idDish);
      const newTotal = updateDishes.reduce((acc, currentDish) => acc + (currentDish.count * currentDish.dishes.amount), 0);

      return {
        ...state,
        dishes: updateDishes,
        total: newTotal
      }
    }
  ),

  on(addData,
    (state, { id, idUser }) => ({
      ...state,
      id,
      idUser
    })
  ),

  on(calculateItems,
    (state) => ({
      ...state,
      items: [... new Set(state.dishes)].length
    })
  ),

  on(resteItems, (state) => ({
    ...state,
    items: 0
  }))

)
