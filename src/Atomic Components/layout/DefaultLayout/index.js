import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
