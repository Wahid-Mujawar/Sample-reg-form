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
        this.state({
            firstname: event.target.value

        })
    }

    lastthandler = (event) => {
        this.state({
            lastname: event.target.value

        })
    }

    passwordhandler = (event) => {
        this.state({
            password: event.target.value

        })
    }

    genderthandler = (event) => {
        this.state({
            gender: event.target.value

        })
    }

    handleSubmit = event => {
        alert('$(this.state.firstname) $(this.state.lastname) Registered Successfully')
        console.log(this.state);
        this.setState ({
            firstname:"",
            lastname:"",
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
                <label>First Name: </label><input type="text" value={this.state.firstname} onChange={this.firstname} placeholder="First Name"></input>
                <br/>
                <label>Last Name: </label><input type="text" value={this.state.lastname} onChange={this.lastname} placeholder="Last Name"></input>
                <br/>
                <label>Password: </label><input type="text" value={this.state.password} onChange={this.password} placeholder="Password"></input>
                <br/>
                <label>Gender: </label><select onChange={this.genderhandler} defaultValue="Select Gender">
                <br/>
                <option defaultValue>Select Gender</option>
                <option value = "male">Male</option>
                <option value = "female">Female</option>
                </select>
                <input type="Submit" value ="Submit"></input>
    
            </form>
            </div>
        )
    }


}

export default Form

