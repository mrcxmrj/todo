import React from "react";
import { TodoForm } from "./todoform";
import { TodoList } from "./todolist";
import "./todoapp.css";
import { TodoFilter } from "./todofilter";

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.getLocalStorage(),
            currentFilter: "all",
        };
    }

    // adds new todo and updates visible list based on the current filter
    addTodo = (todo) => {
        this.setState(
            {
                todos: [todo, ...this.state.todos],
            },
            () => this.switchFiltering(this.state.currentFilter)
        );
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
        foundItem.completed = !foundItem.completed;
        this.setState({ todos: updatedTodos });
    };

    removeCompleted = () => {
        let updatedTodos = [...this.state.todos];
        updatedTodos = updatedTodos.filter((todo) => todo.completed === false);
        this.setState({ todos: updatedTodos });
    };

    // switches filtering to provided option
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
                    todo.visible = !todo.completed;
                });
                break;
            case "completed":
                updatedTodos.forEach((todo) => {
                    todo.visible = todo.completed;
                });
                break;
            default:
                console.error("switch option is invalid");
        }

        this.setState({ todos: updatedTodos, currentFilter: option });
    };

    getLocalStorage() {
        console.log("getting todos from localstorage");
        let storedTodos = window.localStorage.getItem("todos");
        console.log(storedTodos);
        return storedTodos ? JSON.parse(storedTodos) : [];
    }

    updateLocalStorage() {
        console.log("updating localstorage");
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }

    componentDidUpdate() {
        this.updateLocalStorage();
    }

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
                    removeCompleted={this.removeCompleted}
                />
                <hr />
                <TodoFilter switchFiltering={this.switchFiltering} />
            </div>
        );
    }
}
