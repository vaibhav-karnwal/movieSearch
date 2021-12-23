import React, { Component } from 'react'
import CartIcon from './svg/shopping-cart.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import './css/Search.css'
import {DataContext} from './Context'



export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header>
                <div className="navbar">
                    <ul className={toggle ? "toggle" : ""}>
        
                        <li className="search">
                            <form class="#">
                                <input class="search-bar" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="search-button" type="submit">Search</button>
                            </form>
                        </li>                    
                        
                        <li className="nav-cart">
                            <span>{cart.length}</span>
                            <Link to="/cart">
                                <img src={CartIcon} alt="" width="20"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header
