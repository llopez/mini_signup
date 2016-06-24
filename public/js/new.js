var Form = React.createClass({
  getInitialState: function(){
    return {firstName: "", lastName: "", age: ""};
  },
  handleFirstNameChange: function(e){
    this.setState({firstName: e.target.value});
  },
  handleLastNameChange: function(e){
    this.setState({lastName: e.target.value});
  },
  handleAgeChange: function(e){
    this.setState({age: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();

    fetch(this.props.url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Mini Battle</h1>
        <div className="form-group"><input className="form-control" type="text" placeholder="First Name" onChange={this.handleFirstNameChange} /></div>
        <div className="form-group"><input className="form-control" type="text" placeholder="Last Name" onChange={this.handleLastNameChange} /></div>
        <div className="form-group"><input className="form-control" type="number" placeholder="Age" onChange={this.handleAgeChange} /></div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
});


ReactDOM.render(
  <Form url="/api/users" />,
  document.getElementById('content')
);
