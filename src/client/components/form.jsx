import React from 'react';

class Form extends React.Component{
  constructor (props, context) {
    super(props, context);

    this.state = {
      data: {firstName: "", lastName: "", age: ""}, 
      errors: {firstName: [], lastName: [], age: []} 
    }
  }

  handleFirstNameChange (e) {
    var aux = this.state;
    aux.data.firstName = e.target.value;
    this.setState(aux);
  }

  handleLastNameChange (e) {
    var aux = this.state;
    aux.data.lastName = e.target.value;
    this.setState(aux);
  }

  handleAgeChange (e) {
    var aux = this.state;
    aux.data.age = e.target.value;
    this.setState(aux);
  }

  handleSubmit (e) {
    e.preventDefault();
    fetch(this.props.url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.data)
    }).then(function(res){
      return res.json();
    }).then((res) => {
      this.setState(res);
    });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Mini Battle</h1>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="First Name" onChange={this.handleFirstNameChange} />
          <span className="help-block">{this.state.errors.firstName}</span>
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Last Name" onChange={this.handleLastNameChange} />
          <span className="help-block">{this.state.errors.lastName}</span>
        </div>
        <div className="form-group">
          <input className="form-control" type="number" placeholder="Age" onChange={this.handleAgeChange} />
          <span className="help-block">{this.state.errors.age}</span>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

module.exports = Form;

