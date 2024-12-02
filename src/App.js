import React from 'react';
import Button from './Button';
import Text from './Text';


const App = () => {

  const data = [
    { id: 1, text: 'text1' },
    { id: 2, text: 'text2' },
    { id: 3, text: 'text3' },
    { id: 4, text: 'text4' },
    { id: 5, text: 'text5' },
  ];

  const handleClickAction = () => {
    console.log('clicked from parent');
  }

  return <>
  {
    data.map((item, index)=><Text key = {index}>{item.text}</Text>) //never use index as a key
  }
  </>

}

export default App;




// another way of returnng array values: in return make fragments, and pass entire array of components, within {}. Associate a key with a comp.

// return <>
// {[
//   <Text key={data[0].id}>{data[0].text}</Text>,
//   <Text key={data[1].id}>{data[1].text}</Text>
// ]}
// </>





























// import React from 'react';
// import Button from './Button';


// const App = () => {                                  //App is a functional component
//   const handleClickParent = () => {                  //children method of Button component
//     console.log('CLicked from inside Parent.');
//   }
//   return <Button clickAct={handleClickParent}>click me from App</Button>; //whatever gets passed inside component, becomes children of component.
// }

// export default App;