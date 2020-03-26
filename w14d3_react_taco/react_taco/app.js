class App extends React.Component {
    state = {
      baseURL: 'http://taco-randomizer.herokuapp.com/random/?full-tack=true',
      taco: ""
    }

    handleRandomClick = () => {
      // event.preventDefault()
      console.log("clicked")
      fetch(this.state.baseURL)
      .then(response => {
        return response.json()
      }).then(json => this.setState({
        taco: json,
      }),
      err => console.log(err))
    }

    render () {
      return (
        <div>
          Click to get started!
          <button onClick={this.handleRandomClick}>Random Taco</button>
          <div>
            {this.state.taco ? <Taco taco={this.state.taco} /> : ""}
          </div>
        </div>
      )
    }
  }

  class Taco extends React.Component {
    render () {
        return (
    <div className="box">
                <h3>Shell: {this.props.taco.shell.name}</h3>
                <p>{this.props.taco.shell.recipe}</p>
                <h3>mixin: {this.props.taco.mixin.name}</h3>
                <p>{this.props.taco.mixin.recipe}</p>
                <h3>condiment: {this.props.taco.condiment.name}</h3>
                <p>{this.props.taco.condiment.recipe}</p>
              </div>
           )   
        }          
    }
  
  ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )

