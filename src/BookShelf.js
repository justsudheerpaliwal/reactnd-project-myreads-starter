import React from 'react'
import BookDetail from './BookDetail'
import PropTypes from 'prop-types';


class BookShelf extends React.Component {
    static propTypes = {
        books: PropTypes.array,
        shelfName: PropTypes.string,
        changeBookShelf: PropTypes.func
    }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books && (this.props.books.map((book) => {
                                return <li key={book.id}>
                                    <BookDetail
                                        key={book.id}
                                        book={book}
                                        changeBookShelf={this.props.changeBookShelf} />
                                </li>
                            }))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf