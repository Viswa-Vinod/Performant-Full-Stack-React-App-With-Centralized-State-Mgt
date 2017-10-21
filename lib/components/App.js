import React from "react";
import PropTypes from 'prop-types';

import SearchBar from 'components/SearchBar'
import ArticleList from 'components/ArticleList';
import Timestamp from 'components/Timestamp';
import pickBy from 'lodash.pickby';

import { data } from "../testData";




class App extends React.Component {

	constructor(props) {
		super(props);
		
		this.onStoreChange = this.onStoreChange.bind(this);
	}
	static childContextTypes = {
		store: PropTypes.object
	}

	getChildContext() {
		return {
			store:this.props.store
		}
	}

	
	state = this.props.store.getState();
	
	onStoreChange() {
		
		this.setState(this.props.store.getState())
	}
	componentDidMount() {
		this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
		this.props.store.startClock();
	}

	componentWillUnmount() {
		this.props.store.unsubscribe(this.subscriptionId);
	}

	render() {
		let {articles, searchTerm} = this.state;
		const searchRE = new RegExp(searchTerm, 'i');
		if (searchTerm) {
			//use pickBy from lodash lib to search an object
			articles = pickBy(articles, (value)=>{
				return value.title.match(searchRE)
				|| value.body.match(searchRE)
			})

		}
		return (
			<div>
				<Timestamp />
				<SearchBar />
				<ArticleList
					articles={articles}
				/>
			</div>
		);
	}
}

export default App;
