import React, { Component } from 'react';
import {Row, Col, Form, InputGroup, FormControl, Button, Spinner} from 'react-bootstrap';

import Menu from '../components/Menu';
import GameArticle from '../components/GameArticle';
import FooterComposant from '../components/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      search: "",
      sort: "launched_date",
      order: "desc",
      genresFilter: [],
      filteredGames: [],
      loading:true,
      topGames: []
    }
  }

  toggleMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  }
  
  handleSearchChange = (e) => {
    e.preventDefault();
    let name = e.target.name
    this.setState({
        [name]: e.target.value
    })
  }

  handleSortAndOrderChange = (e) => {   
    e.preventDefault();
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    },()=>this.getFilteredGames())
  }

  handleGenreChange = (e) => {
    let isChecked = e.target.checked;
    let temp = this.state.genresFilter;
    
    if (isChecked){
      temp.push(e.target.value);

    }else{
      let idToRemove = temp.findIndex(genre => genre === e.target.value);
      temp.splice(idToRemove, 1);
    }

    this.setState({
      genresFilter: temp
    },()=>this.getFilteredGames())
  }

  getFilteredGames = async() =>{
    const listOfIdGenres = this.state.genresFilter;
      
    let filter = "";
    
    listOfIdGenres.forEach((genreId,i) => {
      filter += "filters[$and][" + i + "][genres][id][$eq]=" + genreId + "&"
    });

    const response = await fetch("http://localhost:1337/api/games?sort[0]=" + this.state.sort + "%3A" + this.state.order + "&" + filter + "populate=*", {
      method: 'GET', 
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'}}
    )
    const filteredGames = await response.json();

    this.setState({
      filteredGames: filteredGames.data,
      loading:false
    });
  }

  componentDidMount = async() => {
    await this.getFilteredGames();

    let topGames = [];
    let temp = this.state.filteredGames;

    if (temp != null) {
      for (let i = 0; i < 5; i++) { 
        topGames.push(temp[i]);
      }

      this.setState({
        topGames: topGames
      })
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
                    onClick={e => this.handleGenreChange(e)}
                  />
                )}
                <h3 className='border-bottom text-center'>Trie</h3>
                <Row>
                  <Col>
                    <Form.Select 
                      aria-label="Default select example" 
                      name="sort" 
                      onChange={e => this.handleSortAndOrderChange(e)}>
                        <option value='launched_date'>Date de sortie</option>
                        <option value='sold'>Meilleurs ventes</option>
                        <option value='title'>Nom</option>
                        <option value='price'>Prix</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Select 
                      aria-label="Default select example" 
                      name="order" 
                      onChange={e => this.handleSortAndOrderChange(e)}>
                        <option value='desc'>Descendant</option>
                        <option value='asc'>Ascendant</option>
                    </Form.Select>
                  </Col>
                </Row>
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
                    onChange={(e) => this.handleSearchChange(e)}
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
        <FooterComposant topGames={this.state.topGames}/>
      </>
    );
  }
}

export default Home;