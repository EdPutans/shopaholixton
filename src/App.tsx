import { useEffect, useState } from 'react'
import './App.css'
import ConditionalName from './conditionalName'
import { getItems, logIn } from './utils';

function App() {
  const [isCheckedAdmin, setIsCheckedAdmin] = useState(false);
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({
  });

  function handleLoginAsEd() {
    logIn('ed@email.com', 'bla').then(response => {
      setUser(response.data);
      localStorage.setItem('token', response.token);
      response.data.privileges === 'admin'
        ? setIsCheckedAdmin(true) : setIsCheckedAdmin(false)
    })
  }
  function handleLoginAsJurgen() {
    logIn('jurgen@email.com', 'CAN YOU HEAR ME').then(response => {
      setUser(response.data);
      localStorage.setItem('token', response.token);
      response.data.privileges === 'admin'
        ? setIsCheckedAdmin(true) : setIsCheckedAdmin(false)
    })
  }


  const isUserAnAdmin = user.privileges === 'admin';

  useEffect(() => {
    getItems()
      .then(apiItems => setItems(apiItems.data))
  }, []);

  return (
    <div className="App">
      {isUserAnAdmin && <>
        <label htmlFor='admin'>Enable Admin controls</label>
        <input onChange={() => setIsCheckedAdmin(!isCheckedAdmin)} checked={isCheckedAdmin} type='checkbox' id='admin' />
      </>}
      {user.name && <h3>{user.name}</h3>}
      <header className="App-header">
        {items.map(({ name, imageUrl, price, id }) => <div style={{ width: 200, border: '1px solid white', margin: '0 20px' }}>
          <ConditionalName id={id} name={name} isCheckedAdmin={isCheckedAdmin} />
          <img style={{ width: '100%' }} src={imageUrl} alt="" />
          <h3>{price}</h3>
        </div>)}
      </header>
      <button onClick={handleLoginAsEd}>LOG ME IN AS ED (ADMIN) PLEASE</button>
      <button onClick={handleLoginAsJurgen}>LOG ME IN AS JURGEN PLEASE</button>
    </div>
  )
}

export default App
