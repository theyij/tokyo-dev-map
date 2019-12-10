import React, {Component} from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div class="side">
        <div class="search">
          <h3>Looking for a place?</h3>
          <form>
            <label htmlFor="search-place">

            </label>
            <input
              id="search-place"
            />
            <button>
              Search
            </button>
          </form>
        </div>
        <div class="input">
          <h3>Add more Location to the map</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-location">
              Name : 
            </label>
            <input
              id="new-location"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Submit #{this.state.items.length + 1}
            </button>
          </form>
        </div>

        <div class="output">
          <h3>list is here</h3>
          <AddedLocation items={this.state.items} />
        </div>
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

export default Input;
