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

        }} />*/}

      <input
        type={'submit'}
        value='test NewUser'
        onClick={() => {

          fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({
              name: 'Dave',
              gamertag: 'gtag',
              email: 'me@here.com',
              password: 'pass',
            }),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });

        }} /> 
      

        <input type={'submit'} value='test login' onClick={()=>{
          fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({
              gamertag: 'gtag',
              password: 'pass'
            }),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test logout' onClick={()=>{
          fetch('http://localhost:3000/user/logout', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

        <input type={'submit'} value='test destroy' onClick={()=>{
          fetch('http://localhost:3000/user/destroy/6330c32214772093ed83dcfb', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test getDeck' onClick={()=>{
          fetch('http://localhost:3000/user/deck/6330bd17bdf09eb088f824df', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test addCard' onClick={()=>{
          fetch('http://localhost:3000/user/deck/add/6330bd17bdf09eb088f824df/632d0fa1705f594726aa8136', {
            method: 'PUT',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test remCard' onClick={()=>{
          fetch('http://localhost:3000/user/deck/rem/6330bd17bdf09eb088f824df/632d0fa1705f594726aa8136', {
            method: 'PUT',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test toggleCard' onClick={()=>{
          fetch('http://localhost:3000/user/deck/toggle/6330bd17bdf09eb088f824df/632d0fa1705f594726aa8136', {
            method: 'PUT',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

      <input
        type={'submit'}
        value='test Get Tops Set'
        onClick={() => {
          fetch('http://localhost:3000/cards/getManyByPattern/set/Tops', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            });
        }}
      />
      <input
        type={'submit'}
        value='test GetOneById'
        onClick={() => {
          fetch('http://localhost:3000/cards/getOneById/632f6bd3bc9100de884549a5', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            });
        }}
      />

    </div>
  );
}

export default App;
