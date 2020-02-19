import React from 'react';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers";
import GhList from "./components/ghList";
import './App.css';

//This creates store with reducers from reducers/index.jsx
const store = createStore(rootReducer, applyMiddleware(thunk));

function App()
{
  return (
    <Provider store={store}>
      <div className="App">
        <GhList />
      </div>
    </Provider>
  );
}

export default App;
