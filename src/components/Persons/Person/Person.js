import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
	render () {
		return (
			<div className={classes.Person}>
				<p onClick={this.props.click} style={{'padding': '10px'}}>Mi nombre es {this.props.name} y tengo {this.props.age} años.</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name}/>
			</div>
		);
	}
}

export default Person;