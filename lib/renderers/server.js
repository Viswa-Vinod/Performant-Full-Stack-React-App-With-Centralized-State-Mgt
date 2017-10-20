import React from 'react';
import axios from 'axios';
import StateApi from 'state-api';
//this lib can render a react applicaiton into a string
import ReactDOMServer from 'react-dom/server';
import App from 'components/App';
import config from 'config'

const serverRender = async () => {

	//axios fetch call - must use full url path for server side api call
	const resp = await axios.get(`http://${config.host}:${config.port}/data`);
	const store = new StateApi(resp.data);
	
	return {
		initialMarkup: ReactDOMServer.renderToString(
		<App store={store} />),
		initialData: resp.data,
	}
}

export default serverRender;
