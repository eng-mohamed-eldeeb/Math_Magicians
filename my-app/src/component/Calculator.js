import React from 'react';


class Element extends React.Component {
  render() {
    return(
    <div className="constaner">
      <div className="answer"><h1>0</h1></div>
    <div className="btnWrapper">
      <div className="a-row">
        <button type="button" className="btn">Ac</button>
        <button type="button" className="btn">+/-</button>
        <button type="button" className="btn">%</button>
        <button type="button" className="btn o">÷</button>
      </div>
      <div className="a-row">
        <button type="button" className="btn">7</button>
        <button type="button" className="btn">8</button>
        <button type="button" className="btn">9</button>
        <button type="button" className="btn o">x</button>
      </div>
      <div className="a-row">
        <button type="button" className="btn">4</button>
        <button type="button" className="btn">5</button>
        <button type="button" className="btn">6</button>
        <button type="button" className="btn o">-</button>
      </div>
      <div className="a-row">
        <button type="button" className="btn">1</button>
        <button type="button" className="btn">2</button>
        <button type="button" className="btn">3</button>
        <button type="button" className="btn o">+</button>
      </div>
      <div className="a-row">
        <button type="button" className="btn zero">0</button>
        <button type="button" className="btn">.</button>
        <button type="button" className="btn o">=</button>
      </div>
      </div>
    </div>
    )
  };
}
// function Element() {
//   return (
//     <div className="constaner">
//       <div className="answer"><h1>0</h1></div>
//     <div className="btnWrapper">
//       <div className="a-row">
//         <button type="button" className="btn">Ac</button>
//         <button type="button" className="btn"></button>
//         <button type="button" className="btn"></button>
//         <button type="button" className="btn o"></button>
//       </div>
//       <div className="a-row">
//         <button type="button" className="btn">{fer}</button>
//         <button type="button" className="btn">{se}</button>
//         <button type="button" className="btn">{th}</button>
//         <button type="button" className="btn o">{forth}</button>
//       </div>
//       <div className="a-row">
//         <button type="button" className="btn">{fer}</button>
//         <button type="button" className="btn">{se}</button>
//         <button type="button" className="btn">{th}</button>
//         <button type="button" className="btn o">{forth}</button>
//       </div>
//       <div className="a-row">
//         <button type="button" className="btn">{fer}</button>
//         <button type="button" className="btn">{se}</button>
//         <button type="button" className="btn">{th}</button>
//         <button type="button" className="btn o">{forth}</button>
//       </div>
//       <div className="a-row">
//         <button type="button" className="btn">{fer}</button>
//         <button type="button" className="btn">{se}</button>
//         <button type="button" className="btn">{th}</button>
//         <button type="button" className="btn o">{forth}</button>
//       </div>
//       </div>
//     </div>
//   );
// }

export default Element;
