import React, {Component} from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
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

export default Search;
