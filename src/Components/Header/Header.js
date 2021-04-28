import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="lfc-logo" src="https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/liverpool_fc_colors.jpeg" alt="" />
                <h3 className="title">Team Kopish</h3>
                <ul className="nav">
                    <li>Home</li>
                    <li>Teams</li>
                    <li>Games</li>
                </ul>
            </div>
        );
    }
}

export default Header;