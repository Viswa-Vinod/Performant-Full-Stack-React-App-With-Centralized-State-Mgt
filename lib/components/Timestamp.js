import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from 'components/storeProvider';

class Timestamp extends React.Component {

	static timestamp = timestamp => timestamp.toLocaleString([],{hour:'2-digit', minute:'2-digit'});

	
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