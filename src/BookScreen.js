import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types';


class BookScreen extends React.Component {
    static propTypes = {
        currentlyReading : PropTypes.array,
        wantToRead : PropTypes.array,
        read : PropTypes.array,
        changeBookShelf: PropTypes.func
    }
    render() {
        
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf 
                        changeBookShelf = {this.props.changeBookShelf}
                        books = {this.props.currentlyReading}
                        shelfName = 'Currently Reading'    
                    />
                    <BookShelf 
                        changeBookShelf = {this.props.changeBookShelf}
                        books = {this.props.wantToRead}
                        shelfName = 'Want to Read'    
                    />
                    <BookShelf 
                        changeBookShelf = {this.props.changeBookShelf}
                        books = {this.props.read}
                        shelfName = 'Read'    
                    />
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BookScreen