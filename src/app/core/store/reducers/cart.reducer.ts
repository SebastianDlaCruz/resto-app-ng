import { createReducer, on } from "@ngrx/store"
import { Cart } from "../../models"
import { addData, addDish, deleteDish, totalDishes } from "../actions/cart.action"


export const initStateCart: Cart = {
  id: '',
  idUser: '',
  dishes: [],
  total: 0
}

export const cartReducer = createReducer(
  initStateCart,
  on(addDish, (state, { dish }) => ({
    ...state,
    dishes: [...state.dishes, dish]
  })),

  on(deleteDish,
    (state, { idDish }) => ({
      ...state,
      dishes: state.dishes.filter(item => item.id !== idDish)
    })
  ),

  on(addData,
    (state, { id, idUser }) => ({
      ...state,
      id,
      idUser
    })
  ),

  on(totalDishes,
    (state, { total }) => ({
      ...state,
      total
    })
  ),
)
