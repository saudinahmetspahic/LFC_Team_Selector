import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

    showNav(e, showIt) {
        let elem = e.target;
        if (showIt) {
            elem.classList.remove("hideNav");
        }
        else{
            elem.classList.add("hideNav");
        }
    }

    render() {
        return (
            <div className="header hideNav" id="header-id" onMouseLeave={(e) => this.showNav(e, false)} onMouseEnter={(e) => this.showNav(e, true)}>
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