import React from 'react'
import PropTypes from 'prop-types';

class BookDetail extends React.Component {
    static propTypes = {
        book: PropTypes.object,
        changeBookShelf: PropTypes.func
    }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.props.book.shelf} onChange={(event) => this.props.changeBookShelf(this.props.book, event.target.value)}>
                            <option value="" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                {
                    this.props.book.authors && this.props.book.authors.map((author, index) => {
                        return <div key={index} className="book-authors">{author}</div>
                    })
                }
            </div>
        );
    }
}

export default BookDetail