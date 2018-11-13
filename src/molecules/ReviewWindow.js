import React, { Component } from 'react';
import '../css/InfoWindow.css';
import Button from '../atoms/Button.js';

let total_reviews = ''
let review_score = ''
let review_score_desc = ''
let total_positive = ''
let total_negative = ''

class ReviewWindow extends Component {

  state = {
    total_reviews: '',
    review_score: '',
    review_score_desc: '',
    total_positive: '',
    total_negative: '',
    
  }

  componentDidMount() {
    
    console.log("system req steamId: " + this.props.steamId)
    if (this.props.steamId !== undefined) {
    let fetchReviews = "http://localhost:8080/api/steam/filters?assetType=reviews&filterType=app_id&filterValue=" + this.props.steamId
    fetch(fetchReviews)
    .then(response => response.json())
    .then(response => {
      console.log("Number of reviews: " + response.total_reviews)
      this.setState({total_reviews: response.total_reviews })
      this.setState({total_positive: response.total_positive })
      this.setState({total_negative: response.total_negative })
      this.setState({review_score: response.review_score })
      this.setState({review_score_desc: response.review_score_desc })
      
    })
  } else {
    //this.setState({ miniReq: "Sorry we can't show you the requirements for this game!" })
  }

  
  }

  renderReviews = () => {
    let reviewColor = "review-color-green"
  if (this.state.review_score_desc === "Mixed") {
    reviewColor = "review-color-orange"
  } else if (this.state.review_score_desc === "Mostly Negative") {
    reviewColor = "review-color-red"
  } else if (this.state.review_score_desc === "Negative") {
    reviewColor = "review-color-red"
  }
    return(
    <div className="Name-holder">
    <p> Score: {this.state.review_score}/10 </p>
    <p> Average feelings: <span className={reviewColor}> {this.state.review_score_desc} </span> </p>
    <p> Review Score: {this.state.review_score_desc} </p>
    <p> Review Score: {this.state.review_score_desc} </p>
    <p> Review Score: {this.state.review_score_desc} </p>
    </div>
    );

  }
  render() {
    return (
      
      <div className="Info-window-holder">
        
        {this.renderReviews()}
        
      </div>


    );
  }
}

export default ReviewWindow;