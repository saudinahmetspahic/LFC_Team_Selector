import React, { Component } from 'react';
import './Pitch.css'

class Pitch extends Component {
    constructor (props){
        super(props);
    }
    render() {
        return (
            <div className="pitch">
                <div className="goal"></div>
                <div className="pitch-center"></div>
                <div className="goal"></div>
                <div className="inside">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Pitch;