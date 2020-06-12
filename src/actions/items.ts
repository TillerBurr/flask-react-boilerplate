import axios from 'axios'
/*
 * Action Creators
 */

export const incrementSearches = () => ({
  type: 'INCREMENT_SEARCHES'
})

export const decrementSearches = () => ({
  type: 'DECREMENT_SEARCHES'
})

export const requestItems = (query: any) => ({
  type: 'REQUEST_ITEMS', query
})

export const receiveItems = (items: any) => ({
  type: 'RECEIVE_ITEMS', items
})

export const itemRequestFailed = (err?: any) => ({
  type: 'ITEM_REQUEST_FAILED', err
})

// Necessary?
export function fetchItems(query: any) {
  return function (dispatch: any) {
    dispatch(requestItems(query))
    dispatch(incrementSearches())
    return axios.get(query)
      .then((response: any) => ({
        status: response.status,
        response
      }))
      .then(({ status, response }: any) => {
        if (status >= 400) dispatch(itemRequestFailed())
        else dispatch(receiveItems(response))
      }, (err: any) => { dispatch(itemRequestFailed(err)) })
  }
}