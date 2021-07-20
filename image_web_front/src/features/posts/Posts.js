import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postsAction } from './postSlice';
import PhotoList from './PhotoList';
import Pagination from './Pagination';
import axios from 'axios';

const Posts = () => {
	const [totalCount, setTotalCount] = useState(null);
	const { data, error, loading } = useSelector( (state) => state.posts.posts)
	const current_page = useSelector((state) => state.posts.current_page);
	const dispatch = useDispatch();
	const pageItemNumber = 9;

	useEffect( () => {
		dispatch(postsAction.getPosts({
			_page : 1,
			_limit : pageItemNumber,
			_order : 'desc',
			_sort : 'id'
		}));
		getTotal();
	}, [dispatch])

	const getTotal = async () => {
		const fetchData = await axios.get(`http://localhost:8000/posts/?_order=desc&_sort=id`);
		try {
			setTotalCount(fetchData.data[0].id)
		} catch (err) {
			console.log(err);
		}
	}

	const onSetCurrentPage = ( _page ) => {
		dispatch(
			postsAction.getPosts({
				_page ,
				_limit : pageItemNumber,
				_order : 'desc',
				_sort : 'id'
			})
		);
		dispatch(postsAction.setCurrentPage( _page ));
	}

	if (loading) return <div>Loading..</div>
	if (error) return <div>Error..</div>
	if (!data) return null

	return (
		<div>
			<div className="PhotoContainer">
				<PhotoList data={data}/>
				<Pagination total_count={totalCount}
										current_page= {current_page}
										onSetCurrentPage={onSetCurrentPage}
										pageItemNumber = {pageItemNumber}/>
			</div>
		</div>
	);
};

export default Posts;
