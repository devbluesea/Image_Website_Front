import React, { useState } from 'react';
import { postsAction } from './postSlice';
import { useDispatch, useSelector } from 'react-redux'
import { SearchForm } from '../../util/Forms';

const Search = () => {

	const dispatch = useDispatch();
	const [searchForm, setSearchTag] = useState(SearchForm);
	const { keyword } = useSelector( state => state.posts )

	const handleChangeSearchForm = (e) => {
		const {value, name} = e.target;
		setSearchTag({
			...searchForm,
			[name]: value
		});
	};

	const handleSearchClick = ( data ) => {
		dispatch(postsAction.setKeyword(data));
	}

	return (
		<div>
			<input type="text" name="tag" placeholder="검색어를 입력하세요" onChange={handleChangeSearchForm} value={keyword}></input>
			<button onClick={() => {handleSearchClick(searchForm)}}>검색</button>
		</div>
	);
};

export default Search;
