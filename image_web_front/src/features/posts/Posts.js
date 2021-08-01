import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postsAction } from './postSlice';
import PhotoList from './PhotoList';
import '../../scss/Posts/Post.scss';
//import More from './More';

const Posts = () => {
	const current_page = useSelector((state) => state.posts.current_page);
	const dispatch = useDispatch();
	const pageItemNumber = 9;

	const onSetCurrentPage = ( _page ) => {
		_page++;

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

	return (
		<div className="Post-template">
			<div className="container">
				<PhotoList onSetCurrentPage={onSetCurrentPage}
							current_page={current_page}/>
				{/*<More onSetCurrentPage={onSetCurrentPage}
							current_page={current_page}/>*/}
			</div>
		</div>
	);
};

export default Posts;
