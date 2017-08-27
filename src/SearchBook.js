import React from 'react'
import {Link} from 'react-router-dom'
import BookDetail from './BookDetail'
import * as BooksAPI from './BooksAPI'

class SearchBook extends React.Component {

    constructor(props) {
        super(props)
        this.fetchQueryResult = this.fetchQueryResult.bind(this);
    }
    state = {
        books: [],
        query: ''
    }

    fetchQueryResult(event) {
        this.setState({query:event.target.value}, this.fetchBooks(this.state.query));
    }

    fetchBooks(query) {
        query && BooksAPI.search(query, 20).then(
            (books) => {
                this.populateBooksSelf(books);
                this.setState({books});
            }
        ).catch(
            (error) => this.setState({books: []})
        );
    }
    
    populateBooksSelf(books) {
        books.map((book) => {
            let matchedBook = this.props.selvedBooks.filter(
                (selvedBook) => selvedBook.id === book.id
            )[0];
            book.shelf = matchedBook ? matchedBook.shelf : 'none';
        });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={this.fetchQueryResult} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books.map((book) => {
                                return <li key={book.id}>
                                    <BookDetail key= {book.id} book={book} changeBookShelf={this.props.changeBookShelf}/>
                                </li>
                            })
                        }
                    </ol>
                </div>
            </div>
        );
    }   
}
export default SearchBook