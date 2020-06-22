import * as React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {Dispatch} from 'redux'
import { fetchItems } from '../store/items/actions'
import { ApplicationState } from '../store/'
import axios from "axios";
export function fetchItemsAPI() {
  return (dispatch: Dispatch) => {
    try {
      const data = axios.get("/api/items").then((res) => {
        dispatch(fetchItems(res.data));
      });
      return data;
    } catch (error) {
      alert(error);
    }
  }
}


const Home: React.FC = () => {
  const api_items = useSelector((state: ApplicationState) => state.items.items)
  const dispatch = useDispatch()
  function onFetchData() {
    dispatch(fetchItemsAPI())
  }
  return (
    <div className="home">
      HOME
      <button onClick={onFetchData}>Get Items</button>
      {JSON.stringify(api_items)}

    </div>
  );
}

export default Home;
