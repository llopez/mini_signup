import React from 'react';

class List extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      data: [{firstName: 'Luis', lastName: 'Lopez', age: 32}]
    };
  }
  componentDidMount () {
    fetch(this.props.url)
      .then(function(res){
        return res.json();
      })
    .then((json) => {
      this.setState({data: json});
    })
  }
  render () {
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
}

