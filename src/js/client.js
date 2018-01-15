import React from "react";
import ReactDOM from "react-dom";


class SampleComp extends React.Component {
  render() {
    return (
        <h1>Sample text</h1>
    )
  }
}
const app = document.getElementById('app');
ReactDOM.render(<SampleComp />, app);

