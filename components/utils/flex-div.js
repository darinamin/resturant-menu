import styled from "styled-components";

import PropTypes from "prop-types";

const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) =>
    props.gap && Number.isInteger(props.gap) && `${props.gap}px`};
  justify-content: ${(props) => {
    if (props.justifyContent) return props.justifyContent;
  }};
  align-items: ${(props) => {
    if (props.alignItems) return props.alignItems;
  }};
  flex: ${(props) => (props.flex ? props.flex : "")};
  flex-wrap: ${(props) => (props.responsive ? "wrap" : "no-wrap")};
  width: ${(props) =>
    props.width && Number.isInteger(props.width)
      ? props.width + "px"
      : props.width};
  padding: ${(props) => {
    if (Number.isInteger(props.padding)) {
      return props.padding + "px";
    } else if (Array.isArray(props.padding)) {
      let str = ``;
      props.padding.map((num, i) => (str += `${props.padding[i]}px `));
      return str;
    }
  }};
  margin: ${(props) => {
    if (Number.isInteger(props.margin)) {
      return props.margin + "px";
    } else if (Array.isArray(props.margin)) {
      let str = ``;
      props.margin.map((num, i) => (str += `${props.margin[i]}px `));
      return str;
    }
  }};

  ${(props) => {
    if (props?.responsiveWhen && props?.responsiveWhen !== 0)
      return `
      @media (max-width: ${props.responsiveWhen}px ) {
        flex-wrap: warp;
      }
    `;
  }}

  ${(props) => (props.cStyle ? props.cStyle : "")}
`;

FlexDiv.propTypes = {
  direction: PropTypes.oneOf(["row", "column"]),
  gap: PropTypes.number,
  justifyContent: PropTypes.oneOf([
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    "start",
    "end",
    "flex-start",
    "flex-end",
    "center",
  ]),
  alignItems: PropTypes.oneOf([
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    "start",
    "end",
    "flex-start",
    "flex-end",
    "center",
  ]),
  padding: PropTypes.any,
  margin: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cStyle: PropTypes.string,
  responsive: PropTypes.bool,
  responsiveWhen: PropTypes.number,
};

FlexDiv.defaultProps = {
  direction: "row",
  gap: 0,
  justifyContent: null,
  alignItems: null,
  padding: null,
  margin: null,
  width: null,
  cStyle: null,
  responsive: false,
  responsiveWhen: 0,
};

export default FlexDiv;
