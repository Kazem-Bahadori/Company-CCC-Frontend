import React, {Component} from 'react';
import '../css/Button.css';

class Button extends Component {
    
    render() {
      return (
        <div className="button" onClick={this.props.onClick}>
        {this.props.name}
        </div>
        )
    }
}

export default Button;