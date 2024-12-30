import { createAction, props } from "@ngrx/store";
import { User } from "../../models";

export const init = createAction('[User Component] Init', props<{ user: User }>());
