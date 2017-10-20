import React from "react";
import ArticleList from './ArticleList';

import { data } from "../testData";



class App extends React.Component {

	//state cannot be undefined on rendering the component. 
	//That will give errors. So set state to initial values of empty objects
	state = this.props.store.getState();
	
	render() {
		return (
			<ArticleList
				articles={this.state.articles}
				store = {this.props.store}
			/>
		);
	}
}

export default App;
