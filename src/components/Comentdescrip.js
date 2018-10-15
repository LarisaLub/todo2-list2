import React, { Component } from "react";
import { connect } from "react-redux";
import { addDescrip } from "../AC";
import { addComentdescrip } from "../AC";
import { deleteComents } from "../AC";
import coments from "../reduser/coments";
//import toggleClose from "../toggleClose";

class Comentdescrip extends Component {
    deleteComents = coments => {
        this.props.onDeleteComents(coments);
    };

    render() {
        const { coments } = this.props;
        return (
            <div>
                {coments.map((item, index) => {
                    return (
                        <p
                            onClick={() => {
                                this.deleteComents(item);
                            }}
                            key={index}>
                            {item}
                            <button onClick={this.ComentsButton}> delete</button>
                        </p>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        coments: state.coments.coments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteComents: coments => dispatch(deleteComents(coments))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comentdescrip);
