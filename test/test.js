// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {Appp} from './Appp.js';

const React = require('react');
const ReactDOM = require('react-dom/client');
const Appp = require('./Appp.js');

const rootEle = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEle);
// root.render(<Appp/>);
root.render(React.createElement(Appp, null));