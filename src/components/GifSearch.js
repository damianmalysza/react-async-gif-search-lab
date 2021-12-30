import React, { Component } from 'react'

export default class GifSearch extends Component {
  
  state = {
    formText: ''
  }

  trackFormInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    this.props.submitHandler(this.state.formText)
    this.setState({
      formText: ''
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>
          Enter Search Term: <br></br>
          <input type="text" name="formText" onChange={this.trackFormInput} value={this.state.formText}/>
          </label>
          <br></br>
          <button type="submit">Find Gifs</button>
        </form>
      </div>
    )
  }
}
