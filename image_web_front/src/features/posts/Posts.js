import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postsAction } from './postSlice';
import PhotoList from './PhotoList';

const Posts = () => {
	const { data, error, loading } = useSelector( (state) => state.posts.posts)
	const dispatch = useDispatch();

	useEffect( () => {
		dispatch(postsAction.getPosts());
	}, [dispatch])

	if (loading) return <div>Loading..</div>
	if (error) return <div>Error..</div>
	if (!data) return null

	return (
		<div>
			<div className="PhotoContainer">
				<PhotoList data={data}/>
			</div>
		</div>
	);
};

export default Posts;
