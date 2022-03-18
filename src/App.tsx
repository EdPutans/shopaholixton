import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ConditionalName from './conditionalName'


const items = [{
  id: 1,
  name: 'Susans soul',
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Susan_Wojcicki_%2829393944130%29_%28cropped%29.jpg",
  price: 120,
},
{
  id: 2,
  name: 'Seagull',
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
  price: 22,
}]


function App() {
  const [isCheckedAdmin, setIsCheckedAdmin] = useState(false);

  return (
    <div className="App">
      <label htmlFor='admin'>FHSDJKFDHSJKFHSDKF</label>
      <input onChange={() => setIsCheckedAdmin(!isCheckedAdmin)} checked={isCheckedAdmin} type='checkbox' id='admin' />

      <header className="App-header">
        {items.map(({ name, imageUrl, price, id }) => <div style={{ width: 200, height: 350 }}>
          <ConditionalName id={id} name={name} isCheckedAdmin={isCheckedAdmin} />
          <img style={{ width: '100%' }} src={imageUrl} alt="" />
          <h3>{price}</h3>
        </div>)}
      </header>
    </div>
  )
}

export default App
