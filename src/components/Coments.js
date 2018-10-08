import React, { Component } from "react";
import { connect } from "react-redux";
import { addComents } from "../AC";

class Coments extends Component {
    state = {
        coments: ""
    };

    render() {
        console.log("coments", this.state);
        // const { coments } = this.props;
        return (
            <div>
                <button onClick={this.addComentsButton}> coments </button>
                <br />

                <input
                    type="text"
                    name="coments"
                    value={this.state.coments}
                    onChange={this.changeComents}
                />
            </div>
        );
    }

    changeComents = event => {
        this.setState({
            coments: event.target.value
        });
    };

    addComentsButton = () => {
        this.props.onAddComents(this.state.coments);
        this.setState({ coments: "" });
    };
}
const mapStateToProps = state => {
    return {
        coments: state.coments.coments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddComents: coments => dispatch(addComents(coments))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Coments);
