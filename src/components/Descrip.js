import React, { Component } from "react";
import { connect } from "react-redux";
import { addDescrip } from "../AC";

class Descrip extends Component {
    state = {
        descrip: ""
    };
    render() {
        return (
            <div>
                <button class="button2" onClick={this.addDescripButton}>
                    description
                </button>
                <br />
                <input
                    type="text"
                    name="descrip"
                    value={this.state.descrip}
                    onChange={this.changeDescrip}
                />
            </div>
        );
    }

    changeDescrip = event => {
        this.setState({
            descrip: event.target.value
        });
    };
    addDescripButton = () => {
        this.props.onAddDescrip(this.state.descrip);
        this.setState({ descrip: "" });
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddDescrip: descrip => dispatch(addDescrip(descrip))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Descrip);
