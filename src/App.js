import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './store';


// const store = createStore((() => [], {}, applyMiddleware))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h1>A Redux Crush</h1>
                    <hr />
                    <PostForm />
                    <hr />
                    <Posts />
                </div>
            </Provider>
        );
    }
}




export default App;