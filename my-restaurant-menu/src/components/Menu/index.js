import React from "react"
import MenuItem from "../MenuItem"
import Cart from "../Menu/itemcart"


export default class Menu extends React.Component {
    render() {
        const styles = [
            {
                color: "white",
                backgroundColor: "rgb(187,221,255)",
                padding: "10px",
                fontFamily: "Bebas Neue",
                fontSize: "50px"
            },
            {
                padding: "10px",
                fontFamily: "Bebas Neue",
                fontSize: "25px",
                borderBottom: "2px solid rgb(187,221,255)"
            },
            {
                padding: "10px",
                fontFamily: "Bebas Neue",
                fontSize: "10px",
                borderBottom: "2px solid black"
            },

        ]
        return (
            
            <div>
                <h1 style={styles[0]}>{this.props.menuName} Menu</h1>
                <div style={styles[1]}>
                    <MenuItem {...this.props.menuItems[0]}></MenuItem>
                </div>
                <div style={styles[1]}>
                    <MenuItem {...this.props.menuItems[1]}></MenuItem>
                </div>
                <div style={styles[1]}>
                    <MenuItem {...this.props.menuItems[2]}></MenuItem>
                </div>
                <div style={styles[1]}>
                    <MenuItem {...this.props.menuItems[3]}></MenuItem>
                    
                </div>
            </div>

            
        )
    }
}
