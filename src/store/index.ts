import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { Item } from "./items/types";
import { itemReducer } from "./items/reducer";

export interface ApplicationState {
  items: Item;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    items: itemReducer,
    router: connectRouter(history),
  });

// create the store
// initialize app state
// @ts-ignore
// store.dispatch(fetchItems(config.endpoint + "items"));
