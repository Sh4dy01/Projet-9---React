import React, { Component } from 'react';

class Game extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <>
      {this.props.gameArticles.data && this.props.gameArticles.data.map((gameArticles, i)=><div key={i}>{gameArticles.attributes.title}</div>)}
      </>
      );
    }
  }


export default Game;