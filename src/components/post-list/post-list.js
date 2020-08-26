import React from 'react';
import PostListItem from '../post-list-item';

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem label="Going to learn" important/>
            <PostListItem label="That is do good"/>
            <PostListItem label="I need a break..."/>
        </ul>
    )
}

export default PostList;