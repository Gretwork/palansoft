import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    Counters: [
      { id: 1, value: 4 },
      { id: 2, value: 6 },
      { id: 3, value: 2 },
      { id: 4, value: 9 },
    ],
  };
  handleDelete = (counterId) => {
    console.log("Event hand colled", counterId);
    const counters = this.state.Counters.filter((c) => c.id !== counterId);
    this.setState({ Counters: counters });
  };
  render() {
    return (
      <div>
        {/* Import Component */}
        {this.state.Counters.map((counter) => (
          <p>
            <Counter
              key={counter.id}
              onDelete={() => this.handleDelete(counter.id)}
              value={counter.value}
            />
          </p>
        ))}
      </div>
    );
  }
}

export default Counters;
