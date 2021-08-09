import React, { useState } from 'react';
import { postsAction } from './postSlice';
import { useDispatch } from 'react-redux'
import { SearchForm } from '../../util/Forms';
import '../../scss/Posts/Search.scss'

const Search = () => {

	const dispatch = useDispatch();
	const [searchForm, setSearchTag] = useState(SearchForm);

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
		<div className="Search-template">
			{/*<input className="input" type="text" name="tag" placeholder="       이미지 태그 검색" onChange={handleChangeSearchForm} value={keyword ? keyword : ""}></input>*/}
			<input className="input" type="text" name="tag" placeholder="       이미지 태그 검색 " onChange={handleChangeSearchForm} value={searchForm.tag}></input>
			<button className="btn" onClick={() => {handleSearchClick(searchForm)}}>검색</button>
			<div className="tag-ex">검색예시 : 레드, 블루, 화이트 ..</div>
		</div>
	);
};

export default Search;
