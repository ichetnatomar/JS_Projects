import React, { useState } from 'react'

const InputBox = () => {
  const [task, setTask] = useState('');

  function handleInput(e) {
    setTask(e.target.value);
  }
  function addTask() {
    console.log(`add task: ${task} to list now`);
  }

  return (
    <div>

      <input type="text" placeholder='type task here' value={task} onChange={handleInput} />
      <button onClick={addTask}>Add Task</button>
      <ul></ul>

    </div>
  )
}

export default InputBox;