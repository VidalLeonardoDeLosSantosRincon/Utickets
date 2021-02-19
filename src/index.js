import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppRoutes} from './routes';
import {Provider} from "react-redux";
import {Store} from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <AppRoutes/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


