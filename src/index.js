import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App.js'; //goto line 104 to ckeck imports


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




//write a function that prints a message once span fro line 35 morningEle is clicked
//Tradionatl Function Declaration
// function clickMessage() { 
//   console.log('I was clicked'); 
// }


//Function Expression
// const clickMessage = function(){
//   console.log('I was clicked'); 
// }

//Es6 Arrow functions
// const clickMessage = ()=>{
//   console.log("I was clicked");
// }

//even consise Es6 arrow function
const clickMessage = (message) => console.log(`message: ${message}`);





//another example
const isMorning = true;
const morningMsg = "Good morning";
const afternoonMsg = "Good afternoon";


// These below will work
// const morningEle = <div>{morningMsg}, <span onClick={clickMessage}>it is 7am.</span> </div>
// const morningEle = <div>{morningMsg}, <span onClick={()=>console.log("I was clicked from inside arrow function")}>It is 6 am.</span></div>
const morningEle = <div>{morningMsg}<span onClick={() => clickMessage("I was clicked.")}>. It is 6 am.</span></div>


// This wont work, as the function call got encountered and executed thena nd there
// const morningEle = <div>{morningMsg}, <span onClick={clickMessage("I was clicked..")}>It is 5 am.</span></div>

const afternoonEle = <div>{afternoonMsg}, it is 2pm.</div>
const messageEle = (isMorning) ? morningEle : afternoonEle;

root.render(messageEle);
console.log(messageEle);



//Functional components: egular Functions that return a react element
// In the above example, instead of passing the react elemenr in line 39, lets try passing using a functional component

const GreetingMessage = function () {
  // return messageEle + "I am inside component.";                        //you cannot do this, simce messageEle is a eact element object, not a string. On doing like    this, type coersion happens, and entire thing gets converted to some awke=ward string, which cannot be accepted by render()method as it is expecting a REACT element.

  // instead use this
  return <div>
    {messageEle}
    I am inside Component;
  </div>

  //or no need for extrra div also, just use fragments
  // return <>
  // messageEle;
  // I am inside Component.
  // </>

}


// root.render(<GreetingMessage></GreetingMessage>);
root.render(<App/>);

