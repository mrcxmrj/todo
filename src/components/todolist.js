import React from "react";

export class TodoList extends React.Component {
    handleRemove = (event) => {
        this.props.remove(event.target.value);
    };

    handleCompletion = (event) => {
        this.props.switchCompletion(event.target.value);
    };

    render() {
        const listTodos = this.props.todos.map((todo) =>
            todo.visible ? (
                <li key={todo.id}>
                    <button value={todo.id} onClick={this.handleCompletion}>
                        {todo.complete ? "X" : "O"}
                    </button>
                    {todo.text}
                    <button value={todo.id} onClick={this.handleRemove}>
                        remove
                    </button>
                </li>
            ) : null
        );

        return <ul>{listTodos}</ul>;
    }
}
