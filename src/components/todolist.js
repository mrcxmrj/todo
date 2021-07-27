import React from "react";

export class TodoList extends React.Component {
    handleRemove = (event) => {
        this.props.remove(event.currentTarget.value);
    };

    handleCompletion = (event) => {
        this.props.switchCompletion(event.currentTarget.value);
    };

    // check whether any visible todos are completed - used to determine "clear completed" button visibility
    areAnyVisibleTodosCompleted = () => {
        return !this.props.todos.every((todo) => {
            let invisibleOrNotCompleted = true;
            if (todo.visible) {
                invisibleOrNotCompleted = !todo.completed;
            }
            return invisibleOrNotCompleted;
        });
    };

    render() {
        const listTodos = this.props.todos.map((todo) =>
            todo.visible ? (
                <li
                    key={todo.id}
                    className="list-element todo-element vertical-center"
                >
                    <button value={todo.id} onClick={this.handleCompletion}>
                        {todo.completed ? (
                            <i className="far fa-check-square "></i>
                        ) : (
                            <i className="far fa-square "></i>
                        )}
                    </button>
                    <p
                        className={`todo-text${
                            todo.completed ? " todo-completed" : ""
                        }`}
                    >
                        {todo.text}
                    </p>

                    <button
                        value={todo.id}
                        onClick={this.handleRemove}
                        className="icon hide"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </li>
            ) : null
        );

        return (
            <ul>
                {listTodos}

                {this.areAnyVisibleTodosCompleted() ? (
                    <button
                        className="clear-button"
                        onClick={this.props.removeCompleted}
                    >
                        clear completed
                    </button>
                ) : null}
            </ul>
        );
    }
}
