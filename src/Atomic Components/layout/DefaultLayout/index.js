import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}