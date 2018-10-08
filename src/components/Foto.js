import React, { Component } from "react";
import { connect } from "react-redux";
import { addFoto } from "../AC";

class Foto extends Component {
    state = {
        foto: ""
    };

    render() {
        console.log(addFoto);
        return (
            <div>
                <button onClick={this.addFotoButton}> foto </button>
                {this.props.isFoto ? <img id="image" src="l.jpg" /> : null}
            </div>
        );
    }

    changeFoto = event => {
        this.setState({
            foto: event.target.value
        });
    };

    addFotoButton = () => {
        this.props.onAddFoto(this.state.foto);
        console.log("foto");
        this.setState({ foto: "" });
    };
}

const mapStateToProps = state => {
    return {
        state: state,
        isFoto: state.foto
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddFoto: foto => dispatch(addFoto(foto))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Foto);
