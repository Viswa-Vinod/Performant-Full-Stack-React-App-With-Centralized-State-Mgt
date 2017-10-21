import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from 'components/storeProvider';

class SearchBar extends React.Component {
	constructor() {
		super();
		this.handleSearch = this.handleSearch.bind(this);
	}

	state = {
		searchTerm:''
	}

	doSearch = debounce(()=>{
		this.props.store.setSearchTerm(this.state.searchTerm)
	}, 300)

	handleSearch(event) {
		this.setState({searchTerm: event.target.value}, ()=>{
			this.doSearch()
		});
		//console.log(this.state.searchTerm)
	}
	render() {
		return (
			<input 
				
				type="search"
				placeholder="Enter search term"
				value={this.state.searchTerm}
				onChange = {this.handleSearch}
			/>
		)
	}
}

export default storeProvider()(SearchBar);