import React, {Component} from 'react';

class Form extends Component {
    state = {
        name: "",
        age: "",
        gender: "",
        img: "",
        starsign: "",
        ltl: true,
    }
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
      };
    
    handleSubmit = (event) => {
        event.preventDefault();
        fetch("/users", {
          method: "POST",
          body: JSON.stringify({ 
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            img: this.state.img
            }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(resJson => {
            // this.props.handleAddUser(resJson);
            this.setState({
              name: "",
              age: "",
            gender: "",
            img: "",
            ltl: true,
            });
          })
          .catch(error => console.error({ Error: error }));
      };
    

    render () {
        return (
            <> 
            <form onSubmit={this.handleSubmit}> 
                <input type='text' placeholder='name' id='name' onChange={this.handleChange} value={this.state.name}></input>
                <input type='text' placeholder='age' id='age' onChange={this.handleChange} value={this.state.age}></input>
                <input type='text' placeholder='gender' id='gender' onChange={this.handleChange} value={this.state.gender}></input>
                <input type='text' placeholder='img' id='img' onChange={this.handleChange} value={this.state.img}></input>
                <input type='text' placeholder='starsign' id='starsign' onChange={this.handleChange} value={this.state.starsign}></input>
                <input type="submit" value="Add a Dater" />
            </form>
            </>
        )
    }
}
export default Form