import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteDescrip } from "../AC";

import descrip from "../reduser/descrip";
import toggleClose from "../toggleClose";

class Datadescrip extends Component {
    deleteDescrip = descrip => {
        console.log(descrip);
        this.props.onDeleteDescrip(descrip);
    };

    render() {
        console.log(this.props.onDeleteDescrip);
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
                            <button onClick={this.DescripButton}> delete</button>
                        </p>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    //console.log("state");
    //console.log(state);
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
