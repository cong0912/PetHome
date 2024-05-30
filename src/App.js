import ServiceCard from "./Atomic Components/Molescule/ServiceCards/ServiceCards";
import ProductCard from "./Atomic Components/Molescule/ProductCards/ProductCard";
import BasicSelect from "./Atomic Components/Atom/select/BasicSelect";
import Header from "./Organisms/Header/Header";
import Footer from "./Organisms/Footer/Footer";
import Register from "./Atomic Components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    // <ProductCard
    //   status={"con hang"}
    //   content={"do an cho meo 15kg"}
    //   forType={"cho meo"}
    //   price={"15.000d"}
    // />
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
