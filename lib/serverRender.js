import React from 'react';

//this lib can render a react applicaiton into a string
import ReactDOMServer from 'react-dom/server';
import App from './components/App';

const serverRender = () => {
	return ReactDOMServer.renderToString(
		<App />
	)
}

export default serverRender;
