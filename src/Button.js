import React from 'react';


//create Button component
const Button = (props) => {                                      //props catches childrena and other functions from App
  const { children, clickAction, data } = props;                       //children: click me from App

  const handleClick = () => {
    clickAction?.();                                             //Optional Chaining, if clickAcvtion is not passed from App, it exectes nothing

  }

  //JSX
  return <button onClick={handleClick}>
    {children}
    +
    {data?.a?.d?.d}
  </button>
}

export default Button;





























// import React from 'react';

// const Button = (props) => {                            //Button is a functional component. messageInsideButton is taken from App.js
//   console.log(props); //click me, clickact
//   const handleClick = () => {
//     clickAct();
//     console.log('button clicked inside component.');
//   }

//   const { children, clickAct} = props;                          //{children} property of Button component becomes messageInsideButton.
//   return <button onClick={handleClick}>{children}</button>   //This is JSX code,which react.createelement. hence it requires react to be imported
// }

// export default Button;


