// import React and ReactDom
import React from "react";
import ReactDom from "react-dom";

const getTime = () => {
    return (new Date()).toLocaleTimeString()
}

//create react component
const App = () => {
    return (<div>
        <div>Current Time:</div>
        <h3>{getTime()}</h3>
    </div>)
}

//take the react component and show it on the screen
ReactDom.render(
    <App />, document.querySelector("#root")
)