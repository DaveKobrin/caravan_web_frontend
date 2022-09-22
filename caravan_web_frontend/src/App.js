import logo from './logo.svg'
import './App.css'
import CaravansContainer from './Container/Caravans.cntnr.js'
import PlayerContainer from './Container/Player.cntnr'

function App() {
  return (
    <div>
      <CaravansContainer />
      <PlayerContainer />

      
        <input type={'submit'} onClick={()=>{
          fetch('http://localhost:3000/cards/createSeed', {
            method: 'POST',
            body: JSON.stringify({test:'test'}),
            headers: { 'Content-Type': 'application/json'}
          });
        }} />
      
    </div>
  )
}

export default App
