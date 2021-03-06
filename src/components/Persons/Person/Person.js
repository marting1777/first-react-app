import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
	constructor(props) {
		super(props);
		console.log('[Person.js] Inside Constructor', props);
	}

	componentWillMount () {
		console.log('[Person.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Persons.js] Inside componentDidMount()');
		if(this.props.position === 0) {
			this.inputElement.focus();
		}
    }

	render () {
		return (
			<WithClass classes={classes.Person}>
				<p onClick={this.props.click} style={{'padding': '10px'}}>Mi nombre es {this.props.name} y tengo {this.props.age} años.</p>
				<p>{this.props.children}</p>
				<input
					ref={(inp) => {this.inputElement = inp}} 
					type="text" 
					onChange={this.props.changed} 
					value={this.props.name}/>
			</WithClass>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
}

export default Person;