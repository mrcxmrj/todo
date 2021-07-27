import React from "react";

export class TodoFilter extends React.Component {
    handleOptionChange = (event) => {
        this.props.switchFiltering(event.target.value);
    };

    render() {
        return (
            <div className="footer">
                <div className="filter">
                    <input
                        type="radio"
                        name="filter"
                        value="all"
                        id="all"
                        onChange={this.handleOptionChange}
                    />
                    <label htmlFor="all">all</label>
                    {" / "}
                    <input
                        type="radio"
                        name="filter"
                        value="active"
                        id="active"
                        onChange={this.handleOptionChange}
                    />
                    <label htmlFor="active">active</label>
                    {" / "}
                    <input
                        type="radio"
                        name="filter"
                        value="completed"
                        id="completed"
                        onChange={this.handleOptionChange}
                    />
                    <label htmlFor="completed">completed</label>
                </div>
                {this.props.todosLength === 0 ? null : (
                    <button onClick={this.props.removeCompleted}>
                        clear completed
                    </button>
                )}
            </div>
        );
    }
}
