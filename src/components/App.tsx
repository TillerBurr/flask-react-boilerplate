import * as React from "react";
import { ApplicationState } from '../store'
import { incrementSearches, fetchItems } from '../store/items/actions'

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const App: React.FC = (props) => {
  const dispatch = useDispatch();
  const search = useSelector(
    (state: ApplicationState) => state.items.searches
  );
  return (
    <div className="app-container">
      <Link to={"/"}>Home</Link>
      {props.children}

      <h1> Searches: {search}</h1>
      <button onClick={() => dispatch(incrementSearches())}>
        INCREMENT
      </button>

    </div>
  );
};
