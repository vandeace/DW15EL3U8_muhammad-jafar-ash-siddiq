import React, { Component } from 'react';
import Prof from '../compo/showprofile';
import Login from '../compo/login';

import { Container } from 'react-bootstrap';

export default class profile extends Component {
  render() {
    return (
      <div>
        <Login />
        <Container fluid style={{ marginTop: '100px' }}>
          <Prof />
        </Container>
      </div>
    );
  }
}
