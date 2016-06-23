var List = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function(){
    fetch("./api/users")
      .then(function(res){
        return res.json();
      })
      .then((json) => {
        this.setState({data: json});
      })
  },
  render: function(){
    var items = this.state.data.map(function(item){
      return (
        <Item firstName={item.data.first_name} lastName={item.data.last_name} age={item.data.age} />
      );
    });
    return (
      <table className="table table-striped">
      <thead>
      <tr><th>First Name</th><th>Last Name</th><th>Age</th></tr>
      </thead>
      <tbody>
      {items}
      </tbody>
      </table>
    );
  }
});

var Item = React.createClass({
  render: function(){
    return (
      <tr><td>{this.props.firstName}</td><td>{this.props.lastName}</td><td>{this.props.age}</td></tr>
    );
  }
});


ReactDOM.render(
  <List />,
  document.getElementById('content')
);
