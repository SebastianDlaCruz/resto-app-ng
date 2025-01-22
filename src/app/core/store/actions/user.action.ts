import { createAction, props } from "@ngrx/store";
import { TypeUser, User } from "../../models";

export const update = createAction('[User Component] Init', props<{ user: User }>());
export const initAuth = createAction('[User Component] Init', props<{
  user: {
    id: string,
    name: string,
    type: TypeUser,
    email: string;
  }
}>());


