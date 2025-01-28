import React, { useState } from 'react'
import './Counter2.css'

const Counter2 = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(Math.max((count - 1), 0));
  }

  function reset() {
    setCount(0);
  }

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Simple Counter</h1>
      <div style={{ display: 'flex' }}>
        <button onClick={increment} className='counter-btn' style={{ marginRight: '2rem' }}>+</button>
        <h2>{count}</h2>
        <button onClick={decrement} className='counter-btn' style={{ marginLeft: '2rem' }}>-</button>
      </div>
      <button onClick={reset} style={{ cursor: 'pointer' }}>Reset</button>
    </div>

  )
}

export default Counter2;