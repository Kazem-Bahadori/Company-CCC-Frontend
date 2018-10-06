import React, {Component} from 'react';
import icons from 'glyphicons'

class Button extends Component {
    
    render() {
      return (
        <div className="button" onClick={this.props.onClick}>
        {this.props.name} {icons.home}
        </div>
        )
    }
}

export default Button;