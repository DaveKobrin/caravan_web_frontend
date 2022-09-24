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
<<<<<<< HEAD
        }}
      /> */}
=======
        }} /> */}
        <input type={'submit'} value='test Get Tops Set' onClick={()=>{
          fetch('http://localhost:3000/cards/getManyByPattern/set/Tops', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />
        <input type={'submit'} value='test GetOneById' onClick={()=>{
          fetch('http://localhost:3000/cards/getOneById/632d0fa1705f594726aa8136', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

>>>>>>> f3ab35294a663cecdee752f5e7cda3b4f3ad402a
    </div>
  );
}

export default App;
