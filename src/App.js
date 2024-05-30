import ServiceCard from "./Atomic Components/Molescule/ServiceCards/ServiceCards";
import ProductCard from "./Atomic Components/Molescule/ProductCards/ProductCard";
import BasicSelect from "./Atomic Components/Atom/select/BasicSelect";
import Header from "./Organisms/Header/Header";
import Footer from "./Organisms/Footer/Footer";
function App() {
  return (
    <ProductCard
    status={"con hang"}
    content={"do an cho meo 15kg"}
    forType={"cho meo"}
    price={"15.000d"}
    />
  );
}

export default App;
