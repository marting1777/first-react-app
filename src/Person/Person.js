import React from 'react';
import './Person.css';

const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click} style={{'padding': '10px'}}>Mi nombre es {props.name} y tengo {props.age} años.</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
	);
}

export default person;