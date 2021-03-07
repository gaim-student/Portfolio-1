import React from "react"


export default class MenuItem extends React.Component {
    render() {
        const itemstyles = [
            {
                padding: "10px",
                fontFamily: "Bebas Neue",
                fontSize: "10px"
            }
        ]
        
        return (
            <div class="menu-item" id={this.props.itemId}>
            
                <br></br>

                <span>${this.props.itemPrice}</span><br></br>
                <h2>{this.props.itemName}</h2>
                <p>{this.props.itemDescription}</p>
                
                <button style={itemstyles[0]}>Add to cart</button><br></br>

            </div>

        );
    }
}