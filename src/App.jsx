import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

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
          <Navbar />
          <Home />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
