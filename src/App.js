import ServiceCard from "./Atomic Components/Molescule/ServiceCards/ServiceCards";
import ProductCard from "./Atomic Components/Molescule/ProductCards/ProductCard";
import BasicSelect from "./Atomic Components/Atom/select/BasicSelect";

import DefaultLayout from "./Atomic Components/layout/DefaultLayout/index.js";
import { Fragment } from "react";
import { publicRoute } from "./routes/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            {publicRoute.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout == null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
