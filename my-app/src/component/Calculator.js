import React from 'react';
import calculate from '../logic/calculate';
//The changes are below
function Element() {
  const [state, setState] = React.useState({});

  function ClickHandler(e) {
    const result = calculate(state, e.target.textContent);
    setState(result);
  }

  const { total, next, operation } = state;
  return (
    <div className="constaner">
      <div className="answer">
        <h1>{[total, operation, next]}</h1>
      </div>
      <div className="btnWrapper">
        <div className="a-row">
          <button type="button" className="btn" onClick={ClickHandler}>
            AC
          </button>
          <button type="button" className="btn" onClick={ClickHandler}>
            +/-
          </button>
          <button type="button" className="btn" onClick={ClickHandler}>
            %
          </button>
          <button type="button" className="btn o" onClick={ClickHandler}>
            ÷
          </button>
        </div>
        <div className="a-row">
          <button type="button" className="btn" onClick={ClickHandler}>
            7
          </button>
          <button type="button" className="btn" onClick={ClickHandler}>
            8
          </button>
          <button type="button" className="btn" onClick={ClickHandler}>
            9
          </button>
          <button type="button" className="btn o" onClick={ClickHandler}>
            x
          </button>
        </div>
        <div className="a-row">
          <button type="button" className="btn" onClick={ClickHandler}>
            4
          </button>
          <button type="button" className="btn" onClick={ClickHandler}>
            5
          </button>
          <button type="button" className="btn" onClick={ClickHandler}>
            6
          </button>
          <button type="button" className="btn o" onClick={ClickHandler}>
            -
          </button>
        </div>
        <div className="a-row">
          <button type="button" className="btn" onClick={ClickHandler}>
            1
          </button>
          <button type="button" className="btn" onClick={ClickHandler}>
            2
          </button>
          <button type="button" className="btn" onClick={ClickHandler}>
            3
          </button>
          <button type="button" className="btn o" onClick={ClickHandler}>
            +
          </button>
        </div>
        <div className="a-row">
          <button
            type="button"
            className="btn zero"
            onClick={ClickHandler}
          >
            0
          </button>
          <button type="button" className="btn" onClick={ClickHandler}>
            .
          </button>
          <button type="button" className="btn o" onClick={ClickHandler}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Element;
