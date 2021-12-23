import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;
    
    render() {
        const {cart,removeProduct} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Cart is Empty</h2>
        }else{
            return (
                <>
                    <div class="col-left">
                    <div>
                        <h2>BookLand Cart</h2>
                    </div>
                    {
                        
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                   
                    </div>
                </>
                )
            }
        }
}

export default Cart
