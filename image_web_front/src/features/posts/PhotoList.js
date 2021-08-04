import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoItem from './PhotoItem';
import Modal from './Modal';
import Search from './Search';
import '../../scss/Posts/PhotoList.scss';
import { postsAction } from './postSlice';
import { commentsAction } from '../comments/commentsSlice';
import More from './More';
import { getCookie } from '../../util/CookieUtil';

const PhotoList = ( {onSetCurrentPage, current_page }) => {
	const [isVisible, setIsVisible] = useState(false);
	//const [totalCount, setTotalCount] = useState(null);
	const dispatch = useDispatch();
	const getPostsList = useSelector((state) => state.posts.List);
	const pageItemNumber = 9;

	useEffect( () => {
		dispatch(postsAction.getPosts({
			_page : 1,
			_limit : pageItemNumber,
			_order : 'desc',
			_sort : 'id'
		}));
		//getTotal();
	}, [dispatch])

	//const getTotal = async () => {
	//	const fetchData = await axios.get(`http://localhost:8000/posts/?_order=desc&_sort=id`);
	//	try {
	//		setTotalCount(fetchData.data[0].id)
	//	} catch (err) {
	//		console.log(err);
	//	}
	//}

	const onSetPostIndex = ( id ) => {
		dispatch( postsAction.getPost(id));
		dispatch( commentsAction.getComments(id))
		setIsVisible(true);
	}

	const onPutPost = (data, isLike) => {
		let requestData = { ...data };
		requestData.isLike = isLike;
		dispatch(postsAction.putPost(requestData));
	}

	//const onSetList = () =>{
	//	console.log(getCookie("loginInfo"));
  //}

	return (
		<div className="PhotoList-template">
			<div className="wrapper">
				{/*<div onClick={() => onSetList()}>data</div>*/}
				<div className="search">
					<Search/>
				</div>
				<div className="frame">{ getPostsList?.map((post) => {
					return <PhotoItem key={post.id} post = {post} onSetPostIndex={ () => {onSetPostIndex(post.id) }}/>}) }
				</div>
				<div className="modal">
					{getPostsList?.length ?	<Modal onPutPost={onPutPost} isVisible={isVisible} closeModal={setIsVisible} /> : '' }
				</div>
				<div>
					<More onSetCurrentPage={onSetCurrentPage}
								current_page={current_page}/>
					</div>
			</div>
		</div>
	);
};

export default PhotoList;
