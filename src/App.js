import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import BookScreen from './BookScreen'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.changeBookShelf = this.changeBookShelf.bind(this);
  }

  state = {
    books: undefined
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }

  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(
      data => {
        this.setUpdatedShelfState(book, shelf);
      });
  }

  setUpdatedShelfState(book, shelf) {
    this.setState((prevState) => {
      books: prevState.books.map(stateBook => {
        if (stateBook.id === book.id) {
          stateBook.shelf = shelf;
        }
      });
    });
  }

  filterBooks(books) {
    this.currentlyReading = books && books.filter((book) => book.shelf === 'currentlyReading');
    this.read = books && books.filter((book) => book.shelf === 'read');
    this.wantToRead = books && books.filter((book) => book.shelf === 'wantToRead');
  }

  render() {
    this.filterBooks(this.state.books);
    return (
      <div className="app">
        <Route path="/search" component={SearchBook} />
        <Route exact
          path="/"
          render={() => <BookScreen
            currentlyReading={this.currentlyReading}
            read={this.read}
            wantToRead={this.wantToRead}
            changeBookShelf={this.changeBookShelf}
          />} />
      </div>
    )
  }
}

export default BooksApp
