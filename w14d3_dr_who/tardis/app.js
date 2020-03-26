class DivOne extends React.Component {
    render () {
        return (
            <div> 
               <DivTwo 
               tardis={this.props.tardis}
               handleChange={this.props.handleChange}
                />
            </div>
        )
    }
}

class DivTwo extends React.Component {
    render () {
        return (
            <div> 
            <DivThree 
                tardis={this.props.tardis}
                handleChange={this.props.handleChange}/>
            <DivThree 
            tardis={this.props.tardis}
            handleChange={this.props.handleChange}/>
            </div>
        )
    }
}

class DivThree extends React.Component {
render () {
    return (
        <div> 
            <h3 onClick={() => this.props.handleChange(this.props.tardis.name)}>{this.props.tardis.name}</h3>
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
        console.log('click')
        if(this.state.tardis.caps) {
            this.setState({
                tardis:{
                name: text.toLowerCase(),
                caps: false
                }
            });
        } else {
            this.setState({
                tardis: {
                    name: text.toUpperCase(),
                    caps: true
                }
            });
        }
    }
    render () {
        return (
            <div> 
                <DivOne  
                tardis={this.state.tardis}
                handleChange={this.changeIt} />
            </div>
            )
        }
        
    }
    
    ReactDOM.render(<App />, document.querySelector(".container"));