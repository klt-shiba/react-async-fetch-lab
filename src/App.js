// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super()
        
        this.state = {
            peopleInSpace: []
        }
    }
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(obj => {this.setState({
            peopleInSpace: obj.people
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(el => el.name)}
            </div>
        )
    }
}