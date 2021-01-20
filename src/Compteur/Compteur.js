import React, { Component } from 'react'
import './Compteur.css';
import Resultat from '../Composants/Resultat/Resultat.js';
import IncrBtn from '../Composants/IncrBtn/IncrBtn.js';

import {connect} from 'react-redux';

class Compteur extends Component {
    render() {
        return (
            <div className="cont">
            <div className="blocConmpt" style={{backgroundColor:this.props.newColor}}>
                <Resultat valeur={this.props.ctr} />
            </div>
            <div className="contBtn">
                <IncrBtn txt="Incremente" clicked={this.props.increment} />
                <IncrBtn txt="Decremente" clicked={this.props.decrement} />
            </div>
        </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ctr: state.compteur,
        newColor: state.colorClass,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: "INCREMENT"}),
        decrement: () => dispatch({type: "DECREMENT"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compteur);
