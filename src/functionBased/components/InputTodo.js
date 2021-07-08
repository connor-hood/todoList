import React, { useState } from 'react';

const InputTodo = props => {
    const [title, setTitle] = useState("")

    const onChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim()) {
            props.addTodoProps(title)
            setTitle("")
        } else {
            alert("Please write item")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                type="text"
                className="input-text"
                placeholder="Add todo..."
                value={title}
                name="title"
                onChange={onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        </div>
    )
}

export default InputTodo;