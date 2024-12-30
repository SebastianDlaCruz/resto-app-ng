import { createReducer, on } from "@ngrx/store";
import { TypeUser, User } from "../../models";
import { init } from "../actions/user.action";

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
  type: TypeUser.USER
}

export const userReducer = createReducer(
  initStateUser,
  on(init, (state, { user }) => ({ ...state, ...user }))
)
