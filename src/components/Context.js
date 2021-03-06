import React,{Component} from 'react'
export const DataContext=React.createContext();
export class DataProvider extends Component{
    
    state={
        products:[
            {
                "product_id": "1",
                "_id":"2",
                "title":"Alorithms",
                "src":"https://goalkicker.com/AlgorithmsBook/AlgorithmsGrow.png",
                "description":"by Leo Tolstoy",
                "content":"The Algorithms Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA. See credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id": "3",
                "title": "Embedded Computing Systems",
                "src":"https://goalkicker.com/AndroidBook/AndroidGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id": "4",
                "title": "Communication Engineering",
                "src":"https://goalkicker.com/Angular2Book/Angular2Grow.png",
                "description":"by Leo Tolstoy",
                "content":"The Algorithms Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA. See credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id":"5",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/BashBook/BashGrow.png",
                "description":"by Leo Tolstoy",
                "content":"The Algorithms Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA. See credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id":"6",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/AngularJSBook/AngularJSGrow.png",
                "description":"by Leo Tolstoy",
                "content":"The Algorithms Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA. See credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id": "7",
                "title": "War and Peace",
                "src":"https://goalkicker.com/CBook/CGrow.png",
                "description":"by Leo Tolstoy",
                "content":"The Algorithms Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA. See credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id":"9",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/CPlusPlusBook/CPlusPlusGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id": "10",
                "title": "Computer Organization",
                "src":"https://goalkicker.com/DotNETFrameworkBook/DotNETFrameworkGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id":"11",
                "title":"Computer Networks",
                "src":"https://goalkicker.com/AlgorithmsBook/AlgorithmsGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id": "12",
                "title": "Embedded Computing Systems",
                "src":"https://goalkicker.com/AndroidBook/AndroidGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id": "13",
                "title": "Communication Engineering",
                "src":"https://goalkicker.com/Angular2Book/Angular2Grow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id":"14",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/BashBook/BashGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id":"15",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/AngularJSBook/AngularJSGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id": "16",
                "title": "War and Peace",
                "src":"https://goalkicker.com/CBook/CGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "product_id": "1",
                "_id":"17",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/CPlusPlusBook/CPlusPlusGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },
        ],
        cart:[],
        total: 0

    }
  
    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
        }
       
    };

    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,removeProduct} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart,removeProduct}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


