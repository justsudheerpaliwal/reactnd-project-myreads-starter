import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import BookScreen from './BookScreen'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    currentlyReading: undefined,
    read: undefined,
    wantToRead: undefined 
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.filterBooks(data);
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
          />} />
      </div>
    )
  }
}

export default BooksApp
