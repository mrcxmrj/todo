import React from "react";

export class TodoList extends React.Component {
    handleRemove = (event) => {
        this.props.remove(event.currentTarget.value);
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
                    <div className="vertical-center">
                        <button value={todo.id} onClick={this.handleCompletion}>
                            {todo.complete ? (
                                <i className="far fa-check-square "></i>
                            ) : (
                                <i className="far fa-square "></i>
                            )}
                        </button>
                        <div
                            className={`todo-text${
                                todo.complete ? " todo-complete" : ""
                            }`}
                        >
                            {todo.text}
                        </div>
                    </div>
                    <button
                        value={todo.id}
                        onClick={this.handleRemove}
                        className="icon hide"
                    >
                        <i className="fas fa-times vertical-center"></i>
                    </button>
                </li>
            ) : null
        );

        return <ul>{listTodos}</ul>;
    }
}
