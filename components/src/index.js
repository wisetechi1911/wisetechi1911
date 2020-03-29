import React from 'react';
import faker from 'faker';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return <div className="ui container comments">
        <ApprovalCard > <CommentDetail author="Ravi" time="6:00PM" post="hello this is Ravi" avatar={faker.image.avatar()} />  </ApprovalCard>
        <ApprovalCard > <CommentDetail author="Kumar" time="6:08PM" post="hello this is Kumar" avatar={faker.image.avatar()} /> </ApprovalCard>
        <ApprovalCard > <CommentDetail author="Vykuntham" time="6:17PM" post="hello this is Vykuntham" avatar={faker.image.avatar()} /> </ApprovalCard>
    </div>
}

ReactDOM.render(
    <App />, document.querySelector("#root")
)