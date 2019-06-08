import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Components/Header/Header';

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>    
    )
  }
}

export default Layout;
