import React, { Component } from 'react'


// It could be a simple React class:
class SubsContainer extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
