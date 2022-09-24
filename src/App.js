import './App.css';
import CaravansContainer from './Container/Caravans.cntnr.js';
import PlayerContainer from './Container/Player.cntnr';

function App() {
  return (
    <div>
      <CaravansContainer />
      {/* <PlayerContainer />

      
        <input type={'submit'} value='create cards' onClick={()=>{
          fetch('http://localhost:3000/cards/createSeed', {
            method: 'POST',
            body: JSON.stringify({test:'test'}),
            headers: { 'Content-Type': 'application/json'}
          });
        }} />*/}
        
        {/* <input type={'submit'} value='test NewUser' onClick={()=>{
          fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({
              name: 'Dave',
              gamertag: 'gtag',
              email: 'me@here.net',
              password: 'pass',
            }),
            headers: { 'Content-Type': 'application/json'}
          });
        }} /> 
        <input type={'submit'} value='test Get Tops Set' onClick={()=>{
          fetch('http://localhost:3000/cards/getManyByPattern/set/Tops', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} /> */}
        {/* <input type={'submit'} value='test GetOneById' onClick={()=>{
          fetch('http://localhost:3000/cards/getOneById/632d0fa1705f594726aa8136', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} /> */}

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

<input type={'submit'} value='test getDeck' onClick={()=>{
          fetch('http://localhost:3000/user/deck/632e415c57ee8e5a0673eb7f', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test addCard' onClick={()=>{
          fetch('http://localhost:3000/user/deck/add/632d0fa1705f594726aa8136', {
            method: 'PUT',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test remCard' onClick={()=>{
          fetch('http://localhost:3000/user/deck/rem/632d0fa1705f594726aa8136', {
            method: 'PUT',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test toggleCard' onClick={()=>{
          fetch('http://localhost:3000/user/deck/toggle/632d0fa1705f594726aa8136', {
            method: 'PUT',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

    </div>
  )
}

export default App;
