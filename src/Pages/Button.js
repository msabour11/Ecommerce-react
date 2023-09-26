

import React from "react";

class Button extends React.Component {

    constructor(){
        super()
        this.state={
            btname:'Contact ME'
        }

        }

  render() {
    return (
      <button className="btn btn-primary">{this.state.btname}</button>
    );
  }
}

export default Button;
