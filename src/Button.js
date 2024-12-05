import React , {memo} from 'react';
import Text  from './Text';


const Button = memo((props) => {
  console.log('rendering Button');

  const { children, clickButton } = props;

  const doSomething = () => {
    
    clickButton();
  }
  
  return <button onClick={doSomething}>{children}</button>
})

export default Button;