import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useCallback, useContext } from "react";
// layouts
import DefaultLayout from "layouts/default/layout";
import ModalContainer from "@/components/modal/modal-container";
// configs
import NextNProgress from "nextjs-progressbar";
import Theme from "config/theme";
// cookies
import nookies from "nookies";
// cookies provider
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";

// redux
import { Provider } from "react-redux";
import { useStore } from "../redux/index";
// global styles
import GlobalStyles from "@/styles/global";
// context
import AuthContextProvider from "context/auth-context/auth-context";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
const DashboardLayout = dynamic(
  () => import("layouts/dashboard/dashboard-layout"),
  {
    ssr: false,
  }
);
const layouts = {
  main: DefaultLayout,
  dashboard: DashboardLayout,
  none: (props) => <>{props.children}</>,
};

function MyApp({ Component, pageProps, locale, translations, ...rest }) {
  const router = useRouter();

  const store = useStore(pageProps.initialReduxState);

  const Layout =
    layouts[Component.layout || "none"] || ((children) => <>{children}</>);
  const [cookies, setCookies, clearCookies] = useCookies(["user"]);

  console.log("cookies");
  console.log(cookies);

  // const { t } = useTranslation("common");

  // scroll to top
  useEffect(() => {
    const handleRouteChange = () => {
      document?.getElementById("header")?.scrollIntoView();
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, []);

  return (
    <Theme>
      <Head></Head>

      <NextNProgress />
      <Provider store={store}>
        <AuthContextProvider>
          <CookiesProvider>
            <Layout nested={Component.nested}>
              <GlobalStyles locale={locale} />
              <Component {...pageProps} cookies={cookies} router={router} />
            </Layout>
          </CookiesProvider>
          <ModalContainer />
          {/* <DrawerContainer locale={locale} /> */}
          {/* <Checkers cookies={cookies} restirected={Component.restirected} /> */}
        </AuthContextProvider>
      </Provider>
    </Theme>
  );
}

export default MyApp;
