import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from 'components/storeProvider';

class Timestamp extends React.Component {

	

	static timestamp = timestamp => timestamp.toLocaleString([],{hour:'2-digit', minute:'2-digit'});

	// shouldComponentUpdate(nextProps, nextState) {
	// 	const currentTimeDisplay = this.timestampDisplay(this.props.timestamp);
	// 	const nextTimeDisplay = this.timestampDisplay(nextProps.timestamp);

	// 	return currentTimeDisplay !== nextTimeDisplay
	// }

	componentWillUpdate(nextProps, nextState) {
		console.log('Updating timestamp component')
	}
	
	render() {
		return (
			<div>
				{this.props.timestampDisplay}
			</div>	
		)
	}
}

 function extraProps (store) {
	
	return {
		timestampDisplay: Timestamp.timestamp(store.getState().timestamp)
	}
}

export default storeProvider(extraProps)(Timestamp);