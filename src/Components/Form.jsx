import React from "react";
import { useState } from 'react';
function Form(props) {

    return <div className="form">
        <form onSubmit={props.submitHandle}>
            <input type="text" placeholder="Grocery" onChange={props.inputHandle} value={props.todo} />
            <button>Add Task</button>
        </form>
    </div>
}

export default Form;