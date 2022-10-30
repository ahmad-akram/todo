import React from "react";
import PropTypes from 'prop-types'
const Header=function(props){
    return(
        <div className="header">
            <h1>Hi! {props.name}</h1>
        </div>
    )
}
Header.prototypes={
    name:PropTypes.string.isRequired
}
export default Header;