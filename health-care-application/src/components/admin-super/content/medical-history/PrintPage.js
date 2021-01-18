import React from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import AllFormForPrint from "./AllFormForPrint";
import { Sec2 } from "../../../Forms/Sections2";
import { Sec3 } from "../../../Forms/Sections3";
import { Sec4 } from "../../../Forms/Sections4";
import { Sec5 } from "../../../Forms/Sections5";
import { Sec6 } from "../../../Forms/Sections6";

class ResultOnly extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <th>column 1</th>
          <th>column 2</th>
          <th>column 3</th>
        </thead>
        <tbody>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export class PrintResultOnly extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button onClick={handlePrint}>{this.props.visdate}</button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <div style={{ display: "none" }}>
          <ResultOnly ref={(el) => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}

class AllForm extends React.Component {
  render() {
    return (
      <div>
        <AllFormForPrint />
      </div>
    );
  }
}

export class PrintAllForm extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button onClick={handlePrint}>{this.props.visdate}</button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <div style={{ display: "none" }}>
          <AllForm ref={(el) => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}
