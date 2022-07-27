import { useRouter } from "next/router";
import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShareAltOutlined,
  NotificationFilled,
} from "@ant-design/icons";
import FlexDiv from "@/components/utils/flex-div";
import Text from "@/components/utils/text";
// context
import { AuthContext } from "context/auth-context/auth-context";
// modules
import useTranslation from "next-translate/useTranslation";

const { Sider, Header, Content } = Layout;
// styles
const StyledSider = styled(Sider)`
  color: #fff;
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  transition: all 0.4s;
`;

const InnerLayout = styled(Layout)`
  margin-left: 0;
  transition: margin 0.4s;

  ${(props) => {
    if (props.collapsed) {
      return `
            margin-${props.locale === "ar" ? "right" : "left"}: 80px;
        `;
    } else {
      return `
        margin-${props.locale === "ar" ? "right" : "left"}: 210px;
    `;
    }
  }}
`;

const StyledDashboardLayout = styled(Layout)`
  min-height: 100vh;
  ${(props) =>
    props.locale === "ar"
      ? `
    ${StyledSider} {
        left: unset;
        right: 0;
    }
  `
      : `
    
  `}
`;

const StyledContent = styled(Content)`
  margin: 24px 16px;
  min-height: 280px;
  margin-top: 88px;
`;
// padding: location.pathname.includes("/Email") ? 0 : 24,

const StyledHeader = styled(Header)`
  background-color: #f9f9f9;
  padding: 0;
  position: fixed;
  z-index: 1000;
  transition: width 0.4s, margin 0.4s;
  ${(props) => (props.locale === "ar" ? `left: 0;` : `right: 0;`)}
  ${(props) =>
    props.collapsed === true
      ? `width: calc(100% - 80px);`
      : `width: calc(100% - 200px);`}
`;

const Logo = styled.div`
  width: 100%;
  display: flex;
  height: 64px;
  align-items: center;
  > a {
    width: 100%;
    justify-content: center;
    display: flex;
    gap: 10px;
    > h3 {
      color: #fff;
    }
  }
`;

const StyledMenu = styled(Menu)`
  transition-duration: 1s;
`;

const HeaderOuter = styled.div`
  padding: 0 20px;
`;

const StyledLink = styled.a`
  font-size: 1.6em;
`;

const HeaderItem = styled.div`
  padding: 0 20px;
  transition: background-color 0.4s;
  &:hover {
    background-color: #eee;
  }
`;

const items = [
  {
    label: "",
    key: "/dashboard",
    href: "/dashboard",
    t: "Menu",
    icon: <DashboardOutlined />,
  }, // remember to pass the key prop
  {
    label: "",
    key: "/dashboard/banner",
    href: "/dashboard/banner",
    t: "Banners",
    icon: <DashboardOutlined />,
  }, // remember to pass the key prop
  // {
  //   label: "",
  //   key: "ad",
  //   t: "ad",

  //   children: [
  //     {
  //       label: "",
  //       key: "/dashboard/ad",
  //       href: "/dashboard/ad",
  //       t: "ads",
  //     },
  //     {
  //       label: "",
  //       key: "/dashboard/ad/add",
  //       href: "/dashboard/ad/add",
  //       t: "addAd",
  //     },
  //   ],
  // },
];

function DashboardLayout({ children }) {
  const router = useRouter();

  const { user } = useContext(AuthContext);

  const { t } = useTranslation("dashboard");

  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [activeGroup, setActiveGroup] = useState("");

  const toggleSide = useCallback((e) => {
    e.preventDefault();
    setCollapsed((prev) => !prev);
  }, []);

  useEffect(() => {
    // items?.map((item) => {
    //     if (item?.children) {
    //     } else return "";
    //   })

    setActivePage(router.route);
  }, [router.route]);

  console.log("active Key is :", activePage);

  return (
    <StyledDashboardLayout locale={router.locale}>
      <StyledSider trigger={null} collapsible collapsed={collapsed}>
        <Logo>
          <Link href="/" passHref scroll={true}>
            <a>
              {!collapsed && <h3>Resturant Menu</h3>}{" "}
              <ShareAltOutlined style={{ color: "#fff", margin: "10px 0" }} />
            </a>
          </Link>
        </Logo>
        <StyledMenu
          theme="dark"
          mode="inline"
          //   defaultSelectedKeys={[activePage]}
          selectedKeys={activePage}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link href="/dash">kk</Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<NotificationFilled />}>
            <Link href="/dashboard/banner">banner</Link>
          </Menu.Item>
        </StyledMenu>
      </StyledSider>
      <InnerLayout collapsed={collapsed} locale={router.locale}>
        <StyledHeader collapsed={collapsed} locale={router.locale}>
          <HeaderOuter>
            <FlexDiv gap={10}>
              <FlexDiv width={30}>
                <StyledLink href="#" onClick={toggleSide}>
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </StyledLink>
              </FlexDiv>
              <FlexDiv flex={1} justifyContent="flex-end">
                <Link href={`/dashboard/profile`} scroll={true}>
                  <a>
                    <HeaderItem>
                      {/* <Text bold="bold">{user?.userName}</Text> */}
                    </HeaderItem>
                  </a>
                </Link>
              </FlexDiv>
            </FlexDiv>
          </HeaderOuter>
        </StyledHeader>
        <StyledContent>{children}</StyledContent>
      </InnerLayout>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
