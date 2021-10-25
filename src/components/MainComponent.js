import React, { Component } from 'react'
import Header from './HeaderComponent'
import GitHub from './GitHubComponent'


class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <h1>This is the main component</h1>
                    <GitHub />
                </div>
            </>
        )
    }
}

export default Main