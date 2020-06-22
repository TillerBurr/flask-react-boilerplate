export interface Item extends ApiResponse {
  searches: number;
  items: object[];
}

export type ApiResponse = Record<string, any>;

export enum ItemsActionTypes {
  INCREMENT_SEARCHES = "items/INCREMENT_SEARCHES",
  DECREMENT_SEARCHES = "items/DECREMENT_SEARCHES",
  FETCH_ITEMS = "items/FETCH_ITEMS",
}

export interface ItemState {
  readonly searches: number;
  readonly items: object[];
}
