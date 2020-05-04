import React, {Component} from 'react';

class Daters extends Component {
    componentDidMount() {
        this.getDaters()
    }
    getDaters() {
        fetch('/users')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
    }

    render () {
        return (
            <h1>Hello Dating World</h1>
        )
    }
}

export default Daters; 