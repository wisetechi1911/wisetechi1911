import React from 'react';
import faker from 'faker';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'


const App = () => {
    return <div className="ui container comments">
        <CommentDetail author="Ravi" time="6:00PM" post="hello this is Ravi" avatar={faker.image.avatar()}/>
        <CommentDetail author="Kumar" time="6:08PM" post="hello this is Kumar" avatar={faker.image.avatar()}/>
        <CommentDetail author="Vykuntham" time="6:17PM" post="hello this is Vykuntham" avatar={faker.image.avatar()}/>
    </div>
}

ReactDOM.render(
    <App />, document.querySelector("#root")
)