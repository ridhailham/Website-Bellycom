import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import LoadingPage from "./pages/LoadingPage";

const HomePage = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/Home")), 2000)
    )
);

const theRoutes = [
  {
    path: "/",
    content: <HomePage />,
  },
  
];

function App() {
  return (
    <div className="App">
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            {theRoutes.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={item.content}
                ></Route>
              );
            })}
          </Routes>
        </Suspense>
    </div>
  );
}

export default App;
