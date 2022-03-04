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
      <>
      <div>
        <Menu></Menu>
        <Container>
          <Row>
          {this.props.gameArticles.data && this.props.gameArticles.data.map((gameArticles, i)=>
          <Col xs={4} key={i}><GameArticle gameArticles={this.props.gameArticles.data[i]}/></Col>)}
          </Row>
        </Container>
      </div>
      </>
    );
  }
}

export default Home;