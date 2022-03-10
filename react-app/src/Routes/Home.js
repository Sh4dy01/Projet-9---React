import Menu from '../components/Menu';
import GameArticle from '../components/GameArticle';
import FooterComposant from '../components/Footer';

import React, { Component } from 'react';
import {Container, Row, Col, Form, InputGroup, FormControl, Button, Spinner} from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      search: "",
      genresFilter: [],
      filteredGames: [],
      loading:true
    }
  }

  toggleMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  }
  
  handleChange = (e) => {
    e.preventDefault()
    let name = e.target.name
    this.setState({
        [name]: e.target.value
    })
  }

  componentDidMount = async() => {
    this.getFilteredGames()
  }

  handleGenreChanges = (e) => {
    let isChecked = e.target.checked;
    let temp = this.state.genresFilter;
    
    if (isChecked){
      temp.push(e.target.value);

    }else{
      let idToRemove = temp.findIndex(genre => genre == e.target.value);
      temp.splice(idToRemove, 1);
    }

    this.setState({
      genresFilter: temp
    },()=>this.getFilteredGames())
  }

  getFilteredGames = async() =>{
    const listOfIdGenres = this.state.genresFilter;

    if (!listOfIdGenres) {
      this.setState({
        filteredGames: this.props.gameArticles});
        
    } else {
      
      let filter = "";
      
      listOfIdGenres.forEach((genreId,i) => {
        filter += "filters[$and][" + i + "][genres][id][$eq]=" + genreId + "&"
      });

      const response = await fetch("http://localhost:1337/api/games?sort[0]=launched_date%3Adesc&" + filter + "populate=*", {
        method: 'GET', 
        headers: {'Accept': 'application/json', 'Content-Type':'application/json'}}
      )
      const filteredGames = await response.json();

      this.setState({
        filteredGames: filteredGames.data,
      loading:false});
    }
  } 

  render() {
    return (
      <>
        <Menu updateTheCart={this.props.updateTheCart}></Menu>
        <Row>
          <Col xs={2} className='filter text-center d-none d-sm-block d-sm-none d-md-block'>
          <Button onClick={this.toggleMenu} variant="dark" size="sm" className='my-2'>Afficher filtres</Button>
          {this.state.showMenu &&
            <div className="float-start mx-auto ms-3 p-2 bg-light rounded">
              <div>
                <h3 className='border-bottom text-center'>Recherche par catégorie</h3>
                {this.props.gameGenres && this.props.gameGenres.map((gameGenre, i)=>
                  <Form.Check 
                    type='checkbox'
                    key={i}
                    value={gameGenre.id}
                    label={gameGenre.attributes.name}
                    onClick={e => this.handleGenreChanges(e)}
                  />
                )}
                <Form.Select aria-label="Default select example">
                </Form.Select>
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
            </div>}
          </Col>
          <Col>
            <div className="shadow p-3 bg-body">
              <Row className={this.state.loading ? ('case justify-content-md-center') : ('case')}>
                {
                this.state.loading ?
                  (<Col xs={1} className="spin" ><Spinner animation="border" size="lg" /></Col>)
                  :
                  (this.state.filteredGames && this.state.filteredGames
                    .filter(gameArticle => gameArticle.attributes.title.toLowerCase().includes(this.state.search.toLowerCase()))
                    .map((gameArticle, i) =>
                    <Col xs={12} md={6} xl={3} key={i}>
                      <GameArticle 
                        gamePlatforms={this.props.gamePlatforms}  
                        gameArticle={gameArticle} 
                        updateTheCart={this.props.updateTheCart}
                      />
                    </Col>
                  ))
                }
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