import React, { Component } from 'react';
import Menu from '../components/Menu';
import GameArticle from '../components/GameArticle';
import {Container, Row, Col} from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Menu></Menu>
        <Container>
          <Row>
            <Col><GameArticle></GameArticle></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;