const child1 = React.createElement('p', {}, "I am child 1"); //child created
const child2 = React.createElement('button', {className: 'button-design'}, 'click me');
const child3 = React.createElement('h3', {className: 'headings-design'}, "inside div");
const div = React.createElement('div', {}, child1, child2, child3); //div created and child placed inside it



const rootElement = document.querySelector('#root'); //eleemnt with id = root accessed from html
const root = ReactDOM.createRoot(rootElement); //root element created in reactdom
root.render(div); //div appended inside root
console.log(div);
