import React, { Component } from 'react'

export default class GifList extends Component {
  renderImages = () => {
    return this.props.images.map(imageUrl => {
      return <li><img src={imageUrl} alt='none'/></li>
    })
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.renderImages()}
        </ul>
      </div>
    )
  }
}
