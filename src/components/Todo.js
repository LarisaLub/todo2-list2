import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../AC";

class Todo extends Component {
    state = {
        title: ""
    };

    render() {
        return (
            <div>
                <button onClick={this.addTitle}> add </button>
                <br />
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.changeTitle}
                />
            </div>
        );
    }

    changeTitle = event => {
        this.setState({
            title: event.target.value
        });
    };
    addTitle = () => {
        this.props.onAddTodo(this.state.title);
        this.setState({ title: "" });
    };
}

const mapStateToProps = state => {
    return {
        state: state,
        title: state.title
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: title => dispatch(addTodo(title))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);
