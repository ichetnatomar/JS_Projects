import React from 'react';
import Button from './Button';


const App = () => {

  const handleClickAction = () => {
    console.log('clicked from parent');
  }

  const data = 'data from App';

  return <Button data = {data} /*clickAction = {handleClickAction}*/>Click me from App</Button> //children: Click me from App, another prop


}

export default App;






























// import React from 'react';
// import Button from './Button';


// const App = () => {                                  //App is a functional component
//   const handleClickParent = () => {                  //children method of Button component
//     console.log('CLicked from inside Parent.');
//   }
//   return <Button clickAct={handleClickParent}>click me from App</Button>; //whatever gets passed inside component, becomes children of component.
// }

// export default App;