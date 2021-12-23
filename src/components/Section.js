import React, { Component } from 'react'
import './css/Section.css'
import books from './section/Childrensbooks'
import Cart from './section/Cart'
import {Route} from "react-router-dom"
import Details from './section/Details'

export class section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={books}  exact/>
                <Route path="/cart" component={Cart}  exact/>
                <Route path="/product/:id" component={Details} exact />
            </section>
        )
    }
}

export default section
