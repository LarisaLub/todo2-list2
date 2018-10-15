import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteDescrip } from "../AC";

import descrip from "../reduser/descrip";
import toggleClose from "../toggleClose";

class Datadescrip extends Component {
    deleteDescrip = descrip => {
        this.props.onDeleteDescrip(descrip);
    };

    render() {
        const { descrip } = this.props;
        return (
            <div>
                {descrip.map((item, index) => {
                    return (
                        <p
                            onClick={() => {
                                this.deleteDescrip(item);
                            }}
                            key={index}>
                            {item}
                            <button onClick={this.DescripButton}> d</button>
                        </p>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        descrip: state.descrip.descrip
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteDescrip: descrip => dispatch(deleteDescrip(descrip))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Datadescrip);
