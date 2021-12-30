import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      imageUrls: []
    }
  }
  
  submitHandler = (searchTerm) => {
    this.clearImages()
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(json => {
      for (let i=0;i<3;i++) {
        this.setState(prevState => {
          return {
            imageUrls: [...prevState.imageUrls,json.data[i].images.original.url]
          }
        })
      }
    })
  }  

  clearImages = () => {
    this.setState({imageUrls: []})
  }
  
  render() {
    return (
      <div>
        <GifList images={this.state.imageUrls}/>
        <GifSearch submitHandler={this.submitHandler}/>
      </div>
    )
  }
}
