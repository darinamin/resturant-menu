import Footer from "./footer";
export default function DefaultLayout({ children }) {
  return (
    <div>
      <Footer />
      <div>{children}</div>
    </div>
  );
}
