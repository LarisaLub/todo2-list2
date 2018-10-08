import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTitle } from "../AC";

class Data extends Component {
    deleteArticle = title => {
        this.props.onDeleteTitle(title);
    };

    render() {
        const { titles } = this.props;
        return (
            <div>
                {titles.map((title, index) => {
                    return (
                        <p
                            onClick={() => {
                                this.deleteArticle(title);
                            }}
                            key={index}>
                            {title}
                        </p>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        titles: state.titles.titles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteTitle: title => dispatch(deleteTitle(title))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Data);
