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

          fetch(process.env.REACT_APP_CARAVAN_API + '/user/register', {
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
          fetch(process.env.REACT_APP_CARAVAN_API + '/user/login', {
            method: 'POST',
            body: JSON.stringify({
              gamertag: 'gtag',
              password: 'pass'
            }),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          }).catch((err)=>{console.log({err})});
        }} />

<input type={'submit'} value='test logout' onClick={()=>{
          fetch(process.env.REACT_APP_CARAVAN_API + '/user/logout', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

        <input type={'submit'} value='test destroy' onClick={()=>{
          fetch(process.env.REACT_APP_CARAVAN_API + '/user/destroy/6330c32214772093ed83dcfb', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test getDeck' onClick={()=>{
          fetch(process.env.REACT_APP_CARAVAN_API + '/user/deck/6330bd17bdf09eb088f824df', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test addCard' onClick={()=>{
          fetch(process.env.REACT_APP_CARAVAN_API + '/user/deck/add/6330bd17bdf09eb088f824df/632d0fa1705f594726aa8136', {
            method: 'PUT',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test remCard' onClick={()=>{
          fetch(process.env.REACT_APP_CARAVAN_API + '/user/deck/rem/6330bd17bdf09eb088f824df/632d0fa1705f594726aa8136', {
            method: 'PUT',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        }} />

<input type={'submit'} value='test toggleCard' onClick={()=>{
          fetch(process.env.REACT_APP_CARAVAN_API + '/user/deck/toggle/6330bd17bdf09eb088f824df/632d0fa1705f594726aa8136', {
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
          fetch(process.env.REACT_APP_CARAVAN_API + '/cards/getManyByPattern/set/Tops', {
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
          fetch(process.env.REACT_APP_CARAVAN_API + '/cards/getOneById/632f6bd3bc9100de884549a5', {
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
