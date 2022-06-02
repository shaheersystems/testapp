import React from "react";
function Todo(props) {

    return (<div className="todo">
        <div className="text">
            <input type="checkbox" onChange={props.checkHandle} />
            <span className={props.class}>{props.todo}</span>
        </div>
        <div className="icons">
            <span className="material-icons">edit</span>
            <span className="material-icons">delete</span>
        </div>
    </div>);
}
export default Todo;
