import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.span`
  color: ${(props) => {
    // if (props.type === "default") return props.theme.colors.default;
    if (props.color) return props.color;
    if (props.type === "primary") return props.theme.colors.primary;
    else if (props.type === "secondary") return props.theme.colors.secondary;
  }};
  text-align: ${(props) => (props.align ? props.align : "")};
  padding: ${(props) => {
    if (Number.isInteger(props.padding)) {
      return props.padding + "px";
    } else if (Array.isArray(props.padding)) {
      let str = ``;
      props.padding.map((num, i) => (str += `${props.padding[i]}px `));
      // if (props.padding.length === 1) {
      //   return props.padding[0]
      // } else if (props.padding.length === 2) {
      //   return `${props.padding[0]}px ${props.padding[1]}px`
      // } else if (props.padding.length === 3) {
      //   return `${props.padding[0]}px ${props.padding[1]}px ${props.padding[]}`
      // }
      return str;
    }
  }};
  font-weight: ${(props) => (props.bold ? props.bold : "")};
  margin: ${(props) => {
    if (Number.isInteger(props.margin)) {
      return props.margin + "px";
    } else if (Array.isArray(props.margin)) {
      let str = ``;
      props.margin.map((num, i) => (str += `${props.margin[i]}px `));
      // if (props.padding.length === 1) {
      //   return props.padding[0]
      // } else if (props.padding.length === 2) {
      //   return `${props.padding[0]}px ${props.padding[1]}px`
      // } else if (props.padding.length === 3) {
      //   return `${props.padding[0]}px ${props.padding[1]}px ${props.padding[]}`
      // }
      return str;
    }
  }};
  font-size: ${(props) => {
    if (props && Number.isInteger(props.size)) return `${props.size}px`;
    else {
      if (props === "large") return "2em";
      else if (props === "small") return ".5em";
      else if (props === "normal") return "1em";
    }
  }};

  ${(props) => {
    if (props.line !== 0) {
      return `
      display: -webkit-box;
      -webkit-line-clamp: ${Number.isInteger(props.line) ? props.line : ""};
      -webkit-box-orient: vertical;
       overflow: hidden;
      `;
    }
  }}

  ${(props) => (props.cStyle ? props.cStyle : "")}
`;
Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
  type: PropTypes.oneOf(["primary", "secondary", "default"]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  padding: PropTypes.any,
  bold: PropTypes.oneOf([
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "normal",
    "bold",
    "bolder",
    "lighter",
  ]),
  margin: PropTypes.any,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["large", "small", "normal"]),
  ]),
  line: PropTypes.number,
  cStyle: PropTypes.string,
};

Text.defaultProps = {
  children: null,
  type: "default",
  align: null,
  padding: null,
  margin: null,
  bold: null,
  size: null,
  line: 0,
  cStyle: null,
};

export default Text;
