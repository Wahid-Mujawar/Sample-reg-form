import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname:"",
            lastname:"",
            password:"",
            gender:"",
        }

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    firsthandler = (event) => {
        this.setState({
            firstname: event.target.value

        })
    }

    lastthandler = (event) => {
        this.setState({
            lastname: event.target.value

        })
    }

    agehandler = (event) => {
        this.setState({
            age: event.target.value

        })
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value

        })
    }

    genderthandler = (event) => {
        this.setState({
            gender: event.target.value

        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstname} ${this.state.lastname} ${this.state.age} Registered Successfully`)
        console.log(this.state);
        this.setState ({
            firstname:"",
            lastname:"",
            age:"",
            password:"",
            gender:"",
        })

        event.preventDefault();
    }
    
    render() {
        return(
            <div>

                <form onSubmit={this.handleSubmit}>
                <h1>User Registration</h1>
                <label>First Name:   </label><input type="text" value={this.state.firstname} onChange={this.firsthandler} placeholder="First Name"></input>
                <br/>
                <label>Last Name:  </label><input type="text" value={this.state.lastname} onChange={this.lastthandler} placeholder="Last Name"></input>
                <br/>
                <label>Age:  </label><input type="num" value={this.state.age} onChange={this.agehandler} placeholder="Age"></input>
                <br/>
                <label>Password: </label><input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password"></input>
                <br/>
                <label>Gender: </label><select onChange={this.genderhandler} defaultValue="Select Gender">
                <br/>
                <option defaultValue>Select Gender</option>
                <br/>
                <option value = "male">Male</option>
                <option value = "female">Female</option>
                </select>
                <br/>
                <input type="Submit" value ="Submit"></input>
                <br/>
    
            </form>
            </div>
        )
    }


}

export default Form

