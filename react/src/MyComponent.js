import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        내 이름은 {name} <br />
        children 값은 {children}입니다. <br />
        좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
MyComponent.defaultProps = {
  name: "하일",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
