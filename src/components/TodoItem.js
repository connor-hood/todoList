import React, {Component} from 'react';
import styles from "../TodoItem.module.css"

class TodoItem extends Component {
    render() {
        return <li>
            <input type="checkbox"/> {this.props.todo.title}</li>
    }
}

export default TodoItem;