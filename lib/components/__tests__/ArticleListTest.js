import React from 'react';
//get component being tested
import ArticleList from '../ArticleList';
//get the library that creates the component snapshot
import renderer from 'react-test-renderer';

//bring in test syntax
describe('ArticleList',()=>{

	//fake the data dependencies for ArticleList
	const testProps = {
		articles: {
			a: {id: 'a'}, 
			b:{id:'b'}
		},
		store: {
			//get a mockup function that returns a fake object
			lookupAuthor: jest.fn(()=>({}))
		}

	}
	it('renders correctly', ()=>{
		//create the Article list component and pass in the dependencies
		const tree  = renderer.create(<ArticleList {...testProps} />).toJSON();
		
		//Snapshot testing is required for all components.
		//it provides a validation that the component 
		//is same as the last itme it was rendered.
		//snapshot simply tracks whether a component has changed. If a change is detected and if that change 
		//is a breaking change i.e. prevents rendering of the snapshot then the test fails. If that change is not
		//a breaking change then jest gives you the option to update the snapshot to the new form of the component
		expect(tree).toMatchSnapshot();

		//test to confirm the mapping operation in the ArticleList component
		expect(tree.children.length).toBe(2);
	})
})
