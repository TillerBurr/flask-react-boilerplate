import { Reducer } from "redux";
import { Item, ItemsActionTypes, ItemState } from "./types";

export const initialItemState: ItemState = {
  searches: 0,
  items: [{ test: "testing" }],
};

const reducer: Reducer<Item> = (state = initialItemState, action) => {
  switch (action.type) {
    case ItemsActionTypes.INCREMENT_SEARCHES: {
      return { ...state, searches: state.searches + 1 };
    }
    case ItemsActionTypes.DECREMENT_SEARCHES: {
      return { ...state, searches: state.searches - 1 };
    }
    case ItemsActionTypes.FETCH_ITEMS: {
      return { ...state, items: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as itemReducer };
