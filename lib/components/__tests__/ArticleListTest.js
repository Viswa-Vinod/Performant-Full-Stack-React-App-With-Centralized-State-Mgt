import React from 'react';
//get component being tested
import ArticleList from '../ArticleList';

//get the library that creates the component snapshot
//import renderer from 'react-test-renderer'; no longer required since we are now shallow rendering ArticleList
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

import {shallow} from 'enzyme';

//bring in test syntax
describe('ArticleList',()=>{

	//fake the data dependencies for ArticleList
	const testProps = {
		articles: {
			a: {id: 'a'}, 
			b:{id:'b'}
		}

	}

	
	it('renders correctly', ()=>{
		//create the Article list component and pass in the dependencies
		const wrapper  = shallow(<ArticleList {...testProps} />);
		
		//Snapshot testing is required for all components.
		//it provides a validation that the component 
		//is same as the last itme it was rendered.
		//snapshot simply tracks whether a component has changed. If a change is detected and if that change 
		//is a breaking change i.e. prevents rendering of the snapshot then the test fails. If that change is not
		//a breaking change then jest gives you the option to update the snapshot to the new form of the component
		expect(wrapper).toMatchSnapshot();

		//test to confirm the mapping operation in the ArticleList component
		expect(wrapper.find('ArticleContainer').length).toBe(2);
	})
})
