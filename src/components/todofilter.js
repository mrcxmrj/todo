import React from "react";

export class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
        // selectedOption should probably be lifted to todo component, so this component only takes input
        this.state = {
            selectedOption: "all",
        };
    }

    handleOptionChange = (event) => {
        console.log(event);
        this.setState({
            selectedOption: event.target.value,
        });
    };

    render() {
        return (
            <div className="footer">
                number of items left:
                <div className="filter">
                    <input
                        type="radio"
                        name="filter"
                        value="all"
                        id="all"
                        checked={this.state.selectedOption === "all"}
                        onChange={this.handleOptionChange}
                    />
                    <label htmlFor="all">all</label>

                    <input
                        type="radio"
                        name="filter"
                        value="active"
                        id="active"
                        checked={this.state.selectedOption === "active"}
                        onChange={this.handleOptionChange}
                    />
                    <label htmlFor="active">active</label>

                    <input
                        type="radio"
                        name="filter"
                        value="completed"
                        id="completed"
                        checked={this.state.selectedOption === "completed"}
                        onChange={this.handleOptionChange}
                    />
                    <label htmlFor="completed">completed</label>
                </div>
                <button onClick={this.props.removeCompleted}>
                    clear completed
                </button>
            </div>
        );
    }
}
