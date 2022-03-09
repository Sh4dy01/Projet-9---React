import Menu from '../components/Menu';
import GameArticle from '../components/GameArticle';
import FooterComposant from '../components/Footer';

import React, { Component } from 'react';
import {Container, Row, Col, Form, InputGroup, FormControl, Button} from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      filteredGames: []
    }
  }
  
  handleChange = (e) => {
    e.preventDefault()
    let name = e.target.name
    this.setState({
        [name]: e.target.value
    })
  }

  getFilteredGames = (listOfGenres) =>{
    let filter = "";
    console.log(listOfGenres);
    filter = listOfGenres.forEach((genre, i) => filter += "filters[$and][" + toString(i) + "][genres][name][$eq]=" + toString(genre) + "&");

    console.log(filter);

    const response = fetch("http://localhost:1337/api/games?" + filter + "populate=*", {
      method: 'GET', 
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'}}
    )
    const filteredGames = response.json();

    this.setState({
      filteredGames: filteredGames});
  }

  /* http://localhost:1337/api/games?filters[$and][0][genres][name][$eq]=Action&filters[$and][1][genres][name][$eq]=RPG <- example*/

  render() {
    return (
      <>
        <Menu updateTheCart={this.props.updateTheCart}></Menu>
        <Row>
          <Col xs={2}>
            <Container className="filter">
              <div>
                <h3 className='border-bottom text-center'>Recherche par catégorie</h3>
                {this.props.gameGenres && this.props.gameGenres.map((gameGenre, i)=>
                  <Form.Check 
                    type='checkbox'
                    key={i}
                    label={gameGenre.attributes.name}
                  />
                )}
                <div className='text-center'>
                  <Button size="sm" variant="dark" style={{ width: '100%' }} onClick={()=>this.getFilteredGames(["Action", "Roguelike"])}>Appliquer les filtres</Button>
                </div>
              </div>
              <div>
                <h3 className='border-bottom text-center'>Recherche par nom</h3>
                <InputGroup size="sm py-3">
                  <InputGroup.Text id="inputGroup-sizing-sm">Recherche</InputGroup.Text>
                  <FormControl 
                    aria-label="Small" 
                    aria-describedby="inputGroup-sizing-sm" 
                    name="search" 
                    value={this.state.name} 
                    onChange={(e) => this.handleChange(e)}
                  />
                </InputGroup>
              </div>
            </Container>
          </Col>
          <Col xs={10}>
            <div className="shadow p-3 bg-body me-5">
              <Row>
                {this.props.gameArticles && this.props.gameArticles
                  .filter(gameArticle => gameArticle.attributes.title.toLowerCase().includes(this.state.search.toLowerCase()))
                  .map((gameArticle, i) =>
                  <Col xs={12} md={6} xl={4} xxl={3} key={i}>
                    <GameArticle 
                      gamePlatforms={this.props.gamePlatforms}  
                      gameArticle={gameArticle} 
                      updateTheCart={this.props.updateTheCart}
                    />
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