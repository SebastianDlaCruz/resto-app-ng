import { createReducer, on } from "@ngrx/store";
import { TypeUser, User } from "../../models";
import { initAuth, update } from "../actions/user.action";

export const initStateUser: User = {
  id: '',
  userName: '',
  zipCode: '',
  locality: '',
  street: '',
  floor: 0,
  number: 0,
  contact: 0,
  email: '',
  clarification: '',
  type: TypeUser.INIT
}

export const userReducer = createReducer(
  initStateUser,
  on(update, (state, { user }) => ({ ...state, ...user })),
  on(initAuth, (state, { user }) => ({ ...state, userName: user.name, type: user.type, email: user.email, id: user.id })),
)
