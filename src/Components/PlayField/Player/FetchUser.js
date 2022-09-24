import React, { Component } from 'react';

class FetchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: '',
    };
  }
  componentDidMount() {
    this.setState({
      userData: {
        _id: '632e0ca3fadd2f1f5f9d404d',
        name: 'Matt',
        gamertag: 'Exitbot',
        email: 'mattp@gmail.com',
        password: '$2b$10$f3lnwrgp/P.xA/eKhbUbDurgpSndSvFd.uP4.KrMFflp0Wdqqilyy',
        balance: 100,
        friends: [],
        ownedCards: [],
        deck: [],
        __v: 0,
      },
    });
  }

  render() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}

export default FetchUser;
