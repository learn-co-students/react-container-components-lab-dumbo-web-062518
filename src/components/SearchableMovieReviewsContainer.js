import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const BASE = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const API = `api-key=${NYT_API_KEY}`;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  setTerm = (e) => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    })
  }

  fetchReviews = e => {
    e.preventDefault();
    fetch(`${BASE}${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
      .then(res => res.json())
      .then(res => this.setState({
        reviews: res.results
      })
    )
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.fetchReviews}>
          Search: <input onChange={this.setTerm} type="text"/>
          <button value="submit">Submit</button>
        </form>
        <h1>Search Results</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}
