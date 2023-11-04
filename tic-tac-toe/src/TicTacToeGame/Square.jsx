import React from "react";
import "./square.css";
const Square = (props) => {
    return(
        <div  className="square"
        onClick={props.onClick}>
            <h4 className="value">{props.value}</h4>
        </div>
    );
};
export default Square;