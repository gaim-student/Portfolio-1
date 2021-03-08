import React from "react"
import Cart from "../Menu/itemcart.js"



export default class MenuItem extends React.Component {
    render() {
        const itemstyles = [
            {
                padding: "10px",
                fontFamily: "Bebas Neue",
                fontSize: "10px"
            },
            {
                padding: "10px",
                border: "solid 10px cream",
            },
        ]
        function handleClick(){
            alert("You added an item to your cart!");
            document.getElementById("shoppingcart").style.display = "block";
            document.getElementById("happy").style.display = "block";

        }
        function handleClick2(){
            document.getElementById("shoppingcart").style.display = "none";

        }
        
        return (
            <div class="menu-item" id={this.props.itemId}>
                <div style={{ display: "none"}} id="shoppingcart">
                    <Cart></Cart>
                    <p style={{ display: "none"}} id="happy">You added something to your cart.</p>
                    <button id="cartmenu" onClick={handleClick2}>Close</button>
                    <div id="info"></div>
                </div>
                <br></br>

                <span>${this.props.itemPrice}</span><br></br>
                <h2>{this.props.itemName}</h2>
                <p>{this.props.itemDescription}</p>
                
                <button onClick={handleClick} style={itemstyles[0]}>Add to cart</button><br></br>
                <p style={itemstyles[1]}>{this.props.itemPicture}</p>


            </div>

        );
    }
}