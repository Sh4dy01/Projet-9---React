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
      <>
        <Menu gameGenres={this.props.gameGenres}></Menu>
        <Row>
          <Col xs={2}>
            <div>
              <h3 className='border-bottom text-end'>Filtres</h3>
              <Form>
                {this.props.gameGenres && this.props.gameGenres.map((gameGenre, i)=>
                  <div className="mb-1">
                    <Form.Check 
                      type='checkbox'
                      key={i}
                      label={gameGenre.attributes.name}
                    />
                  </div>
                )}
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" className='mx-auto'>Appliquer les filtres</Button>
                </div>
             </Form>
            </div>
          </Col>
          <Col xs={10}>
              <Row>
                <Col className="shadow p-3 bg-body">
                  <Row>
                    {this.props.gameArticles.data && this.props.gameArticles.data.map((gameArticle, i)=>
                      <Col xs={4} key={i}><GameArticle gamePlatforms={this.props.gamePlatforms}  gameArticle={gameArticle}/></Col>
                    )}
                  </Row>
                </Col>
              </Row>
          </Col>
        </Row>
        <FooterComposant/>
      </>
    );
  }
}

export default Home;