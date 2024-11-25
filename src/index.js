import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

// This below 4 lines are verbose, we can also do the same thinbgs using jsx.
// const child1 = React.createElement('p', {className: 'color'}, "I am child 1"); //p child created
// const child2 = React.createElement('button', {className: 'button-design'}, 'click me'); //button child created
// const child3 = React.createElement('h3', {className: 'headings-design'}, "inside div"); //h3 child created
// const div = React.createElement('div', {}, [child1, child2, child3]); //div created and child placed inside it


const div = <div className='color'>hello2</div>

//access the root element from html, and then make a reactdom root element
const rootElement = document.querySelector('#root'); //eleemnt with id = root accessed from html
const root = ReactDOM.createRoot(rootElement); //root element created in reactdom
root.render(div); //div appended inside root
console.log(div);

//Conditionally render a component
//lets say, if Math.random() < 0.5, you say: "heads", else "tails"
const result = Math.random();
const resultEle = <div>{(result <= 0.5) ? 'heads' : 'tails'}</div>; //react element
root.render(resultEle);
console.log(result);
console.log(resultEle);



//another example
const isMorning = true;
const morningMsg = "Good morning";
const afternoonMsg = "Good afternoon";

const morningEle = <div>{morningMsg}, <p>it is 7am.</p> </div>
const afternoonEle = <div>{afternoonMsg}, it is 2pm.</div>
const messageEle = (isMorning) ? morningEle : afternoonEle;

root.render(messageEle);
console.log(messageEle);