import React, { Component } from 'react';
// import '../App.css';
class TeamPick extends Component {
  render() {
    let myTeamList = this.props.myTeamHeroes;
    let opponentTeamList = this.props.opponentTeamHeroes;
    let myTeamnames = myTeamList.map( (name, index) => {
        return (
                <img key={index} className="img-responsive" alt="" src={require(`../images/heros/${name}`)} />
        )
    } );
    let opponentTeamNames = opponentTeamList.map( (name, index) => {
        return (
                <img key={index} className="img-responsive" alt="" src={require(`../images/heros/${name}`)} />
        )
    } );


    return (
    <div className="TeamPick">

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h4> My Team picks:</h4>
            { myTeamnames }
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h4> Opponent Team picks:</h4>
            { opponentTeamNames }
        </div>
    
    </div>
    );
  }
}

export default TeamPick;