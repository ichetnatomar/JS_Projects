// document.addEventListener('DOMContentLoaded', ()=>{
//   const rootElement = document.querySelector('#root');
//   console.log(rootElement);

//   const helloElement = document.createElement('div');
//   helloElement.innerText = 'hello';

//   rootElement.appendChild(helloElement);
// });


//step 1: mark your root element
const rootElement = document.querySelector('#root');

//step 2: make your desired react element
const headingElement = React.createElement('h1', null, "Hello from React");

//Step 3: render react element to your root using reactdom
ReactDOM.render(headingElement, rootElement);

