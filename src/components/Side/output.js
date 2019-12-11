import React, {Component} from 'react';

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div class="output">
        <h3>list is here</h3>
        <AddedLocation items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

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

export default Output;
