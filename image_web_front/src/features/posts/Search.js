import React, { useState } from 'react';
import { postsAction } from './postSlice';
import { useDispatch, useSelector } from 'react-redux'
import { SearchForm } from '../../util/Forms';
import '../../scss/Posts/Search.scss'

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
		console.log(data);
	}

	return (
		<div className="Search-template">
			<input className="input" type="text" name="tag" placeholder="       이미지 태그 검색" onChange={handleChangeSearchForm} value={keyword}></input>
			<button className="btn" onClick={() => {handleSearchClick(searchForm)}}>검색</button>
		</div>
	);
};

export default Search;
