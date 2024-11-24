import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const child1 = React.createElement('p', {className: 'color'}, "I am child 1"); //p child created
const child2 = React.createElement('button', {className: 'button-design'}, 'click me'); //button child created
const child3 = React.createElement('h3', {className: 'headings-design'}, "inside div"); //h3 child created

const div = React.createElement('div', {}, [child1, child2, child3]); //div created and child placed inside it
// const div = <div className='color'>hello2</div>

const rootElement = document.querySelector('#root'); //eleemnt with id = root accessed from html
const root = ReactDOM.createRoot(rootElement); //root element created in reactdom
root.render(div); //div appended inside root
console.log(div);

//hello


