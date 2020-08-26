import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const elem = <h2>Hello World!</h2>

ReactDOM.render(
  <React.StrictMode>
    {elem}
  </React.StrictMode>,
  document.getElementById('root')
);
