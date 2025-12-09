import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
// eslint-disable-next-line
import Project1 from "./pages/projects/Project1";
// eslint-disable-next-line
import Project2 from "./pages/projects/Project2";
// eslint-disable-next-line
import Project3 from "./pages/projects/Project3";
// eslint-disable-next-line
import Project4 from "./pages/projects/Project4";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="mb-4 text-4xl font-bold">404</h1>
    <p className="text-gray-600">Page not found</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects/portfolio"
              element={<Project1 />}
            />
            <Route
              path="/projects/hdfc-app"
              element={<Project2 />}
            />
            <Route
              path="/projects/gallery"
              element={<Project3 />}
            />
            <Route
              path="/projects/crave-app"
              element={<Project4 />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
