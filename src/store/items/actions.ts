import { action } from "typesafe-actions";
import { Item, ItemsActionTypes } from "./types";

export const incrementSearches = () =>
  action(ItemsActionTypes.INCREMENT_SEARCHES);

export const decrementSearches = () =>
  action(ItemsActionTypes.DECREMENT_SEARCHES);

export const fetchItems = (items: Item["items"]) =>
  action(ItemsActionTypes.FETCH_ITEMS, items);
