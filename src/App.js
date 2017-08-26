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
    currentlyReading: undefined,
    read: undefined,
    wantToRead: undefined 
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.books = data;
      this.filterBooks(data);
    });
  }

  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(
      data=> {
        this.books.map(stateBook => {
          if (stateBook.id === book.id) {
            stateBook.shelf = shelf;
          }
        });
        this.filterBooks(this.books);
      });
  }

  filterBooks(books) {

    this.currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    this.read = books.filter((book) => book.shelf === 'read');
    this.wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    this.setState(
      {
        currentlyReading: this.currentlyReading,
        read: this.read,
        wantToRead: this.wantToRead
      } 
    )
  }
  
  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBook} />
        <Route exact
          path="/"
          render={() => <BookScreen
            currentlyReading={this.state.currentlyReading}
            read={this.state.read}
            wantToRead={this.state.wantToRead}
            changeBookShelf={this.changeBookShelf}
          />} />
      </div>
    )
  }
}

export default BooksApp
