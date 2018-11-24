import React from "react";
import { ANIMALS } from "petfinder-client";

class SearchParams extends React.Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: ""
  };
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };
  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value
    });
  };
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={this.state.location}
            placeholder="location"
            onChange={this.handleLocationChange}
          />
        </label>
        <label htmlFor="animal">
          Animals
          <option />
          <select
            id="animal"
            value={this.state.location}
            placeholder="location"
          />
        </label>
      </div>
    );
  }
}
export default SearchParams;
