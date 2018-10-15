import React, { Component } from "react";
import { connect } from "react-redux";
import { Book } from "../AC";
import TitleBook from "./TitleBook";

class Books extends Component {
    componentDidMount() {
        this.props.onBook();
    }

    render() {
        const { book } = this.props;
        console.log(book);
        if (!book) return null;

        return (
            <div>
                {book.map(item => (
                    <TitleBook key={item.id} book={item} />

                    // <p key={item.id}>{item.volumeInfo.title}</p>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        book: state.book.book
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onBook: () => {
            dispatch(Book());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Books);
