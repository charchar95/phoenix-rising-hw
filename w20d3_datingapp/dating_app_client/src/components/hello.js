import React, {Component} from 'react';

class Daters extends Component {
    getDater () {
        fetch('http://localhost:3000/daters')
        .then( daters => console.log(daters))
    }
    render () {
        return (
            <h1>Hello Dating World</h1>
        )
    }
}

export default Daters; 