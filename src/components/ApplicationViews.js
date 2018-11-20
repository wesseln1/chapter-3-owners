import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import AnimalList from './Animals/AnimalList'
import LocationList from './Locations/LocationList'
import EmployeeList from './Employees/EmployeeList'
import OwnerList from "./Owners/OwnerList"

class ApplicationViews extends Component {
  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way"},
    { id: 2, name: "Nashville South", address: "10101 Binary Court"}
  ]

  animalsFromAPI = [
    { id: 1, name: "Chester", type: "Dog"},
    { id: 2, name: "Todd", type: "Cat"},
    { id: 3, name: "Trudy", type: "Dog"},
    { id: 4, name: "Lona", type: "Cat"}
  ]

  ownersFromAPI = [
    { id: 1, name: "Wendy & Peter Wessel", number: "(989)464-0969"},
    { id: 2, name: "Nick Wessel", number: "(989)464-5890"},
    { id: 3, name: "Taylor Wessel & Luke Wilson", number: "(989)464-1371"}
  ]

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    owners: this.ownersFromAPI
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props)=> {
          return <LocationList locations={this.state.locations}/>
        }}/>
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals}/>
        }}/>
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees}/>
        }}/>
        <Route path="/owners" render={(props) => {
          return <OwnerList owners={this.state.owners}/>
        }}/>
      </React.Fragment>
    )
  }
}
export default ApplicationViews