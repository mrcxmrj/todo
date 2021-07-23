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
            <div className="list-element border-light">
                <form onSubmit={this.handleSubmit} className="two-column">
                    <input
                        type="text"
                        name="todoText"
                        value={this.state.todoText}
                        placeholder="what do you need to do?"
                        onChange={this.handleChange}
                        className="text-input"
                        autoComplete="off"
                    />
                    <button type="submit" className="right-button">
                        <i className="fas fa-plus"></i>
                    </button>
                </form>
            </div>
        );
    }
}
