import Menu from '../components/Menu';
import GameArticle from '../components/GameArticle';
import FooterComposant from '../components/Footer';

import React, { Component } from 'react';
import {Container, Row, Col, Form, InputGroup, FormControl} from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
  }
  
  handleChange(e){
    e.preventDefault()
    let name = e.target.name
    this.setState({
        [name]: e.target.value
    })
  }

  /* http://localhost:1337/api/games?filters[$and][0][genres][name][$eq]=Action&filters[$and][1][genres][name][$eq]=RPG <- example*/

  render() {
    return (
      <>
        <Menu gameGenres={this.props.gameGenres} gameArticles={this.props.gameArticles} deleteGameFromTheCart={this.props.deleteGameFromTheCart}></Menu>
        <Row>
          <Col xs={2}>
            <Container className="filter">
              <h3 className='border-bottom text-end'>Filtres</h3>
              {this.props.gameGenres && this.props.gameGenres.map((gameGenre, i)=>
                <Form.Check 
                  type='checkbox'
                  key={i}
                  label={gameGenre.attributes.name}
                />
              )}
              <InputGroup size="sm py-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Recherche</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="search" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
              </InputGroup>
            </Container>
          </Col>
          <Col xs={10}>
            <div className="shadow p-3 bg-body me-5">
              <Row>
                {this.props.gameArticles && this.props.gameArticles
                  .filter(gameArticle => gameArticle.attributes.title.toLowerCase().includes(this.state.search.toLowerCase()))
                  .map((gameArticle, i)=>
                  <Col xs={12} md={6} xl={4} xxl={3} key={i}>
                    <GameArticle gamePlatforms={this.props.gamePlatforms}  gameArticle={gameArticle} updateTotalPrice={this.props.updateTotalPrice} addGameInTheCart={this.props.addGameInTheCart}/>
                  </Col>
                )}
              </Row>
            </div>
          </Col>
        </Row>
        <FooterComposant/>
      </>
    );
  }
}

export default Home;