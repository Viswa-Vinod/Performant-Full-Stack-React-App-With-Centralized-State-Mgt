import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App.js';
import StateApi from 'state-api';

const store = new StateApi(window.initialData);

ReactDOM.hydrate(
	<App store={store} />, document.getElementById('root')
)
