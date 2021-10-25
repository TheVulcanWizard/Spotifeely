import React, { Component } from 'react'

class GitHub extends Component {

    constructor(props) {
        super(props)
        this.state = {
            baseUrl: 'https://api.github.com/users/',
            username: "",
            items: [],
            loaded: false
        }
    }

    handleChange = e => {
        this.setState({username: e.target.value})
    }

    handleButtonClick = () => {
        let username = this.state.username
        this.fetchUser(username)
    }

    fetchUser = username => {
        console.log("button clicked")
        return fetch("https://api.github.com/users/TheVulcanWizard")
            .then(response => response.json())
            .then((json) => {
                this.setState({
                    items: json,
                    loaded: true
                })
            })
            .catch(error => console.error(error))
    }

    render() {
        if (this.state.loaded) {
            return (
                <>
                    <p>{this.state.items.login}</p>
                </>
            )
        } else {

            return (
                <>
                    <input placeholder="username" value={this.state.username} onChange={this.handleChange}></input>
                    <button onClick={this.handleButtonClick}>Fetch User</button>
                </>
            )
        }
    
    }
}

export default GitHub