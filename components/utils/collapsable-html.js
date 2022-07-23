import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";
import Text from "./text";
// components
// styles
const Collapsable = styled.div`
  width: 100%;
  height: ${(props) => props.maxHeight}px;
  overflow: hidden;
  position: relative;
  ${(props) =>
    props.collapsed === true &&
    `
    height: auto;
    padding-bottom: 40px;
  `}
`;

const CollapsableToggler = styled.span`
  position: absolute;
  height: 35px;
  width: 100%;
  bottom: 0;
  cursor: pointer;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: rgb(255, 156, 0);
  background: linear-gradient(
    0deg,
    rgba(255, 156, 0, 1) 0%,
    rgba(255, 186, 1, 1) 18%,
    rgba(0, 212, 255, 0) 100%
  );
  transition: all 0.4s ease;
  &:hover {
  }
`;

function CollapsableHtml({ children, maxHeight = 300 }) {
  const [collapsed, setCollapsed] = useState(false);

  // toggle collapse
  const toogleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <Collapsable maxHeight={maxHeight} collapsed={collapsed}>
      {children}
      <CollapsableToggler onClick={toogleCollapse}>
        {collapsed ? (
          <>
            <UpOutlined />
            <Text bold="bold">Show Less</Text>
          </>
        ) : (
          <>
            <DownOutlined />
            <Text bold="bold">Show More</Text>
          </>
        )}
      </CollapsableToggler>
    </Collapsable>
  );
}

export default CollapsableHtml;
