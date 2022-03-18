import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ConditionalName from './conditionalName'
import { getItems } from './utils';

function App() {
  const [isCheckedAdmin, setIsCheckedAdmin] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then(apiItems => setItems(apiItems.data))
  }, []);

  return (
    <div className="App">
      <label htmlFor='admin'>FHSDJKFDHSJKFHSDKF</label>
      <input onChange={() => setIsCheckedAdmin(!isCheckedAdmin)} checked={isCheckedAdmin} type='checkbox' id='admin' />

      <header className="App-header">
        {items.map(({ name, imageUrl, price, id }) => <div style={{ width: 200, border: '1px solid white', margin: '0 20px' }}>
          <ConditionalName id={id} name={name} isCheckedAdmin={isCheckedAdmin} />
          <img style={{ width: '100%' }} src={imageUrl} alt="" />
          <h3>{price}</h3>
        </div>)}
      </header>
    </div>
  )
}

export default App
