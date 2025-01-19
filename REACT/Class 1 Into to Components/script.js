//Traditional way: 
//step 1: mark your root element
const rootElement = document.querySelector('#root');

//step 2: make your desired react element
const headingElement = React.createElement('h1', { className: 'heading1', style: { color: 'pink', backgroundColor: 'skyblue' } }, "Hello from React");

//Step 3: render react element to your root using reactdom
ReactDOM.render(headingElement, rootElement);







//Functional Component:
// functional component in jSX = JS + HTML, browser cannot understand jsx, so jsx code is first transcompiled by babel then sent to html so it may understand
const App = function () {
  return <h1 className="heading1" style={{color: 'pink', backgroundColor: 'grey', fontSize:'3rem',}}>Hello from react with jsx</h1>;
}

//rendering functional component called App
ReactDOM.render(<App />, rootElement);






//JS way

// document.addEventListener('DOMContentLoaded', ()=>{
//   const rootElement = document.querySelector('#root');

//   const helloElement = document.createElement('div');
//   helloElement.innerText = 'hello';

//   rootElement.appendChild(helloElement);
// });


