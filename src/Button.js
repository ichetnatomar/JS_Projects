import React from 'react';


const Button = (props) => {
  const { children, clickButton } = props;

  const doSomething = ()=>{
    console.log('button got clicked');
    clickButton();
  }


  return <button onClick={doSomething}>{children}</button>
}

export default Button;