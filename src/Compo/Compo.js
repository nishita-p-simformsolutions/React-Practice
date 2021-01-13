import React from 'react';
import './Compo.css';

const compo = (props) => {
    return(
        <div className="Compo">
            <p onClick={props.click} >I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default compo; 