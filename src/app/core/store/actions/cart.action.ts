import { createAction, props } from "@ngrx/store";
import { Dish } from "../../models";

export const addDish = createAction('[Cart Component],AddDish',
  props<{ dish: Dish }>()
)


export const deleteDish = createAction('[Cart Component],DeleteDish',
  props<{ idDish: string }>()
)

export const addData = createAction('[Cart Component],AddData',
  props<{ id: string, idUser: string }>()
)


export const calculateItems = createAction('[Cart Component],calculateItems');

export const resteItems = createAction('[Cart Component],resetItems');
