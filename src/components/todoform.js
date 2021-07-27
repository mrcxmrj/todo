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
        if (this.state.todoText) {
            this.props.onSubmit({
                id: shortid.generate(),
                text: this.state.todoText,
                completed: false,
                visible: true,
            });
            this.setState({ todoText: "" });
        }
    };

    formatText = (text) => {
        const lineLength = 35;
        let dividedText = [];
        for (
            let charIndex = 0;
            charIndex < text.length;
            charIndex += lineLength
        ) {
            dividedText.push(text.substr(charIndex, lineLength));
        }
        return dividedText.join("<br>");
    };

    render() {
        return (
            <div className="list-element add-element border-light">
                <form onSubmit={this.handleSubmit} className="">
                    <input
                        type="text"
                        name="todoText"
                        value={this.state.todoText}
                        placeholder="what do you need to do?"
                        onChange={this.handleChange}
                        className="text-input"
                        autoComplete="off"
                    />
                    <button type="submit" className="icon vertical-center">
                        <i className="fas fa-plus"></i>
                    </button>
                </form>
            </div>
        );
    }
}
