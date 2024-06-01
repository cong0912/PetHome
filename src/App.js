import DefaultLayout from "./Components/layout/DefaultLayout/index.js";
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
