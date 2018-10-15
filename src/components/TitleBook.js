import React, { Component } from "react";

class TitleBook extends Component {
    state = {};
    render() {
        const { book } = this.props;
        return (
            <div>
                <p> {book.volumeInfo.title} </p>
                <p> {book.volumeInfo.publishedDate} </p>
                <p> {book.volumeInfo.subtitle} </p>
            </div>
        );
    }
}

export default TitleBook;
