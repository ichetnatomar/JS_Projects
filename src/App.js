import React, { useCallback, useState } from 'react';
import Button from './Button';

const App = () => {
  const [message, updateMessage] = useState('Good Morning User');


  const changeMessage = () => {
    console.log('messgae is: ', message)
    updateMessage((message) => {                    //asynchronous
      console.log('before updating: ', message);
      return 'Good Afternoon User';
    });
    console.log('after updating, ', message);
  }

  return <>
    <div>{message}</div>
    <Button clickButton={changeMessage}>{'click me'}</Button>
  </>
}

export default App;

// let [message, updateMessage] = useSate(); this array is a State Variable. message = stateful value, updateMessage =async function to update stateful value. a state varuable is needed to reflect chanegs made to JSX, normal variables cant do that. 
//updateMesaage accepts a callback and runs aynchronously, meainng it est execute everything first thats synchronous, and at last runs its async lines