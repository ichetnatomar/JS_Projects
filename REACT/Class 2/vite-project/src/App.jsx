import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Card2 from './components/Counter2'
import Counter2 from './components/Counter2'


function App() {
  const cardData = [
    {
      title: "Laptops",
      description: "Macbook Air"
    },
    {
      title: "Shoes",
      description: "Adidas"
    },
    {
      title: "Appliances",
      description: "Bajaa Juicer"
    },
    {
      title: "Clothes",
      description: "Jockey tshirt"
    }
  ];
  return <>
    <Navbar />

    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      {
        cardData.map((item) => {
          return <Card key={item.title} cardTitle={item.title} cardDescription={item.description} />
        })
      }
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Counter2 />
    </div>


  </>;

}

export default App;







// const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
