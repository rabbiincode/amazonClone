import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import reducer, { initialState } from './components/contextApi/reducer';
import { StateProvider } from './components/contextApi/StateProvider';


ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);