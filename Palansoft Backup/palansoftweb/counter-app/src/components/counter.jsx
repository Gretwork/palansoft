import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: this.props.value,
    //tags: [],
  };

  // constructor() {
  //   super();
  //   console.log("Constructor", this);
  // }

  // Onclick Update the value function
  handelIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  // Onclick Update the value function
  handelDecriment = () => {
    this.setState({ count: this.state.count - 1 });
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // classname1 = {
  //   padding: "20px",
  //   fontSize: "40px",
  //   lineHeight: "50px",
  // };
  render() {
    return (
      <React.Fragment>
        <span className={this.updateBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handelIncrement("product")}
          className="m-2 btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={this.handelDecriment}
          className="m-2 btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <div>
          {this.state.tags.length === 0 && "No tags available"}
          {this.renderTags()}
        </div> */}
      </React.Fragment>
    );
  }
  //Change className dynamically
  updateBadgeClass() {
    let updatebadgeclasscon = "btn badge m-2 badge-";
    updatebadgeclasscon += this.state.count === 0 ? "warning" : "primary";
    return updatebadgeclasscon;
  }
  //Change content dynamically
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Empty" : count;
  }
}

export default Counter;
