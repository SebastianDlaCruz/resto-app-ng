import { createAction, props } from "@ngrx/store";
import { TypeUser, User } from "../../models";

export const init = createAction('[User Component] Init', props<{ user: User }>());
export const initAuth = createAction('[User Component] Init', props<{
  user: {
    name: string,
    type: TypeUser,
    email: string;
  }
}>());
