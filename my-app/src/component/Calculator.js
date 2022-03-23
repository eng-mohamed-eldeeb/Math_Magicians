import React from 'react';
import calculate from '../logic/calculate';

class Element extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  ClickHandler = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="constaner">
        <div className="answer">
          <h1>{[total, operation, next]}</h1>
        </div>
        <div className="btnWrapper">
          <div className="a-row">
            <button type="button" className="btn" onClick={this.ClickHandler}>
              AC
            </button>
            <button type="button" className="btn" onClick={this.ClickHandler}>
              +/-
            </button>
            <button type="button" className="btn" onClick={this.ClickHandler}>
              %
            </button>
            <button type="button" className="btn o" onClick={this.ClickHandler}>
              ÷
            </button>
          </div>
          <div className="a-row">
            <button type="button" className="btn" onClick={this.ClickHandler}>
              7
            </button>
            <button type="button" className="btn" onClick={this.ClickHandler}>
              8
            </button>
            <button type="button" className="btn" onClick={this.ClickHandler}>
              9
            </button>
            <button type="button" className="btn o" onClick={this.ClickHandler}>
              x
            </button>
          </div>
          <div className="a-row">
            <button type="button" className="btn" onClick={this.ClickHandler}>
              4
            </button>
            <button type="button" className="btn" onClick={this.ClickHandler}>
              5
            </button>
            <button type="button" className="btn" onClick={this.ClickHandler}>
              6
            </button>
            <button type="button" className="btn o" onClick={this.ClickHandler}>
              -
            </button>
          </div>
          <div className="a-row">
            <button type="button" className="btn" onClick={this.ClickHandler}>
              1
            </button>
            <button type="button" className="btn" onClick={this.ClickHandler}>
              2
            </button>
            <button type="button" className="btn" onClick={this.ClickHandler}>
              3
            </button>
            <button type="button" className="btn o" onClick={this.ClickHandler}>
              +
            </button>
          </div>
          <div className="a-row">
            <button
              type="button"
              className="btn zero"
              onClick={this.ClickHandler}
            >
              0
            </button>
            <button type="button" className="btn" onClick={this.ClickHandler}>
              .
            </button>
            <button type="button" className="btn o" onClick={this.ClickHandler}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Element;
