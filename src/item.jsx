class Item extends React.Component {
  render () {
    return (
      <tr><td>{this.props.firstName}</td><td>{this.props.lastName}</td><td>{this.props.age}</td></tr>
    );
  }
}

