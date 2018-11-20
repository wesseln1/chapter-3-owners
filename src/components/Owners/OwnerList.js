import React, { Component } from 'react'

class OwnerList extends Component {
  render(){
    return (
      <section className="owners">
      <h1>Owners</h1>
      {
        this.props.owners.map(owner =>
          <div key={owner.id}>
            <p>{owner.name}: {owner.number}</p>
          </div>
        )
      }
      </section>
    )
  }
}
export default OwnerList