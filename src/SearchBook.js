import React from 'react'
import {Link} from 'react-router-dom'

class SearchBook extends React.Component {
    state = {
        query: ''
    }

    fetchQueryResult(event) {
        this.setState({query:this.query = event.target.value});
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange="fetchQueryResult" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">

                    </ol>
                </div>
            </div>
        );
    }   
}
export default SearchBook