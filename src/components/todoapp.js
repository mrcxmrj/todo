import React from "react";
import { TodoForm } from "./todoform";
import { TodoList } from "./todolist";
import "./todoapp.css";
import { TodoFilter } from "./todofilter";

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        };
    }

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos],
        });
    };

    removeTodo = (todoId) => {
        let updatedTodos = [...this.state.todos];
        let foundItem = updatedTodos.find((item) => item.id === todoId);
        let index = updatedTodos.indexOf(foundItem);
        updatedTodos.splice(index, 1);
        this.setState({ todos: updatedTodos });
    };

    switchCompletion = (todoId) => {
        let updatedTodos = [...this.state.todos];
        let foundItem = updatedTodos.find((item) => item.id === todoId);
        foundItem.complete = !foundItem.complete;
        this.setState({ todos: updatedTodos });
    };

    removeCompleted = () => {
        let updatedTodos = [...this.state.todos];
        updatedTodos = updatedTodos.filter((todo) => todo.complete === false);
        this.setState({ todos: updatedTodos });
    };

    switchFiltering = (option) => {
        let updatedTodos = [...this.state.todos];
        switch (option) {
            case "all":
                updatedTodos.forEach((todo) => {
                    todo.visible = true;
                });
                break;
            case "active":
                updatedTodos.forEach((todo) => {
                    todo.visible = !todo.complete;
                });
                break;
            case "completed":
                updatedTodos.forEach((todo) => {
                    todo.visible = todo.complete;
                });
                break;
            default:
                console.error("switch option is invalid");
        }

        this.setState({ todos: updatedTodos });
    };

    render() {
        return (
            <div className="container">
                <h1>Todo list</h1>
                <hr />
                <TodoForm onSubmit={this.addTodo} />
                <TodoList
                    todos={this.state.todos}
                    remove={this.removeTodo}
                    switchCompletion={this.switchCompletion}
                />
                <hr />
                <TodoFilter
                    removeCompleted={this.removeCompleted}
                    switchFiltering={this.switchFiltering}
                    todosLength={this.state.todos.length}
                />
            </div>
        );
    }
}
