import React from './react';

class AddedLocation extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li  class="locations" key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default AddedLocation;
