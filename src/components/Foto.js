import React, { Component } from "react";
import { connect } from "react-redux";
import { addFoto } from "../AC";

class Foto extends Component {
    state = {
        foto: ""
    };

    render() {
        console.log("for gift");
        return (
            <div>
                <button onClick={this.addFotoButton}> foto </button>
                {this.props.isFoto ? (
                    <img id="image" src="http://kharchuk.ru/JavaScript.pdf" />
                ) : null}
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

class Books extends Component {
    componentDidMount() {
        this.props.onLoadAllArticles();
    }
}
