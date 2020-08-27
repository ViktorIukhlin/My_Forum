import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`


const App = () => {

    const data = [
        {label: "Going to learn Programming", important: true, id: 1},
        {label:"That is do good", important: false, id: 2},
        {label: "I need a break...", important: false, id: 3}
    ];

    return(
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;