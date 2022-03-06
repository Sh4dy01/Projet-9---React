import React, { Component } from 'react';
import Menu from '../components/Menu';
import GameArticle from '../components/GameArticle';
import {Container, Row, Button, Col, Form} from 'react-bootstrap';
import FooterComposant from '../components/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Menu gameGenres={this.props.gameGenres}></Menu>
        <Row>
          <Col xs={2}>
            <div>
              <h3 className='border-bottom text-end'>Filtres</h3>
              <Form>
                {this.props.gameGenres && this.props.gameGenres.map((gameGenre, i)=>
                  <Form.Check 
                    type='checkbox'
                    key={i}
                    label={gameGenre.attributes.name}
                  />
                )}
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" className='mx-auto'>Appliquer les filtres</Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col xs={10}>
            <div className="shadow p-3 bg-body me-5">
              <Row>
                {this.props.gameArticles.data && this.props.gameArticles.data.map((gameArticle, i)=>
                  <Col xs={12} md={6} xl={4} xxl={3} key={i}>
                    <GameArticle gamePlatforms={this.props.gamePlatforms}  gameArticle={gameArticle} updateTotalPrice={this.props.updateTotalPrice}/>
                  </Col>
                )}
              </Row>
            </div>
          </Col>
        </Row>
        <FooterComposant/>
      </div>
    );
  }
}

export default Home;