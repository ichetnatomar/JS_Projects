import React, {useState} from 'react';
import Button from './Button';

const App = () => {
  let message = 'Good morning User';

  const changeMessage = () => {
    message = 'Good afternoon user';
    console.log(message);
  }

  return <>
    <div>{message}</div>
    <Button clickButton={changeMessage}>{'click me'}</Button>
  </>
}

export default App;