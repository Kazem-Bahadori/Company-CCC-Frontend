import React from 'react'
import Button from '../atoms/Button';
import '../css/Header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="header-container">
                <Button onClick={this.props.onClick} name="Home"></Button>
            </div>
        )
    }
}

export default Header;