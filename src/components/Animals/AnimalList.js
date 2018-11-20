import React, { Component } from 'react'

class AnimalList extends Component {
  render() {
    return (
      <secton className="animals">
      <h1>Animals</h1>
      {
        this.props.animals.map(animal =>
          <div key={animal.id}>
            <p>{animal.name}</p>
            <p>{animal.type}</p>
          </div>)
      }
      </secton>
    )
  }
}
export default AnimalList