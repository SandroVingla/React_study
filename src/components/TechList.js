import React, { Component } from 'react'
class TechList extends Component {
    state = [
        'NodeJS',
        'ReactJS',
        'React Native'
    ]
    render() {
        return (
            <ul>
                <li>NodeJS</li>
                <li>ReactJS</li>
                <li>React Native</li>
            </ul>
        )
    }
}

export default TechList;