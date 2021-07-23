import React from "react";

export class TodoList extends React.Component {
    handleRemove = (event) => {
        this.props.remove(event.target.value);
    };

    handleCompletion = (event) => {
        this.props.switchCompletion(event.currentTarget.value);
    };

    render() {
        const listTodos = this.props.todos.map((todo) =>
            todo.visible ? (
                <li
                    key={todo.id}
                    className="list-element todo-element two-column"
                >
                    <div className="todo-content">
                        <button value={todo.id} onClick={this.handleCompletion}>
                            {todo.complete ? (
                                <i className="far fa-check-square"></i>
                            ) : (
                                <i className="far fa-square"></i>
                            )}
                        </button>
                        {todo.text}
                    </div>
                    <button
                        value={todo.id}
                        onClick={this.handleRemove}
                        className="right-button"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </li>
            ) : null
        );

        return <ul>{listTodos}</ul>;
    }
}
