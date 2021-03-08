import React from 'react';
import ReactDOM from 'react-dom';
import shrimp from "../images/shrimp.jpeg"

class MenuPictures extends React.Component {
 render (){
     return <img style={{ height: 250 }} src={shrimp} />
 }
}
export default MenuPictures;