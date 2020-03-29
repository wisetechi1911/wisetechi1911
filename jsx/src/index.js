// import React and ReactDom
import React from "react";
import ReactDom from "react-dom";

//create react component
const App = () => {
    return <div>Hello there!</div>
}

//take the react component and show it on the screen
ReactDom.render(
    <App />, document.querySelector("#root")
)