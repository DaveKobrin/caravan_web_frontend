import './App.css';
import CaravansContainer from './Container/Caravans.cntnr.js';
import PlayerContainer from './Container/Player.cntnr';

function App() {
  return (
    <div>
      <CaravansContainer />
      {/* <PlayerContainer /> */}
      {/* 
      <input
        type={'submit'}
        value='create cards'
        onClick={() => {
          fetch('http://localhost:3000/cards/createSeed', {
            method: 'POST',
            body: JSON.stringify({ test: 'test' }),
            headers: { 'Content-Type': 'application/json' },
          });
        }}
      />

      <input
        type={'submit'}
        value='test NewUser'
        onClick={() => {
          fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({
              name: 'Matt',
              gamertag: 'Exitbot',
              email: 'mattp@gmail.com',
              password: 'pass1234',
            }),
            headers: { 'Content-Type': 'application/json' },
          });
        }}
      /> */}
    </div>
  );
}

export default App;
