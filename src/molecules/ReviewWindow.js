import React, { Component } from 'react';
import '../css/InfoWindow.css';
import Button from '../atoms/Button.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

library.add(faThumbsUp)

let price_format = '';

class ReviewWindow extends Component {



  state = {
    total_reviews: '',
    review_score: '',
    review_score_desc: '',
    total_positive: '',
    total_negative: ''

  }

  componentDidMount() {

    console.log("system req steamId: " + this.props.steamId)
    if (this.props.steamId !== undefined) {
      let fetchReviews = "http://localhost:8080/api/steam/filters?assetType=reviews&filterType=app_id&filterValue=" + this.props.steamId
      fetch(fetchReviews)
        .then(response => response.json())
        .then(response => {
          console.log("Number of reviews: " + response.total_reviews)
          this.setState({ total_reviews: response.total_reviews })
          this.setState({ total_positive: response.total_positive })
          this.setState({ total_negative: response.total_negative })
          this.setState({ review_score: response.review_score })
          this.setState({ review_score_desc: response.review_score_desc })

        })
    } else {
      //this.setState({ miniReq: "Sorry we can't show you the requirements for this game!" })
    }


  }

  checkPrice = () => {
    if (this.props.price !== "FREE TO PLAY") {
      if (this.props.price !== "Not available on Steam") {
        this.price_format = 'Price: '
      }
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
    return (
      <div className="Game-name">
      <p>{this.props.gameName}</p>
      <div className="Review-holder">
        <div className="ProgressBar-holder">
          <span className="ProgressBar-progress" style={{ width: (this.state.total_positive / this.state.total_reviews) * 100 + '%' }}></span>
        </div>
        <div>
          {Math.round((this.state.total_positive / this.state.total_reviews) * 100) + '%  '}
        </div>
        <FontAwesomeIcon icon={['far', 'thumbs-up']}/>
        <div className="Pricetag">
          {this.checkPrice()}
          {this.price_format}
          {this.props.price}
          {this.props.currency}
        </div>
        </div>
      </div>
    );

  }
  render() {
    return (

      <div>

        {this.renderReviews()}

      </div>


    );
  }
}

export default ReviewWindow;