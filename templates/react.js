import React, { Component, PropTypes } from 'react'

export default class extends Component {
  static propTypes = {
    color: PropTypes.string,
    hoverColor: PropTypes.string
  };

  static displayName = '__NAME__'

  constructor () {
    super()
    this.state = { isHovering: false }
  }

  render () {
    const color = this.state.isHovering ? this.props.hoverColor : this.props.color
    return (
      <span onMouseOut={::this.onMouseOut} onMouseOver={::this.onMouseOver}>
        __SOURCE__
      </span>
    )
  }

  onMouseOut () {
    this.setState({ isHovering: false })
  }

  onMouseOver () {
    this.setState({ isHovering: true })
  }
}
