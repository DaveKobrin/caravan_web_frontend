import logo from './logo.svg'
import './App.css'
import CaravansContainer from './Container/Caravans.cntnr.js'
import PlayerContainer from './Container/Player.cntnr'

function App() {
  return (
    <div>
      <CaravansContainer />
      {/* <PlayerContainer /> */}

      {/*       
        <input type={'submit'} onClick={()=>{
          fetch('http://localhost:3000/cards/createSeed', {
            method: 'POST',
            body: JSON.stringify({test:'test'}),
            headers: { 'Content-Type': 'application/json'}
          });
        }} /> 
        Commented out as precaution cuz sometimes I R Stoopit*/}
      <input
        type={'submit'}
        onClick={() => {
          const fetched = fetch('http://localhost:3000/cards/getCards', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          })
          console.log(fetched)
        }}
      />
    </div>
  )
}

export default App
