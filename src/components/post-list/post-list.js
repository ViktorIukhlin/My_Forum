import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';
import '../post-list/post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, label, important} = item;
        return(
            <li key={id} className='list-group-item'>
                <PostListItem
                 label={label} 
                 important={important}/> 
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
             {elements}
        </ListGroup>
    )
}

export default PostList;