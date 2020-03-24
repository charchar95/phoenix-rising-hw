class DivOne extends React.Component {
    render () {
        return (
            <div>
                <h3 onClick={() => this.handleChange(this.props.text)}>
                    {this.props.text}</h3>
            </div>
        )
    }
}

class App extends React.Component {
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
            <div>
                <DivOne 
                handleChange={this.changeIt}
                text={this.state.tardis.name}
                />
            </div>
            )
        }
        
    }
    
    ReactDOM.render(<App />, document.querySelector(".container"));