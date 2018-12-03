import React, { Component } from 'react';
import '../css/InfoWindow.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

library.add(faThumbsUp)

class ReviewWindow extends Component {

  state = {
    total_reviews: '',
    total_positive: '',

  }

  componentDidMount() {

    if (this.props.steamId !== undefined) {
      let fetchReviews = "http://localhost:8080/api/steam/filters?assetType=reviews&filterType=app_id&filterValue=" + this.props.steamId
      fetch(fetchReviews)
        .then(response => response.json())
        .then(response => {
          this.setState({ total_reviews: response.total_reviews })
          this.setState({ total_positive: response.total_positive })
        })
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
    if (this.props.steamId !== undefined){
    return (
      <div className="Review-holder">
        <div className="ProgressBar-holder">
          <span className="ProgressBar-progress" style={{ width: (this.state.total_positive / this.state.total_reviews) * 100 + '%' }}></span>
        </div>
        <div className="Percentage-holder">
          {Math.round((this.state.total_positive / this.state.total_reviews) * 100) + '%'}
        </div>
        <FontAwesomeIcon icon={['far', 'thumbs-up']} />
        <div className="Pricetag">
          {this.checkPrice()}
          {this.price_format}
          {this.props.price}
          {this.props.currency}
        </div>
      </div>
    )}
    ;

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