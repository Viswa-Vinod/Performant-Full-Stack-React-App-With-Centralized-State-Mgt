import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from 'components/storeProvider';

class Timestamp extends React.Component {

	

	timeDisplay = timestamp => timestamp.toLocaleString([],{hour:'2-digit', minute:'2-digit'});

	shouldComponentUpdate(nextProps, nextState) {
		const currentTimeDisplay = this.timeDisplay(this.props.timestamp);
		const nextTimeDisplay = this.timeDisplay(nextProps.timestamp);

		return currentTimeDisplay !== nextTimeDisplay
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('Updating timestamp component')
	}
	
	render() {
		return (
			<div>
				{this.timeDisplay(this.props.timestamp)}
			</div>	
		)
	}
}

 function extraProps (store) {
	
	return {
		timestamp: store.getState().timestamp
	}
}

export default storeProvider(extraProps)(Timestamp);