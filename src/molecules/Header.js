import React from 'react'
import Button from '../atoms/Button';

class Header extends React.Component{
    render(){
        return(
            <div className="header-container">
                <Button onClick={this.props.onClick} name="Home button"></Button>
            </div>
        )
    }
}

export default Header;