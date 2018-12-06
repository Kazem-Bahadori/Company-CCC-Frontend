import React, {Component} from 'react';
import '../css/Button.css';
//This component is not being used.
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
