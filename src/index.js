import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';
import MarvelService from "./services/MarvelService";
import {logDOM} from "@testing-library/react";

const marvelService = new MarvelService();

marvelService.getCharacter(1010338).then(res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

