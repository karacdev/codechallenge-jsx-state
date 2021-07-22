class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bootcamp: "Nucamp" };

  }

  render() {
    const course = "React";
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("span", { className: "blue-box" }, this.state.bootcamp), /*#__PURE__*/
      React.createElement("span", { className: "orange-box" }, course)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Example, null), document.getElementById('root'));