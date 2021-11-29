import React, { Component } from "react";
import { homeGuitarList } from "../../data/HomePage/guitar_data";
const Context = React.createContext();

class Provider extends Component {
  state = {
    products: homeGuitarList,
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state.products,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
