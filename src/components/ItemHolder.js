import React, { Component } from 'react';
import MediaQuery from 'react-responsive';



class ItemHolder extends Component {

    render() {
        return(
            <div style={itemHolderStyle}> 
            </div>
        );
    }
}

const itemHolderStyle = {
    borderStyle: 'solid',
    borderColor: 'red',
    position: 'relative',
    justifyContent: 'flex-start',
    //flexDirection: 'column'
}




export default ItemHolder;