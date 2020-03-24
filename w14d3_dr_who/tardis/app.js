class DivThree extends React.Component {
state = {
    tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
    }
} 

changeIt = (text) => {
    console.log("clicked")
    if (this.state.tardis.caps) {
        this.setState({
            tardis: {
                name: text.toLowerCase(),
                caps: false
            }
        })
    } else {
        this.setState({
            tardis: {
                name: text.toUpperCase(), 
                caps: true
            }
        })
    }
}
render () {
    return (
        <div className ="div-three" 
            // handleChange={this.changeIt}
            text={this.state.tardis.name}> 
        <h3 onClick={() => changeIt(this.state.text)}>
        {this.state.tardis.name}</h3>
        </div>
    )
}
}

class DivTwo extends React.Component {
    render () {
        return (
            <div className ="div-two" >
            <DivThree />
            <DivThree />
            </div>
        )
    }
}


class DivOne extends React.Component {
    render () {
        return (
            <div className ="div-one" >
               <DivTwo />
            </div>
        )
    }
}

class App extends React.Component {
    render () {
        return (
            <div>
                <DivOne  />
            </div>
            )
        }
        
    }
    
    ReactDOM.render(<App />, document.querySelector(".container"));