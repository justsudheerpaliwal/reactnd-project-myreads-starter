import React from 'react'
import BookDetail from './BookDetail'
import PropTypes from 'prop-types';
import Slider from 'react-slick';


class BookShelf extends React.Component {
    static propTypes = {
        books: PropTypes.array,
        shelfName: PropTypes.string,
        changeBookShelf: PropTypes.func
    }
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: this.props.books && (this.props.books.length < 3 ? this.props.books.length: 3),
            slidesToScroll: 2
        };
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <Slider {...settings}>
                        {
                            this.props.books && (this.props.books.map((book) => {
                                return <div key={book.id}>
                                    <BookDetail
                                        key={book.id}
                                        book={book}
                                        changeBookShelf={this.props.changeBookShelf} />
                                </div>
                            }))}
                    </Slider>
                </div>
            </div>
        )
    }
}

export default BookShelf