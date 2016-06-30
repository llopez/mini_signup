import React from 'react';
import Item from './item.jsx';

class List extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = { data: []};
  }

  componentDidMount () {
    fetch(this.props.url)
      .then(function(res){
        return res.json();
      })
    .then((json) => {
      this.setState({data: json});
    });
  }

  render () {
    var items = this.state.data.map(function(item){
      return (
        <Item firstName={item.data.first_name} lastName={item.data.last_name} age={item.data.age} key={item.data.id} />
      );
    });

    return (
      <table className="table table-striped">
      <thead>
      <tr><th>First Name</th><th>Last Name</th><th>Age</th></tr>
      </thead>
      <tbody>
        { items }
      </tbody>
      </table>
    );
  }
}

module.exports = List;
