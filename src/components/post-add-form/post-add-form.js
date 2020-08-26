import React from 'react';
import '../post-add-form/post-add-form.css';
//import PostList from '../post-list';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас"
                className="from-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Добавить</button>
        </form>
    )
}

export default PostAddForm;