import React from "react";
import shortid from "shortid";

export class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: "",
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ todoText: "" });
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.todoText,
            complete: false,
            visible: true,
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="todoText"
                    value={this.state.todoText}
                    placeholder="what do you need to do?"
                    onChange={this.handleChange}
                />
                <button type="submit">add</button>
            </form>
        );
    }
}
